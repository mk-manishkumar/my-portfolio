import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TbArrowRight } from "react-icons/tb";

const Portfolio = ({ show, setShow }) => {
  const projects = [
    {
      _id: "1",
      title: "UI Projects",
      category: "HTML CSS",
      thumbnail: "/html_css.jpg",
      projectUrl: "https://html-css-projects-mk.netlify.app",
    },
    {
      _id: "2",
      title: "Tailwind CSS Projects",
      category: "UI/UX",
      thumbnail: "/tailwind.jpg",
      projectUrl: "https://tailwind-projects-mk.netlify.app",
    },
    {
      _id: "3",
      title: "NoteNexus",
      category: "Backend [NodeJS]",
      thumbnail: "/notenexus.jpg",
      projectUrl: "https://notenexus-nmow.onrender.com",
    },
    {
      _id: "4",
      title: "CoinKeeper",
      category: "Backend [NodeJS]",
      thumbnail: "/coinkeeper.jpg",
      projectUrl: "https://coinkeeper-ngmb.onrender.com",
    },
    {
      _id: "5",
      title: "JavaScript Mini Projects",
      category: "JavaScript Frontend",
      thumbnail: "/js_projects.jpg",
      projectUrl: "https://js-mini-projects-mk.netlify.app/",
    },
    {
      _id: "6",
      title: "Watchwise",
      category: "Full Stack",
      thumbnail: "/watchwise.jpg",
      projectUrl: "https://watchwise-yt.vercel.app/",
    },
  ];

  return (
    <section className="page portfolioPage">
      <Navbar show={show} />
      <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
      <h1>ALL PROJECTS</h1>

      <div className="projects">
        {projects.map((project) => (
          <div className="project" key={project._id}>
            <img src={project.thumbnail} alt={project.title} />
            <div className="overlay">
              <div className="title-category">
                <h2>{project.title}</h2>
                <p>{project.category}</p>
              </div>
              <div className="link-to-project">
                <Link to={project.projectUrl} target="_blank">
                  <TbArrowRight style={{ color: "gray", fontSize: "1.5rem" }} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
