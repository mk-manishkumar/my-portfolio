import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      progress: 90,
    },
    {
      title: "CSS",
      progress: 85,
    },
    {
      title: "JavaScript",
      progress: 75,
    },
    {
      title: "BootStrap",
      progress: 77,
    },
    {
      title: "Tailwind CSS",
      progress: 77,
    },
    {
      title: "ShadCN",
      progress: 83,
    },
    {
      title: "ReactJS",
      progress: 83,
    },
    {
      title: "NodeJS",
      progress: 57,
    },
    {
      title: "ExpressJS",
      progress: 71,
    },
    {
      title: "MongoDB",
      progress: 73,
    },
    {
      title: "NextJS",
      progress: 70,
    },
    {
      title: "Python",
      progress: 60,
    },
    {
      title: "PostgreSQL",
      progress: 50,
    },
  ];

  return (
    <>
      <div>
        <h3>DEVELOPMENT SKILLS</h3>
        {skills.map((element) => {
          return (
            <div key={element.title} className="progressBar">
              <p>{element.title}</p>
              <span>
                <FaRegDotCircle
                  style={{
                    right: `${element.progress > 85 ? 0 : 100 - element.progress}`,
                  }}
                />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
