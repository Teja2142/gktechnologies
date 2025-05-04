import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import slide1 from "./images/slide1.png"; 
import slide2 from "./images/slide2.png";
import slide3 from "./images/slide3.png";
// import tech from "./images/tech.png";
import { Link } from "react-router-dom";

const Home = () => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 900); // Small delay for a smooth effect
    }, []);


    return (
        <>
        {/* slides */}
        <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={0} slidesPerView={1} navigation pagination={{ clickable: true }} autoplay={{ delay: 4000, disableOnInteraction: false }} loop={true} style={{ width: "100%", height: "80vh" }}>
            {[slide1, slide2, slide3].map((slide, index) => (
                <SwiperSlide key={index}>
                    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
                        <img src={slide} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.5)", zIndex: 1 }}></div>
                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "white", zIndex: 2 }}>
                            <h2 style={{ fontSize: "3rem", fontWeight: "bold" }}>Welcome To <span style={{ color: "#ffcc00" }}>GK Technology</span></h2>
                            <button style={{ background: "black", color: "white", padding: "10px 20px", border: "none", fontSize: "1rem", marginTop: "10px", cursor: "pointer" }}>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        
        {/* our mission */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "50px", backgroundColor: "#fff" }}>
            {/* Left Side - Image */}
            <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
                <img src="https://www.shutterstock.com/image-photo/ai-big-data-business-analytics-600nw-2462546293.jpg" alt="Tech Illustration" style={{ width: "90%", maxWidth: "500px", borderRadius: "20px" }} />
            </div>

            {/* Right Side - Text Content */}
            <div style={{ flex: "1", textAlign: "left", paddingLeft: "50px" }}>
                <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#1e3a8a" }}>
                Mission Of <span style={{ color: "#f97316" }}>GK Technology</span>
                </h2>
                <p style={{ fontSize: "16px", color: "#1e293b", lineHeight: "1.6", margin: "20px 0" }}>
                GK Technology is a premier onsite/offshore software solutions and services company, headquartered in the U.K. We are recognized as the 
                second-largest private IT company and ranked among the 50 fastest-growing private companies.
                </p>
                <button style={{ backgroundColor: "black", color: "white", padding: "12px 24px", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}>
                Read More
                </button>
            </div>
        </div>

        {/* Banner */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 50px", backgroundImage: "url('https://img.freepik.com/premium-photo/technology-background-design-by-using-digital-elements_221397-38.jpg')", backgroundSize: "cover", backgroundPosition: "center", color: "white" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "bold", margin: "0" }}>Sharing Expertise. Building Relationships.</h2>
            <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "18px", margin: "0" }}>04021422142, 04021422142</p>
                <p style={{ fontSize: "16px", margin: "5px 0" }}>info@gktechnology.com</p>
                <button style={{ backgroundColor: "green", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}>Whatsapp</button>
            </div>
        </div>

        {/* cards */}
        {/* Services Section */}
        <div style={{ textAlign: "center", padding: "50px", backgroundColor: "#f4f4f4" }}>
                <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#007b8f", marginBottom: "20px" }}>
                    Our <span style={{ color: "#f7941d" }}>Services</span>
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", maxWidth: "1200px", margin: "auto" }}>
                    {[ 
                        { img: "https://fuestech.com/wp-content/uploads/2024/07/KT-CC-10.jpg", title: "Mobile Apps", link: "/Mobile" },
                        { img: "https://admin.12grids.com/uploads/blogs/original_cover_images/abcs-of-dynamic-web-application-development-12grids.jpg", title: "Web Applications" , link: "/Web" },
                        { img: "https://media.istockphoto.com/id/1317706831/photo/api-application-programming-interface-software-development-tool-business-modern-technology.jpg?s=612x612&w=0&k=20&c=V4hdG0NiqKhbk4VFwFktNs6bhq8yXo_Tqd__8vKZqdk=", title: "APIs" , link: "/Api" },
                        { img: "https://blog.1byte.com/wp-content/uploads/2023/04/overview-4-1024x683.jpg", title: "Cloud Infrastructure" , link: "/Cloud" },
                        { img: "https://media.istockphoto.com/id/1517344698/photo/white-cyborg-robotic-hand-pointing-his-finger-to-human-hand-with-stretched-finger-ai.jpg?s=612x612&w=0&k=20&c=j5Ku_NMzQNE-9S3TBG_sNMkFASYLSAGUzdVbCsgNcsU=", title: "AI Solutions" , link : "/Ai" },
                        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl905190f3d3rw6d_uA5wKInZMfLMSAhIvfg&s", title: "Data Analytics" , link: "/Data"},
                        { img: "https://learn.aiacontracts.com/wp-content/uploads/2024/01/AdobeStock_496986836.jpeg", title: "Individual Trainings" },
                        { img: "https://www.aafmindia.co.in/finance-banking-insurance-training/images/imagebox/3.jpg", title: "Corporate Trainings" }
                    ].map((service, index) => (
                    <div 
                        key={index} 
                        style={{ backgroundColor: "white", borderRadius: "10px",  overflow: "hidden",  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",  textAlign: "center", opacity: animate ? 1 : 0,  transform: animate ? "translateY(0)" : "translateY(90px)",  transition: `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s` }}>
                            {service.link ? (
                                <Link to={service.link} style={{ textDecoration: "none", color: "inherit" }}>
                                    <div style={{ padding: "10px" }}>
                                        <img src={service.img} alt={service.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                                        <div style={{ backgroundColor: "#f7941d", color: "white", padding: "10px", fontWeight: "bold" }}>{service.title}</div>
                                    </div>
                                </Link>
                            ) : (
                                <div style={{ padding: "10px" }}>
                                    <img src={service.img} alt={service.title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                                    <div style={{ backgroundColor: "#f7941d", color: "white", padding: "10px", fontWeight: "bold" }}>{service.title}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
        </div>

        </>
    );
};

export default Home;
