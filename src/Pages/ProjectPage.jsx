import React from 'react'
import '../Styles/ProjectPage.css'
import { Link } from "react-router-dom";
import Dash from '../assets/Dash.svg'
import profile from "../assets/profile.svg";
import gitup from "../assets/gituplogo.svg";
import sending from "../assets/Sendinglogo.svg";
import ProjectStore from "../Component/ProjectStore.jsx"
import mail from "../assets/email-logo.svg";
import Download from "../Component/Download";




const ProjectPage = () => {
  return (
    <div>
      <div className="d-lg-flex bg-dark text-white align-items-center justify-content-center">
        
        <div className='container mb-5'>
         
          <div className="ProjectPage">
          <Link to='/' className='text-decoration-none text-white'><h2 className='position-lg-absolute top-0'>Adriana.</h2></Link>
            <h3>Full Stack Developer</h3>
            <h1>Adriana McTominay</h1>
            <p className="lh-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha
              tortor consequat nibh gravida id sit. Quis eget diam ut proin. At
              nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros
              dolor eget. Orci in enim sit luctus lacus arcu.
            </p>
            

            <div className='my-5 pb-5'>
             <Link to='/project' className='text-decoration-none text-white'><p className='d-flex gap-3'>01 <img src={Dash} alt="" /> Projects</p></Link>
             <Link to='' className='text-decoration-none text-white'><p className='d-flex gap-3'>02 <img src={Dash} alt="" /> <Download/> </p></Link>
             <Link to='/contact' className='text-decoration-none text-white'><p className='d-flex gap-3'>03 <img src={Dash} alt="" /> Contacts</p></Link>
            </div>


            <div className="d-flex justify-content-between" >
              <img src={profile} alt="" />
              <Link className="d-flex align-items-center gap-2 text-decoration-none">
                <img src={mail} alt="" />
                <h6 className="d-none text-white d-lg-block">Email Me</h6>
                <img src={sending} alt="" />
              </Link>
              <Link className="d-flex align-items-center gap-2 text-decoration-none">
                <img src={gitup} alt="" />
                <h6 className="d-none d-lg-block text-white">Github</h6>
                <img src={sending} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <ProjectStore/>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage