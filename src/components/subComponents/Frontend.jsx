/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { frontendProjects } from "../../constants";

const Frontend = () => {
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
      {frontendProjects.map((project, index) => {
        const IconComponent = project.icon;

        return (
          <motion.div
            key={project._id}
            className="group relative bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-lg rounded-2xl border border-gray-600/30 overflow-hidden shadow-2xl"
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
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />

              {/* Project category badge */}
              <motion.div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + index * 0.1 }}>
                <IconComponent className="w-4 h-4" />
                {project.category}
              </motion.div>

              {/* Hover overlay with links */}
              <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <motion.a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>

                <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
              </motion.div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Title */}
              <motion.h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + index * 0.1 }}>
                {project.title}
              </motion.h3>

              {/* Description */}
              <motion.p className="text-gray-300 text-sm mb-4 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + index * 0.1 }}>
                {project.description}
              </motion.p>

              {/* Technologies */}
              <motion.div className="flex flex-wrap gap-2 mb-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1 }}>
                {project.technologies.map((tech, techIndex) => (
                  <motion.span key={tech} className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 text-xs rounded-full text-white border border-gray-600/30`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + index * 0.1 + techIndex * 0.05 }} whileHover={{ scale: 1.05 }}>
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Action buttons for mobile */}
              <motion.div className="flex gap-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + index * 0.1 }}>
                <motion.a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-blue-300 text-sm font-medium transition-colors border border-blue-500/30" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </motion.a>

                <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-500/20 hover:bg-gray-500/30 rounded-lg text-gray-300 text-sm font-medium transition-colors border border-gray-500/30" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
              </motion.div>
            </div>

            {/* Animated border */}
            <motion.div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20`} style={{ padding: "2px" }} initial={{ opacity: 0 }} whileHover={{ opacity: 0.2 }} transition={{ duration: 0.3 }} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Frontend;
