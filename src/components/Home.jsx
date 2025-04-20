import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare, FaGlobe } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Home = ({ show, setShow }) => {
  return (
    <>
      <section className="page homePage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
        <div className="banner">
          <h1>MANISH</h1>
          <h1>KUMAR</h1>
          <p>Web Developer</p>
          <div className="btns">
            <Link to="https://res.cloudinary.com/dtgwsei71/image/upload/v1745168438/MANISH_RESUME_jm0qts.pdf" target="_blank">
              Resume
            </Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </div>
        <footer>
          <ul>
            <a href="https://www.linkedin.com/in/mk-manishkumar/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://x.com/_manishmk" target="_blank" rel="noopener noreferrer">
              <RiTwitterXLine />
            </a>
            <a href="https://github.com/mk-manishkumar" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare />
            </a>
            <a href="https://manishmk.vercel.app/" target="_blank" rel="noopener noreferrer">
              <FaGlobe />
            </a>
          </ul>
          <a className="download-btn" href="/Resume.pdf" download="Resume.pdf">
            [Download CV]
          </a>
        </footer>
      </section>
    </>
  );
};

export default Home;
