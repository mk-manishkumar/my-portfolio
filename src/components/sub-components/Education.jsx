import React from "react";

const Education = () => {
  const educations = [
    {
      _id: "1",
      title: "Matriculation",
      description: "I completed my matriculation in 2014 at a CBSE school, where I gained a solid educational base.",
    },
    {
      _id: "2",
      title: "Intermediate",
      description: "I completed my intermediate education in 2016 in PCM (Physics, Chemistry and Mathematics), laying the groundwork for my engineering studies.",
    },
    {
      _id: "3",
      title: "Graduation",
      description: "I graduated from CIMAGE Group of Institue (Magadh University) in 2020 with a degree in Computer Application.",
    },
  ];

  return (
    <>
      <div className="education_component" style={{ marginTop: "2rem" }}>
        <h3>EDUCATION</h3>
        {educations.map((element) => {
          return (
            <div className="education" key={element._id}>
              <p>{element.title}</p>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
