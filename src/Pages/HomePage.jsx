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
      <div className="text-white bg-dark">
        <Navbar />
        <div className="container d-lg-flex justify-content-between  align-items-center">
        <img src={img} alt="" className="mw-100 d-block d-lg-none mb-5" />
          <div className="Landing-Page w-100">
            <h5>Full Stack Developer</h5>
            <h1 className="mt-5">Adriana McTominay</h1>
            <p className="lh-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha
              tortor consequat nibh gravida id sit. Quis eget diam ut proin. At
              nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros
              dolor eget. Orci in enim sit luctus lacus arcu.
            </p>
            <div className="d-flex gap-lg-5 gap-3">
              <img src={bootstrap} alt="" />
              <img src={js} alt="" />
              <img src={html5} alt="" />
              <img src={javascript} alt="" />
              <img src={react} alt="" className="reactlogo"/>
              <img src={html3} alt="" />
            </div>

            <div className="d-lg-flex d-none align-items-center justify-content-between" >
              <img src={profile} alt="" />
              <Link className="text-white text-decoration-none border border-1  d-flex align-items-center gap-4">
                <img src={mail} alt="" />
                <h4 className="d-none d-lg-block">Email Me</h4>
                <img src={sending} alt="" />
              </Link>
              <Link to="/Contact" target="blank" className="text-white text-decoration-none border  d-flex align-items-center gap-4">
                <img src={gitup} alt="" />
                <h4 className="d-none d-lg-block">Gitup</h4>
                <img src={sending} alt="" />
              </Link>
            </div>
          </div>
          
           
            <img src={img} alt="" className="Landing-Page-img d-none d-lg-block"/>
          
        </div>
      </div>
    </>
  );
};

export default HomePage;
