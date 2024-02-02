import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { BiListUl } from "react-icons/bi";
import NavDropDown from "../Component/NavDropDown";
import Download from "../Component/Download";
import MessageSentModal from "../Component/MessageSentModal";

const Navbar = () => {

  const [show, setShow] = useState(false)

  const close = ()=>{
    if (show === false) {
      setShow(true)
    }else{
      setShow(false)
    }
  }

  return (
    <div className="p-3 container my-3">
      <nav className="d-flex justify-content-between align-items-center">
      <h3>INNOCENT.</h3>
        <ul className="d-none d-lg-flex justify-content-between gap-5 align-items-center list-unstyled ">
          <Link className="text-decoration-none text-white" to="/project">
            <li>Project</li>
          </Link>
          <Download/>
          {/* <Link className="text-decoration-none text-white" to="/contact">
            <li>Contact</li>
          </Link> */}
          <MessageSentModal/>
        </ul>
        <div className="d-block d-lg-none" onClick={close}>
        <BiListUl/>
        </div>

      </nav>

      {show && <NavDropDown/>}

    </div>
  );
};

export default Navbar;
