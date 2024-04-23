import React, { useRef, useState } from "react";
import "../Styles/Contactnput.css";
import LazyLoad from 'react-lazyload';
import toast from 'react-hot-toast';
import axios from "axios";

const ContactInput = () => {
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [writeMessage, setWriteMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!from || !subject || !writeMessage) {
      toast.error("Please fill in all fields.");
      return;
    }

    const bodyprops = { from, subject, writeMessage };
    try {
      const response = await axios.post("https://portfolio-2slt.onrender.com/api/create", bodyprops);
      console.log(response.data);
      toast.success("Message sent successfully!");
      // Clear form inputs after successful submission
      setFrom("");
      setSubject("");
      setWriteMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div style={{ background: "#2D2D2D", height: "100%" }} className="div container p-5 text-white">
      <h1>SEND A MESSAGE</h1>
      <form action="" onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="From"
          style={{ background: "#404040", color: "white" }}
          className="w-100 my-4 p-2"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject"
          style={{ background: "#404040", color: "white" }}
          className="w-100 my-4 p-2"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          className="w-100 my-4 p-2"
          style={{ background: "#404040", height: "20rem", color: "white" }}
          placeholder="Write Message..."
          value={writeMessage}
          onChange={(e) => setWriteMessage(e.target.value)}
        ></textarea>

        <div className="text-center">
          <button className="btn btn-light px-5">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactInput;