import React from "react";
import "../Styles/ProjectPage.css";
import { Link } from "react-router-dom";
import Dash from "../assets/Dash.svg";
import profile from "../assets/WhatsApp Image 2024-02-09 at 5.32.25 AM.jpeg";
import gitup from "../assets/gituplogo.svg";
import sending from "../assets/Sendinglogo.svg";
import ProjectStore from "../Component/ProjectStore.jsx";
import mail from "../assets/email-logo.svg";
import Download from "../Component/Download";

const ProjectPage = () => {
  return (
    <div>
      <div className="general-project justify-content-between d-lg-flex text-white" style={{width:"100%"}}>
        <div className="container general-project-2 mb-5" >
          <div className="ProjectPage">
            <Link to="/" className="text-decoration-none text-white">
              <h2 className="mb-5">INNOCENT.</h2>
            </Link>
            <h3 className="d-inline px-4 py-1" style={{color: "#F16529",backgroundColor:"#FFFFFF", fontFamily: 'Hammersmith One', fontSize:"18px"}}>Full Stack Developer</h3>
            <h1 style={{fontFamily: 'Hammersmith One', fontSize:"56px"}}>Innocent Goldima</h1>
            <p className="lh-base" >
            Knowledgeable developer with proven success designing web pages <br /> that enhance functionality, Strong HTML and CSS programmer.
            </p>

            <div className="my-5 pb-3">
              <Link to="/project" className="d-flex gap-3 text-decoration-none text-white">
                  01{" "}
                  <img
                    src={Dash}
                    alt=""
                    className="dash"
                    style={{ fontSize: "2rem", fontWeight: "10px" }}
                  />{" "}
                 <p className="li "> Projects</p>
                
              </Link>
              <p className="d-flex gap-3">
                  02{" "}
                  <img
                    src={Dash}
                    alt=""
                    style={{ fontSize: "2rem", fontWeight: "10px" }}
                  />{" "}
                  <Download />{" "}
                </p>
              <Link to="/contact" className="d-flex gap-3 text-decoration-none text-white">
                
                  03{" "}
                  <img
                    src={Dash}
                    alt=""
                    className="dash"
                    style={{ fontSize: "2rem", fontWeight: "10px" }}
                  />{" "}
                 <p className="li "> Contacts</p>
              </Link>
            </div>

            <div className="d-flex align-items-center gap-lg-5 justify-content-between justify-content-lg-start">
            <img src={profile} alt="" className="w-25 img-fluid rounded-5" style={{maxWidth:"4rem", height:"4rem"}}/>
              <Link
              to="https://mail.google.com/mail/igoldima@gmail.com"
                target="blank"
                className="text-white text-decoration-none d-flex align-items-center gap-1 gap-lg-3"
              >
                <div className="email  d-flex align-items-center gap-1 gap-lg-3">
                <img src={mail} alt="" />
                Email Me
                <img src={sending} alt="" />
                </div>
              </Link>
              <Link
              to="https://github.com/Innocent866"
                target="blank"
                className="text-white text-decoration-none d-flex align-items-center gap-1 gap-lg-3"
              >
               <div className="git  d-flex align-items-center gap-1 gap-lg-3">
                <img src={gitup} alt="" />
                Github
                <img src={sending} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="general-project-3">
          <ProjectStore />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
