import React from 'react'
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";

const Navbar = ({show}) => {
  return (
    <>
      <nav className={show ? "nav mobile-nav" : "nav"}>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/career"}>Career</Link>
          <Link to={"/portfolio"}>Portfolio</Link>
        </ul>
        <div className="email">
          <CiMail />
          <span>manish.login@gmail.com</span>
        </div>
      </nav>
    </>
  );
}

export default Navbar
