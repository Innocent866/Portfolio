import React, { useState } from "react";
import Downloadlogo from '../assets/messagelogo.svg'
import CloseModal from '../assets/closemodallogo.svg'
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
import Modal from "react-bootstrap/Modal";

const MessageSentModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <ul className="list-unstyled" onClick={handleShow}>
        <li style={{cursor:"pointer"}}>Contact</li>
    </ul>
      

      <Modal show={show} onHide={handleClose} className="">
        
        <Modal.Body className="text-white text-center rounded bg-dark">
          <div onClick={()=>setShow(false)} className="text-end" style={{cursor:"pointer"}}>
          <img src={CloseModal} alt=""/>
          </div>
          <div className="px-3 py-5">
          <img src={Downloadlogo} alt="" />
          <h1>Message Sent!</h1>
          <p style={{color:"#B5B5B5"}}>Thank you for reaching out, a response will be sent shortly. In the meantime, kindly check projects I've worked on.</p>

          <button className="w-50 border-0 mb-5 rounded p-1" onClick={handleClose}>
        Go to Projects
        </button>
          </div>
          </Modal.Body>
        
          
          
        
        
      </Modal>
    </>  )
}

export default MessageSentModal