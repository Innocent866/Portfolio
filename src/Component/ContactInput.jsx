import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "../Styles/Contactnput.css";
import toast from 'react-hot-toast';


const ContactInput = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div
      style={{ background: "#2D2D2D", height:"100vh" }}
      className="div container p-5 text-white"
    >
      <h1>SEND A MESSAGE</h1>
      <form action="" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="From"
          style={{ background: "#404040", color:"white"}}
          className="w-100 my-4 p-2"
        />

        <input
          type="text"
          name="user_subject"
          placeholder="Subject"
          style={{ background: "#404040", color:"white" }}
          className="w-100 my-4 p-2"
        />

        <textarea
          className="w-100 my-4 p-2"
          style={{ background: "#404040", height: "20rem", color:"white" }}
          name="message"
          placeholder="Write Message..."
          >
          
        </textarea>

        <div className="text-center">
          <button className="btn btn-light px-5" >Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactInput;
