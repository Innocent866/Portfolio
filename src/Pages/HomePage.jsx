import React from "react";
import "../Styles/Home.css";
import img from "../assets/Group 2.svg";
import bootstrap from "../assets/Bootstraplogo.svg";
import html5 from "../assets/html5.svg";
import html3 from "../assets/html3.svg";
import js from "../assets/js.svg";
import javascript from "../assets/logos_javascript.svg";
import react from "../assets/React.svg";
import profile from "../assets/profile.svg";
import gitup from "../assets/gituplogo.svg";
import mail from "../assets/email-logo.svg";
import sending from "../assets/Sendinglogo.svg";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="text-white">
        <Navbar />
        <div className="container">
        <div className="d-lg-flex justify-content-between  align-items-center">
          <div className="Landing-Page">
            <h5>Full Stack Developer</h5>
            <h1 className="mt-5 mt-lg-3" style={{fontFamily:'Hammersmith One'}}>Innocent Goldima</h1>
            <p className="lh-base" style={{fontSize:"18px"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha
              tortor consequat nibh gravida id sit. Quis eget diam ut proin. At
              nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros
              dolor eget. Orci in enim sit luctus lacus arcu.
            </p>
            <div className="d-flex gap-5">
              <img src={bootstrap} alt="" />
              <img src={js} alt="" />
              <img src={html5} alt="" />
              <img src={javascript} alt="" />
              <img src={react} alt="" className="reactlogo"/>
              <img src={html3} alt="" />
            </div>

          </div>
          
           
            <img src={img} alt="" className="img-fluid Landing-Page-img"/>
          
        </div>
        <div className="d-flex align-items-center gap-lg-5 justify-content-between justify-content-lg-start" >
              <img src={profile} alt="" />
              <Link target="blank" className="text-white text-decoration-none d-flex align-items-center gap-1 gap-lg-3">
                <div className="email  d-flex align-items-center gap-1 gap-lg-3">
                <img src={mail} alt="" />
                Email Me
                <img src={sending} alt="" />
                </div>
              </Link>
              <Link  target="blank" className="text-white text-decoration-none">
                <div className="git  d-flex align-items-center gap-1 gap-lg-3">
                <img src={gitup} alt="" />
                Github
                <img src={sending} alt="" />
                </div>
              </Link>
            </div>
            </div>
      </div>
    </>
  );
};

export default HomePage;
