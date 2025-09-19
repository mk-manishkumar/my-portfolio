/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { useState } from "react";
import Navbar from "./Navbar";
import Frontend from "./subComponents/Frontend";
import FullStack from "./subComponents/FullStack";
import { Filter, Layers, Code2, Globe } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Frontend");

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

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "backOut",
      },
    },
  };

  const filterVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const filters = [
    {
      name: "Frontend",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500",
      description: "UI/UX & Client-side projects",
    },
    {
      name: "FullStack",
      icon: Globe,
      gradient: "from-purple-500 to-pink-500",
      description: "Complete web applications",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
      {/* Dynamic background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl"
          style={{ top: "20%", left: "10%" }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-green-500/8 to-teal-500/8 rounded-full blur-3xl"
          style={{ top: "60%", right: "15%" }}
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => {
          const particleKey = `particle-${20 + i * 15}-${15 + i * 12}`;
          return (
            <motion.div
              key={particleKey}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${15 + i * 12}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          );
        })}
      </div>

      {/* NAVBAR */}
      <Navbar currentPage="portfolio" />

      <motion.div className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full" variants={containerVariants} initial="hidden" animate="visible">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          {/* Title */}
          <motion.div className="flex-1" variants={headerVariants}>
            <motion.div className="flex items-center gap-4 mb-4" whileHover={{ scale: 1.02 }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                <Layers className="w-12 h-12 text-blue-400" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                PRO<span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">JECTS</span>
              </h1>
            </motion.div>
            <p className="text-xl text-gray-300 max-w-2xl">A collection of my best work showcasing modern web development technologies and creative solutions.</p>
          </motion.div>

          {/* Filter Section */}
          <motion.div className="flex flex-col gap-4" variants={filterVariants}>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {filters.map((filter) => {
                const IconComponent = filter.icon;
                const isActive = activeFilter === filter.name;

                return (
                  <motion.button
                    key={filter.name}
                    onClick={() => setActiveFilter(filter.name)}
                    className={["group relative flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 min-w-[200px]", isActive ? "bg-gradient-to-r " + filter.gradient + " text-white shadow-2xl" : "bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:text-white border border-gray-700/50 hover:border-gray-600/50"].join(" ")}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: isActive ? "0 20px 40px rgba(59, 130, 246, 0.4)" : "0 10px 30px rgba(0, 0, 0, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {/* Icon */}
                    <motion.div
                      className="relative"
                      animate={{
                        rotate: isActive ? [0, 5, -5, 0] : 0,
                        scale: isActive ? [1, 1.1, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: isActive ? Infinity : 0,
                        repeatDelay: 2,
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex flex-col items-start">
                      <span className="text-lg">{filter.name}</span>
                      <span className={`text-xs ${isActive ? "text-white/80" : "text-gray-500"}`}>{filter.description}</span>
                    </div>

                    {/* Active indicator */}
                    {isActive && <motion.div className="absolute inset-0 bg-white/20 rounded-xl" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} />}

                    {/* Hover glow effect */}
                    <motion.div className={`absolute inset-0 bg-gradient-to-r ${filter.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Projects Display */}
        <motion.div
          key={activeFilter} 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {activeFilter === "Frontend" ? <Frontend /> : <FullStack />}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
