import React from 'react'
import "../Styles/ProjectStore.css";
import { Link } from "react-router-dom";
import weblogo from "../assets/websitelogo.svg";
import gitup from "../assets/gituplogo.svg";
import sending from "../assets/Sendinglogo.svg";

const ProjectStore = () => {
  return (
    <div style={{background: "#2D2D2D", height:"100vh"}} className="div px-1 py-5">
      <div>
        <div className='store-div d-lg-flex d-md-flex justify-content-md-between py-lg-3 px-lg-5 px-5 '>
          <div className='p-2 m-2' style={{background: "#404040"}}>
            <p>React & Node</p>
            <h2 className='mb-5'>BetaHouse</h2>
            <div className='d-flex'>
            <Link target="blank" to="https://github.com/Innocent866/Beta-Home" className='text-decoration-none text-white'>
            <div className="pad p-2  d-flex gap-1 align-items-center">
                <img src={gitup} alt="" />
                GitHub
                <img src={sending} alt="" />
                </div>
                </Link>
              
                <Link to="https://beta-home-murex.vercel.app/" target="blank" className='text-decoration-none text-white '>
                <div className="pad p-2  d-flex gap-1 align-items-center">
                <img src={weblogo} alt="" />
                WebSite
                <img src={sending} alt="" />
                </div>
                </Link>
                
              
            </div>
          </div>
          <div className='p-2 m-2 me-lg-5' style={{background: "#404040"}}>
            <p>React & Node</p>
            <h2 className='mb-5'>Jazzy Burger</h2>
            <div className='d-flex'>
            <Link to="https://github.com/Innocent866/Jazzy-Burger" target="blank" className='text-decoration-none text-white'>
            <div className="pad p-2  d-flex gap-1 align-items-center">
                <img src={gitup} alt="" />
                GitHub
                <img src={sending} alt="" />
                </div>
                </Link>
              
                <Link to="https://jazzy-burger-omega.vercel.app/" target="blank" className='text-decoration-none text-white '>
                <div className="pad p-2  d-flex gap-1 align-items-center">
                <img src={weblogo} alt="" />
                WebSite
                <img src={sending} alt="" />
                </div>
                </Link>
            </div>
          </div>
        </div>
        <div className='store-div d-lg-flex d-md-flex justify-content-md-between py-lg-3 px-lg-5 px-5'>
          <div className='p-2 m-2' style={{background: "#404040"}}>
            <p>React & Node</p>
            <h2 className='mb-5'>MobileCarWask</h2>
            <div className='d-flex'>
            
                <Link to="https://github.com/Innocent866/InternProjectForntend" target="blank" className="text-white text-decoration-none">
               <div className="pad p-2  d-flex gap-1 align-items-center">
                <img src={gitup} alt="" />
                Github
                <img src={sending} alt="" />
                </div>
              </Link>
                <Link to="https://intern-project-forntend.vercel.app/" target="blank" className='text-decoration-none text-white'>
                <div className="pad p-2 d-flex gap-1 align-items-center">
                <img src={weblogo} alt="" />
                WebSite
                <img src={sending} alt="" />
                </div>
                </Link>
            </div>
          </div>
          <div className='p-2 m-2 me-lg-5' style={{background: "#404040"}}>
            <p>React</p>
            <h2 >Postit</h2>
            <h2 >ongoing</h2>
            <div className='d-flex'>
            <Link to="https://github.com/Innocent866/PostIt" target="blank" className='text-decoration-none text-white'>
            <div className="pad p-2 d-flex gap-1 align-items-center">
                <img src={gitup} alt="" />
                GitHub
                <img src={sending} alt="" />
                </div>
                </Link>
              
                <Link to="https://post-it-omega.vercel.app/" target="blank" className='text-decoration-none text-white'>
                <div className="pad p-2 d-flex gap-1 align-items-center">
                <img src={weblogo} alt="" />
                WebSite
                <img src={sending} alt="" />
                </div>
                </Link>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  )
}

export default ProjectStore