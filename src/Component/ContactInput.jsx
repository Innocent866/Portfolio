import React, { useState } from "react";
import "../Styles/ContactPage.css";
import toast, { Toaster } from 'react-hot-toast';


const ContactInput = () => {
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [writeMessage, setWriteMessage] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const messageBody = {
      from,
      subject,
      writeMessage
    }

    
    try {
      const data = await fetch('http://localhost:3000/api/create',{
        method: 'POST',
        header:{
          "Content-type":"application/json"
        },
        body: JSON.stringify(messageBody)
      })
      const respond = await data.json()
    //  if (respond.success === true) {
    //   toast.success(respond.message)
    //  }
      console.log(respond);
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
          style={{ background: "#404040" }}
          className="w-100 my-3"
          value={from}
          onChange={(e)=>setFrom(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject"
          style={{ background: "#404040" }}
          className="w-100 my-3"
          value={subject}
          onChange={(e)=>setSubject(e.target.value)}
        />

        <textarea
          className="w-100 my-3"
          style={{ background: "#404040", height: "20rem" }}
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
