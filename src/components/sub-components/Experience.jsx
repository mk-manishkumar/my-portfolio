import React from "react";

const Experience = () => {
  const experiences = [
    {
      _id: "1",
      title: "Ekaggata Technologies",
      from: "09-May-2023",
      to: "08-Nov-2023",
      description: `I have designed and implemented multiple web views within Odoo to facilitate the efficient management of critical business information and transactional data across various stores. These web views have been phenomenal in tracking and managing refund details for our company’s extensive store network.`,
    },
    {
      _id: "2",
      title: "Content Creator",
      from: "11-Nov-2020",
      to: "Present",
      description: `I started a YouTube channel where I upload tutorials on website Designing and other tech topics, providing educational content to help viewers enhance their programming skills.`,
    },
  ];

  return (
    <section className="experience_component">
      <h3>EXPERIENCE</h3>
      <div className="experiences_container">
        {experiences.map((item) => (
          <article key={item._id} className="experience">
            <div className="duration">
              {item.from} <span>to</span> {item.to}
            </div>
            <div className="organization">
              <p className="title">{item.title}</p>
              <p className="description">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
