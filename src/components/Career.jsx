import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import Skills from "./sub-components/Skills";
import Languages from "./sub-components/Languages";
import Experience from "./sub-components/Experience";
import Education from "./sub-components/Education";
import Blogs from "./sub-components/Blogs";

const Career = ({ show, setShow }) => {
  return (
    <>
      <section className="page careerPage">
        <Navbar show={show} />
        <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
        <div className="banner">
          <div className="first-column">
            <Skills />
            <Languages />
            <div className="personal-skills">
              <h3>PERSONAL SKILLS</h3>
              <p>Creativity - Team Work - Critical Thinking</p>
            </div>
          </div>
          <div className="second-column">
            <Experience />
            <Education />
          </div>
          <div className="third-column">
            <div>
              <h3>WHAT CAN I DO</h3>
              <p>Full Stack Development</p>
              <p> Website Optimization</p>
              <p> Responsive Website Designing</p>
            </div>
            <div>
              <h3>ADDITIONAL EXPERTIES</h3>
              <p>Website Animation - Framer Motion</p>
              <p>Prompt Engineering - Effective prompts</p>
            </div>
            <div>
              <h3>BLOGS I WROTE</h3>
              <Blogs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
