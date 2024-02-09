import React, { useState } from "react";
import Downloadlogo from '../assets/downloadlogo.svg'
import CloseModal from '../assets/closemodallogo.svg'
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
import Modal from "react-bootstrap/Modal";

const Download = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <ul className="list-unstyled" onClick={handleShow}>
        <li className="li" style={{cursor:"pointer"}}>Download Resume</li>
    </ul>
      

      <Modal show={show} onHide={handleClose} className="">
        
        <Modal.Body className="text-white text-center rounded pb-5 bg-dark">
          <div onClick={()=>setShow(false)} className="text-end" style={{cursor:"pointer"}}>
          <img src={CloseModal} alt=""/>
          </div>
          <img src={Downloadlogo} alt="" />
          <Link style={{color:"#F16529"}}><p className="mt-2">Mubarak's Resume.pdf</p></Link>
          <h1>Download In Progress!</h1>
          <p style={{color:"#B5B5B5"}}>Kindly check your downloads for the downloaded file.</p>

          <button className="w-50 border-0 mb-5 rounded p-1" onClick={handleClose}>
        Go to Downloads
        </button>
          </Modal.Body>
        
          
          
        
        
      </Modal>
    </>
  );
};

export default Download;
