import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
const About = ({ show, setShow }) => {
  return (
    <>
      <section className="page aboutPage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />

        <div className="banner">
          <div className="content">
            <div>
              <h1>ABOUT</h1>
            </div>
            <div>I am a software developer with expertise in both frontend and backend development. I am continuously improving my skills in software development and exploring new domains such as DevOps, GenAi etc. As an avid learner, I am also an Open Source Contributor, actively contributing to the technology community. In my spare time, I share my knowledge and experience through my tech blogs, hoping to inspire and educate others.</div>
            <div>
              <p>Patna, India</p>
            </div>
          </div>
          <div className="profileImage">
            <img src="/me.jpg" alt="profilImage" />
            {/* <span></span> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
