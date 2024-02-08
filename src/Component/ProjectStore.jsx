import React from 'react'
import "../Styles/ProjectStore.css";
import { Link } from "react-router-dom";
import weblogo from "../assets/websitelogo.svg";
import gitup from "../assets/gituplogo.svg";
import sending from "../assets/Sendinglogo.svg";

const ProjectStore = () => {
  return (
    <div style={{background: "#2D2D2D"}} className="div px-1 py-5">
      <div className=''>
        <div className='store-div d-lg-flex d-md-flex justify-content-md-between py-lg-3 px-lg-5 px-5 '>
          <div className='p-2 m-2' style={{background: "#404040"}}>
            <p>React & Node</p>
            <h2 className='mb-5'>TaskDuty</h2>
            <div className='d-flex'>
            <Link target="blank" to="https://github.com/Innocent866/TaskDuty" className='text-decoration-none text-white'>
            <div className="pad p-2  d-flex gap-1 align-items-center">
                <img src={gitup} alt="" />
                GitHub
                <img src={sending} alt="" />
                </div>
                </Link>
              
                <Link to="https://task-duty-lyart.vercel.app/" target="blank" className='text-decoration-none text-white '>
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
            <Link to="https://github.com/Innocent866/lastfrontproject" target="blank" className='text-decoration-none text-white'>
            <div className="pad p-2  d-flex gap-1 align-items-center">
                <img src={gitup} alt="" />
                GitHub
                <img src={sending} alt="" />
                </div>
                </Link>
              
                <Link to="https://lastfrontproject.vercel.app/" target="blank" className='text-decoration-none text-white '>
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
            <h2 className='mb-5'>Goal-On</h2>
            <div className='d-flex'>
            
                <Link to="https://github.com/Innocent866/GoalFrontend" target="blank" className="text-white text-decoration-none">
               <div className="pad p-2  d-flex gap-1 align-items-center">
                <img src={gitup} alt="" />
                Github
                <img src={sending} alt="" />
                </div>
              </Link>
                <Link to="https://goal-on.vercel.app/" target="blank" className='text-decoration-none text-white'>
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
            <h2 className='mb-5'>Huddle</h2>
            <div className='d-flex'>
            <Link to="https://github.com/Innocent866/huddle" target="blank" className='text-decoration-none text-white'>
            <div className="pad p-2 d-flex gap-1 align-items-center">
                <img src={gitup} alt="" />
                GitHub
                <img src={sending} alt="" />
                </div>
                </Link>
              
                <Link to="https://huddle-lime.vercel.app/" target="blank" className='text-decoration-none text-white'>
                <div className="pad p-2 d-flex gap-1 align-items-center">
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
            <h2 className='mb-5'>Goal-On</h2>
            <div className='d-flex'>
            
                <Link to="#" target="blank" className="text-white text-decoration-none">
               <div className="pad p-2  d-flex gap-1 align-items-center">
                <img src={gitup} alt="" />
                Github
                <img src={sending} alt="" />
                </div>
              </Link>
                <Link to="#" target="blank" className='text-decoration-none text-white'>
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
            <h2 className='mb-5'>Huddle</h2>
            <div className='d-flex'>
            <Link to="#" target="blank" className='text-decoration-none text-white'>
            <div className="pad p-2 d-flex gap-1 align-items-center">
                <img src={gitup} alt="" />
                GitHub
                <img src={sending} alt="" />
                </div>
                </Link>
              
                <Link to="#" target="blank" className='text-decoration-none text-white'>
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