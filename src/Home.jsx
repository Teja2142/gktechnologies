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


    const [expanded, setExpanded] = useState(false);

    const toggleReadMore = () => {
        setExpanded(!expanded);
    };

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
                            <button style={{ background: "black", color: "white", padding: "10px 20px", border: "none", fontSize: "1rem", marginTop: "10px", cursor: "pointer" }}> <Link to='/about' style={{textDecoration:"none", color:'white'}}> Read More </Link></button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "50px", backgroundColor: "#fff" }}>
        {/* Left Side - Image */}
        <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
            <img
            src="https://www.shutterstock.com/image-photo/ai-big-data-business-analytics-600nw-2462546293.jpg"
            alt="Tech Illustration"
            style={{ width: "90%", maxWidth: "500px", borderRadius: "20px" }}
            />
        </div>

        {/* Right Side - Text Content */}
        <div style={{ flex: "1", textAlign: "left", paddingLeft: "50px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#1e3a8a" }}>
            Mission Of <span style={{ color: "#f97316" }}>GK Technology</span>
            </h2>
            <p style={{ fontSize: "16px", color: "#1e293b", lineHeight: "1.6", margin: "20px 0" }}>
            GK Technology is a premier onsite/offshore software solutions and services company, headquartered in the U.K. 
            We are recognized as the second-largest private IT company and ranked among the 50 fastest-growing private companies.
            {expanded && (
                <>
                <br /><br />
                We deliver digital transformation through cutting-edge software and AI. Our goal is to enable startups and enterprises 
                to reach new heights with scalable, secure, and cost-effective solutions.
                </>
            )}
            </p>
            <button
            onClick={toggleReadMore}
            style={{
                backgroundColor: "black",
                color: "white",
                padding: "12px 24px",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer"
            }}
            >
            {expanded ? "Read Less" : "Read More"}
            </button>
        </div>
        </div>

        {/* Banner */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 50px", backgroundImage: "url('https://img.freepik.com/premium-photo/technology-background-design-by-using-digital-elements_221397-38.jpg')", backgroundSize: "cover", backgroundPosition: "center", color: "white" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "bold", margin: "0" }}>Sharing Expertise. Building Relationships.</h2>
            <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "18px", margin: "0" }}>+1-314-732-7749, +1-314-732-7749</p>
                <p style={{ fontSize: "16px", margin: "5px 0" }}>support@kgktechnology.com</p>
                <a href="https://wa.me/13147327749" target="_blank" rel="noopener noreferrer">
                    <button style={{ backgroundColor: "green", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}>
                        WhatsApp
                    </button>
                    </a>
            </div>
        </div>

        {/* cards */}
        <div style={{ textAlign: "center", padding: "50px", backgroundColor: "#f4f4f4" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#007b8f", marginBottom: "20px" }}>
                Our <span style={{ color: "#f7941d" }}>Services</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", maxWidth: "1200px", margin: "auto" }}>
                {[
                { img: "https://fuestech.com/wp-content/uploads/2024/07/KT-CC-10.jpg", title: "Mobile Development", link: "/Mobile" },
                { img: "https://admin.12grids.com/uploads/blogs/original_cover_images/abcs-of-dynamic-web-application-development-12grids.jpg", title: "Web Applications", link: "/Web" },
                { img: "https://media.istockphoto.com/id/1317706831/photo/api-application-programming-interface-software-development-tool-business-modern-technology.jpg?s=612x612&w=0&k=20&c=V4hdG0NiqKhbk4VFwFktNs6bhq8yXo_Tqd__8vKZqdk=", title: "API Services", link: "/Api" },
                { img: "https://blog.1byte.com/wp-content/uploads/2023/04/overview-4-1024x683.jpg", title: "Cloud Infrastructure", link: "/Cloud" },
                { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCuL1Lm8-i23sX4lGnDgmV6SE3JA1VquVOA&s", title: "IoT Solutions", link: "/IoT" },
                { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl905190f3d3rw6d_uA5wKInZMfLMSAhIvfg&s", title: "Data Analytics", link: "/Data" }
                ].map((service, index) => (
                <div key={index} style={{ backgroundColor: "white", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", textAlign: "center", transform: animate ? "translateY(0)" : "translateY(90px)", opacity: animate ? 1 : 0, transition: `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s` }}>
                    <Link to={service.link} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                    <div style={{ padding: "10px" }}>
                        <img src={service.img} alt={service.title} style={{ width: "100%", height: "180px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
                        <div style={{ backgroundColor: "#f7941d", color: "white", padding: "12px", fontWeight: "bold", fontSize: "1rem" }}>{service.title}</div>
                    </div>
                    </Link>
                </div>
                ))}
            </div>
        </div>


        </>
    );
};

export default Home;
