const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
const Busboy = require('busboy');

// Initialize Firebase
admin.initializeApp();

// Configure email transport using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password
  }
});

exports.submitCareerForm = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');
    }

    // Parse multipart form data
    const busboy = new Busboy({headers: req.headers});
    const formData = {
      files: []
    };

    busboy.on('field', (fieldname, value) => {
      formData[fieldname] = value;
    });

    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      if (fieldname === 'resume') {
        const fileChunks = [];
        file.on('data', (data) => {
          fileChunks.push(data);
        });
        
        file.on('end', () => {
          formData.files.push({
            fieldname,
            filename,
            mimetype,
            buffer: Buffer.concat(fileChunks)
          });
        });
      } else {
        file.resume();
      }
    });

    busboy.on('finish', async () => {
      try {
        // Validate required fields
        const requiredFields = ['fullName', 'email', 'phone', 'position', 'workAuth', 'location', 'availability'];
        for (const field of requiredFields) {
          if (!formData[field]) {
            return res.status(400).json({error: `Missing required field: ${field}`});
          }
        }

        // Handle file upload if exists
        let resumeUrl = '';
        if (formData.files.length > 0) {
          const file = formData.files[0];
          const bucket = admin.storage().bucket();
          const filePath = `resumes/${Date.now()}_${file.filename}`;
          const fileUpload = bucket.file(filePath);

          await fileUpload.save(file.buffer, {
            metadata: {
              contentType: file.mimetype
            }
          });

          // Get download URL
          const [url] = await fileUpload.getSignedUrl({
            action: 'read',
            expires: '03-09-2491' // Far future date
          });
          resumeUrl = url;
        }

        // Save form data to Firestore
        const formSubmission = {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          linkedIn: formData.linkedIn || '',
          position: formData.position,
          workAuth: formData.workAuth,
          location: formData.location,
          availability: formData.availability,
          comments: formData.comments || '',
          resumeUrl,
          submittedAt: admin.firestore.FieldValue.serverTimestamp()
        };

        await admin.firestore().collection('careerSubmissions').add(formSubmission);

        // Send email notification
        const mailOptions = {
          from: `GK Technologies <${functions.config().gmail.email}>`,
          to: functions.config().notification.email,
          subject: `New Career Interest: ${formData.fullName}`,
          html: `
            <h2>New Career Interest Submission</h2>
            <p><strong>Name:</strong> ${formData.fullName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Position:</strong> ${formData.position}</p>
            <p><strong>Work Authorization:</strong> ${formData.workAuth}</p>
            <p><strong>Preferred Location:</strong> ${formData.location}</p>
            <p><strong>Availability:</strong> ${formData.availability}</p>
            ${formData.linkedIn ? `<p><strong>LinkedIn:</strong> <a href="${formData.linkedIn}">${formData.linkedIn}</a></p>` : ''}
            ${resumeUrl ? `<p><strong>Resume:</strong> <a href="${resumeUrl}">Download Resume</a></p>` : ''}
            ${formData.comments ? `<p><strong>Comments:</strong> ${formData.comments}</p>` : ''}
            <br>
            <p>This submission has been saved to the database.</p>
          `
        };

        await transporter.sendMail(mailOptions);

        // Send confirmation email to applicant
        const applicantMailOptions = {
          from: `GK Technologies <${functions.config().gmail.email}>`,
          to: formData.email,
          subject: 'Thank you for your interest in GK Technologies',
          html: `
            <h2>Thank You, ${formData.fullName}!</h2>
            <p>We've received your career interest submission for the position of <strong>${formData.position}</strong>.</p>
            <p>While we don't currently have open positions, we'll keep your information on file and reach out when opportunities matching your profile become available.</p>
            <p>If you have any questions, feel free to reply to this email.</p>
            <br>
            <p>Best regards,</p>
            <p>The GK Technologies Team</p>
          `
        };

        await transporter.sendMail(applicantMailOptions);

        return res.status(200).json({message: 'Form submitted successfully!'});
      } catch (error) {
        console.error('Error submitting form:', error);
        return res.status(500).json({error: 'Something went wrong. Please try again.'});
      }
    });

    busboy.end(req.rawBody);
  });
});