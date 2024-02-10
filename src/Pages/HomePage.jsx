import React from "react";
import "../Styles/Home.css";
import img from "../assets/Group 2.svg";
import bootstrap from "../assets/Bootstraplogo.svg";
import html5 from "../assets/html5.svg";
import html3 from "../assets/html3.svg";
import javascript from "../assets/logos_javascript.svg";
import react from "../assets/React.svg";
import profile from "../assets/WhatsApp Image 2024-02-09 at 5.32.25 AM.jpeg";
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
             <strong className="fs-1">About :</strong> My name is INNOCENT GOLDIMA DAKUP am from NIGERIA, PLATEAU STATE, I am a WEBSITE DEVELOPER FULLSTACK but Specialized on FRONTEND DEVELOPER. You can preview my passed project by clicking on the project button and contact me by also clicking on the Contact button
            </p>
           <div className="d-lg-flex gap-5">
           <div>
             <p  className="text-decoration-underline fs-5"> List of Programming tool I use:</p>
              <ol>
                <li>HTML <img className="img1" src={html5} alt="" /></li>
                <li>CSS <img className="img2" src={html3} alt="" /></li>
                <li>Javascript <img className="img3" src={javascript} alt="" /></li>
                
              </ol>
            </div>
            <div>
             <p className="text-decoration-underline fs-5"> List of Framework tool I use:</p>
              <ol>
                <li>Bootstrap <img className="img4" src={bootstrap} alt="" /></li>
                <li>React <img src={react} alt="" className="reactlogo"/></li>
              </ol>
            </div>
           </div>
          

          </div>
          
           
            <img src={img} alt="" className="img-fluid Landing-Page-img"/>
          
        </div>
        <div className="d-flex align-items-center gap-lg-5 justify-content-between justify-content-lg-start" >
              <img src={profile} alt="" className="w-25 img-fluid rounded-5" style={{maxWidth:"4rem", height:"4rem"}}/>
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
