/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { ExternalLink, Github, Database, Server, Globe } from "lucide-react";

const FullStack = () => {
  const fullStackProjects = [
    {
      _id: "1",
      title: "NoteNexus",
      category: "Notes Management System",
      thumbnail: "/src/assets/notenexus.jpg",
      projectUrl: "https://notenexus-nmow.onrender.com",
      githubUrl: "https://github.com/mk-manishkumar/notenexus",
      description: "A comprehensive note-taking application with user authentication, real-time synchronization, and advanced search capabilities. Features rich text editing and collaborative sharing.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "EJS"],
      gradient: "from-emerald-400 to-white-500",
      icon: Database,
      features: ["User Authentication", "Real-time Sync", "Rich Text Editor", "Search & Filter"],
    },
    {
      _id: "2",
      title: "CoinKeeper",
      category: "Personal Finance Tracker",
      thumbnail: "/src/assets/coinkeeper.jpg",
      projectUrl: "https://coinkeeper-ngmb.onrender.com",
      githubUrl: "https://github.com/mk-manishkumar/coinkeeper",
      description: "A full-featured expense tracking application with budget management, financial analytics, and data visualization. Helps users manage their finances effectively.",
      technologies: ["Node.js", "Express.js", "MongoDB", "ReactJS", "Tailwind CSS", "shadcn/ui"],
      gradient: "from-purple-400 to-pink-500",
      icon: Server,
      features: ["Expense Tracking", "Budget Management"],
    },
    {
      _id: "3",
      title: "WatchWise",
      category: "Video Streaming Platform",
      thumbnail: "/src/assets/watchwise.jpg",
      projectUrl: "https://watchwise-yt.vercel.app/",
      githubUrl: "https://github.com/mk-manishkumar/watchwise",
      description: "A modern video streaming platform with advanced search, playlist management, and user recommendations. Built with React and integrated with YouTube API.",
      technologies: ["React", "YouTube API", "Tailwind CSS", "Context API", "React Router", "Vercel"],
      gradient: "from-cyan-400 to-white-500",
      icon: Globe,
      features: ["Advanced Search"],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
      {fullStackProjects.map((project, index) => {
        const IconComponent = project.icon;

        return (
          <motion.div
            key={project._id}
            className="group relative bg-gradient-to-br from-gray-800/60 to-gray-700/40 backdrop-blur-lg rounded-2xl border border-gray-600/40 overflow-hidden shadow-2xl"
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
              transition: { duration: 0.3 },
            }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <motion.img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" variants={imageVariants} />

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-300`} />

              {/* Full Stack badge */}
              <motion.div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + index * 0.1 }}>
                <IconComponent className="w-4 h-4" />
                Full Stack
              </motion.div>

              {/* Status indicator */}
              <motion.div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full text-green-300 text-xs border border-green-500/30" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + index * 0.1 }}>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Live
              </motion.div>

              {/* Hover overlay with links */}
              <motion.div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <motion.a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition-colors shadow-lg" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>

                <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-colors shadow-lg" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
              </motion.div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Title and Category */}
              <div className="mb-4">
                <motion.h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + index * 0.1 }}>
                  {project.title}
                </motion.h3>

                <motion.p className="text-gray-400 text-sm font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 + index * 0.1 }}>
                  {project.category}
                </motion.p>
              </div>

              {/* Description */}
              <motion.p className="text-gray-300 text-sm mb-4 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + index * 0.1 }}>
                {project.description}
              </motion.p>

              {/* Key Features */}
              <motion.div className="mb-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 + index * 0.1 }}>
                <h4 className="text-white text-sm font-semibold mb-2">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <motion.div key={feature} className="flex items-center gap-2 text-xs text-gray-300" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + index * 0.1 + featureIndex * 0.05 }}>
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div className="mb-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 + index * 0.1 }}>
                <h4 className="text-white text-sm font-semibold mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span key={tech} className={`px-2 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-xs rounded-md text-white border border-gray-600/40 backdrop-blur-sm`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + index * 0.1 + techIndex * 0.03 }} whileHover={{ scale: 1.05 }}>
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Action buttons for mobile */}
              <motion.div className="flex gap-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + index * 0.1 }}>
                <motion.a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-blue-300 text-sm font-medium transition-colors border border-blue-500/30" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>

                <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-500/20 hover:bg-gray-500/30 rounded-lg text-gray-300 text-sm font-medium transition-colors border border-gray-500/30" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Github className="w-4 h-4" />
                  View Code
                </motion.a>
              </motion.div>
            </div>

            {/* Animated border glow */}
            <motion.div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30`} style={{ padding: "1px" }} initial={{ opacity: 0 }} whileHover={{ opacity: 0.3 }} transition={{ duration: 0.3 }} />

            {/* Corner accent */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${project.gradient} opacity-10 rounded-bl-3xl`} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default FullStack;
