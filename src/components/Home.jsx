/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Download, Sparkles, Code, Coffee } from "lucide-react";
import { socialLinks } from "../constants";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");

  const fullText = "Hey, I'm Manish Kumar";

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Mouse tracking for interactive effects
  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  

  return (
    <section className="min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative" onMouseMove={handleMouseMove} tabIndex={-1} aria-hidden="true">
      {/* Dynamic background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
          animate={{
            x: [-20, 20, -20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => {
          const particleKey = `particle-${20 + i * 10}-${10 + i * 12}`;
          return (
            <motion.div
              key={particleKey}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                top: `${20 + i * 10}%`,
                left: `${10 + i * 12}%`,
              }}
              animate={{
                y: [-10, -30, -10],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          );
        })}
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO Section */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4 py-10 items-center z-10" variants={containerVariants} initial="hidden" animate="visible">
        {/* Text Content */}
        <motion.div className="text-white flex flex-col justify-center order-2 md:order-1 gap-6 max-w-xl mx-auto" variants={itemVariants}>
          {/* Animated title with typing effect */}
          <div className="relative">
            <motion.h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              {typedText}
              <motion.span className="inline-block w-1 h-12 bg-blue-400 ml-1" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} />
            </motion.h2>

            {/* Sparkles effect */}
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </div>

          {/* Role badges */}
          <motion.div className="flex flex-wrap gap-2 mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 0.6 }}>
            {["Full Stack Developer", "Open Source", "Tech Blogger"].map((role, index) => (
              <motion.span key={role} className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm border border-blue-500/30 backdrop-blur-sm" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.2 + index * 0.2 }} whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}>
                {role}
              </motion.span>
            ))}
          </motion.div>

          {/* Description with enhanced styling */}
          <motion.p className="text-lg leading-relaxed text-gray-300" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.8 }}>
            I am a software developer with expertise in both <span className="text-blue-400 font-semibold">frontend</span> and <span className="text-green-400 font-semibold">backend</span> development. I am continuously improving my skills in software development and exploring new domains such as <span className="text-purple-400 font-semibold">DevOps</span>, <span className="text-pink-400 font-semibold">GenAI</span> etc. As an avid learner, I am also an <span className="text-yellow-400 font-semibold">Open Source Contributor</span>, actively contributing to the technology community.
          </motion.p>

          {/* Tech interests icons */}
          <motion.div className="flex gap-4 text-gray-400 my-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.1, color: "#60A5FA" }}>
              <Code className="w-5 h-5" />
              <span className="text-sm">Coding</span>
            </motion.div>
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.1, color: "#34D399" }}>
              <Coffee className="w-5 h-5" />
              <span className="text-sm">Coffee</span>
            </motion.div>
          </motion.div>

          {/* Resume button with enhanced design */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8 }}>
            <motion.a
              href="https://drive.google.com/file/d/1YVcqxjrvxvH0Ox6LEggePihzUbYaqO8n/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300 overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                View Resume
              </span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.6 }} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div className="flex justify-center order-1 md:order-2 mb-6 md:mb-0" variants={itemVariants}>
          <motion.div className="relative" variants={imageVariants} whileHover="hover">
            {/* Animated border */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-xl blur opacity-75"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.img src="https://avatars.githubusercontent.com/u/102028645?v=4" alt="Manish Kumar" className="relative rounded-xl w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover border-2 border-gray-700" loading="lazy" />

            {/* Floating status indicator */}
            <motion.div
              className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-gray-800"
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.7)", "0 0 0 10px rgba(34, 197, 94, 0)", "0 0 0 0 rgba(34, 197, 94, 0)"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* FOOTER */}
      <motion.footer className="w-full flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between px-6 md:px-20 mb-8 z-10" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3, duration: 0.8 }}>
        {/* Social Links */}
        <motion.div
          className="flex gap-6"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map(({ Icon, url, color }, index) => (
            <motion.a key={url} href={url} target="_blank" rel="noopener noreferrer" className={`text-gray-400 ${color} transition-all duration-300 transform`} variants={socialIconVariants} whileHover="hover" whileTap={{ scale: 0.9 }}>
              <motion.div
                className="relative p-3 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30"
                whileHover={{
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderColor: "rgba(59, 130, 246, 0.3)",
                }}
              >
                <Icon className="text-2xl" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Download CV */}
        <motion.a className="group flex items-center gap-2 text-gray-400 hover:text-white text-lg transition-all duration-300" href="/src/assets/Resume.pdf" download="Resume.pdf" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.5, duration: 0.6 }} whileHover={{ scale: 1.05 }}>
          <span className="group-hover:text-blue-400 transition-colors">[Download CV]</span>
          <Download className="w-4 h-4 group-hover:animate-bounce group-hover:text-blue-400" />
        </motion.a>
      </motion.footer>
    </section>
  );
};

export default Home;
