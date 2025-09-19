/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { useState } from "react";
import { Code, Calendar, MapPin, Award } from "lucide-react";
import Navbar from "./Navbar";
import { education, experience, techSkills } from "../constants";

const Career = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: -90,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.1,
      rotateY: 10,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* NAVBAR */}
      <Navbar currentPage = "career"/>

      <motion.div className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full" variants={containerVariants} initial="hidden" animate="visible">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Career Journey</span>
          </h1>
        </motion.div>

        {/* Experience Section */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="mr-3 text-blue-400" />
            Experience
          </h2>

          <motion.div
            className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-600/30 shadow-2xl"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                <p className="text-xl text-blue-400 font-semibold mb-2">{experience.company}</p>
                <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {experience.location}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">{experience.description}</p>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <motion.li key={achievement} className="flex items-start text-gray-300" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 + 0.5 }}>
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="mr-3 text-purple-400" />
            Education
          </h2>

          <motion.div
            className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-600/30 shadow-2xl"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
                <p className="text-xl text-purple-400 font-semibold mb-2">{education.school}</p>
                <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {education.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {education.location}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">GPA:</span> {education.gpa}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Specialization:</span> {education.relevant}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Skills Section */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Code className="mr-3 text-green-400" />
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {techSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div key={skill.name} className={`relative bg-gradient-to-br ${skill.color} p-6 rounded-xl shadow-lg cursor-pointer`} variants={skillVariants} initial="hidden" animate="visible" whileHover="hover" transition={{ delay: index * 0.1 }} onMouseEnter={() => setHoveredSkill(skill.name)} onMouseLeave={() => setHoveredSkill(null)}>
                  <div className="text-center">
                    <motion.div
                      className="w-12 h-12 mx-auto mb-4 text-white"
                      animate={{
                        rotate: hoveredSkill === skill.name ? 360 : 0,
                        scale: hoveredSkill === skill.name ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent size={48} />
                    </motion.div>
                    <h3 className="text-white font-bold text-lg mb-2">{skill.name}</h3>
                  </div>

                  {/* Floating particles effect */}
                  <motion.div className="absolute inset-0 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }} transition={{ duration: 0.3 }}>
                    {[...Array(5)].map((_, i) => {
                      const particleKey = `${skill.name}-particle-${i}`;
                      return (
                        <motion.div
                          key={particleKey}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 20}%`,
                          }}
                          animate={{
                            y: [-10, -20, -10],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      );
                    })}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Floating background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map(() => {
            const uniqueKey = `bg-float-${Math.random().toString(36).substring(2, 11)}-${Date.now()}`;
            return (
              <motion.div
                key={uniqueKey}
                className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Career;
