import React from 'react'
import '../Styles/ContactPage.css'
import { Link } from "react-router-dom";
import Dash from '../assets/Dash.svg'
import profile from "../assets/WhatsApp Image 2024-02-09 at 5.32.25 AM.jpeg";
import gitup from "../assets/gituplogo.svg";
import sending from "../assets/Sendinglogo.svg";
import ProjectStore from "../Component/ProjectStore.jsx"
import mail from "../assets/email-logo.svg";
import Download from "../Component/Download";
import ContactInput from '../Component/ContactInput.jsx';




const ContactPage = () => {
  return (
    <div>
      <div className="justify-content-between d-lg-flex text-white ">
        
        <div className='container mb-5'>
         
          <div className="ContactPage">
          <Link to='/' className='text-decoration-none text-white'><h2  className='mb-5'>INNOCENT.</h2></Link>
         
            <h3 className='d-inline px-4 py-1'>Full Stack Developer</h3>
            <h1>Innocent Goldima</h1>
            <p className="lh-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha
              tortor consequat nibh gravida id sit. Quis eget diam ut proin. At
              nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros
              dolor eget. Orci in enim sit luctus lacus arcu.
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
              <Link to="" className="text-decoration-none text-white">
                <p className="d-flex gap-3">
                  02{" "}
                  <img
                    src={Dash}
                    alt=""
                    style={{ fontSize: "2rem", fontWeight: "10px" }}
                  />{" "}
                  <Download />{" "}
                </p>
              </Link>
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


            <div className="d-flex align-items-center gap-lg-5 justify-content-between justify-content-lg-start" >
            <img src={profile} alt="" className="w-25 img-fluid rounded-5" style={{maxWidth:"4rem", height:"4rem"}}/>
              <Link target="blank" className="text-white text-decoration-none d-flex align-items-center gap-1 gap-lg-3">
              <div className="email  d-flex align-items-center gap-1 gap-lg-3">
                <img src={mail} alt="" />
                Email Me
                <img src={sending} alt="" />
                </div>
              </Link>
              <Link
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
        <div>
          <ContactInput/>
        </div>
      </div>
    </div>
  )
}

export default ContactPage