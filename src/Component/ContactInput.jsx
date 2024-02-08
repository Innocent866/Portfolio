import React, { useState } from "react";
import "../Styles/Contactnput.css";
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';


const ContactInput = () => {
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [writeMessage, setWriteMessage] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault()

    // const messageBody = 

    
    try {
      const data = await axios.post('https://portfolio-2slt.onrender.com/api/create',{
        from,
        subject,
        writeMessage
      })
    //  if (respond.success === true) {
    //   toast.success(respond.message)
    //  }
      console.log(data);
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <div
      style={{ background: "#2D2D2D" }}
      className="div container p-5 text-white"
    >
      <h1>SEND A MESSAGE</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="From"
          style={{ background: "#404040", color:"white"}}
          className="w-100 my-4 p-2"
          value={from}
          onChange={(e)=>setFrom(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject"
          style={{ background: "#404040", color:"white" }}
          className="w-100 my-4 p-2"
          value={subject}
          onChange={(e)=>setSubject(e.target.value)}
        />

        <textarea
          className="w-100 my-4 p-2"
          style={{ background: "#404040", height: "20rem", color:"white" }}
          value={writeMessage}
          onChange={(e)=>setWriteMessage(e.target.value)}
        >
          Write Message...
        </textarea>

        <div className="text-center">
          <button className="btn btn-light px-5" >Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactInput;
