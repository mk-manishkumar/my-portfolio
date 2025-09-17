/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { TbGridDots, TbX } from "react-icons/tb";
import { User, Briefcase, BookOpen, FolderOpen, Sparkles } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0.9, 0.95]);
  const backdropBlur = useTransform(scrollY, [0, 100], [8, 20]);

  // Track scroll for backdrop effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: User,
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      name: "Career",
      path: "/career",
      icon: Briefcase,
      gradient: "from-purple-400 to-pink-400",
    },
    {
      name: "Blogs",
      href: "https://manishmk.hashnode.dev",
      icon: BookOpen,
      gradient: "from-green-400 to-emerald-400",
      external: true,
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      icon: FolderOpen,
      gradient: "from-orange-400 to-red-400",
    },
  ];

  const isActive = (path) => location.pathname === path;

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav className={`w-full text-white px-4 md:px-8 py-4 sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl" : "bg-gray-900/80 backdrop-blur-md"}`} style={{ opacity, backdropFilter: `blur(${backdropBlur}px)` }} initial="hidden" animate="visible" variants={containerVariants}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo/Brand */}
        <motion.div className="flex items-center gap-2" variants={itemVariants} whileHover={{ scale: 1.05 }}>
          <motion.div className="relative" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Manish</span>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul className="hidden md:flex gap-8 text-lg font-medium" variants={containerVariants}>
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const active = isActive(item.path);

            return (
              <motion.li key={item.name} variants={itemVariants} whileHover={{ y: -2 }}>
                {item.external ? (
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      "group relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 " +
                      (active
                        ? "bg-gradient-to-r " + item.gradient + " text-white shadow-lg"
                        : "hover:bg-gray-800/50 text-gray-300 hover:text-white")
                    }
                    whileHover={{
                      scale: 1.05,
                      boxShadow: active ? "0 8px 25px rgba(59, 130, 246, 0.4)" : "0 4px 15px rgba(0, 0, 0, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                    {active && <motion.div className="absolute inset-0 bg-white/20 rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} />}
                  </motion.a>
                ) : (
                  <Link to={item.path}>
                    <motion.div
                      className={`group relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${active ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg` : "hover:bg-gray-800/50 text-gray-300 hover:text-white"}`}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: active ? "0 8px 25px rgba(59, 130, 246, 0.4)" : "0 4px 15px rgba(0, 0, 0, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{item.name}</span>
                      {active && <motion.div className="absolute inset-0 bg-white/20 rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} />}
                    </motion.div>
                  </Link>
                )}
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Right side: Email and Hamburger */}
        <div className="flex items-center gap-4">
          {/* Email with enhanced design */}
          <motion.div
            className="hidden lg:flex items-center gap-3 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/30"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              borderColor: "rgba(59, 130, 246, 0.3)",
            }}
          >
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
              <CiMail className="text-xl text-blue-400" />
            </motion.div>
            <span className="text-gray-300 text-sm select-none">manish.login@gmail.com</span>
          </motion.div>

          {/* Enhanced Hamburger Menu */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden relative p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 focus:outline-none"
            aria-label="Toggle Menu"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              borderColor: "rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              {open ? <TbX className="text-2xl text-white" /> : <TbGridDots className="text-2xl text-white" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <motion.div className="md:hidden mt-6 overflow-hidden" variants={mobileMenuVariants} initial="closed" animate={open ? "open" : "closed"}>
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl border border-gray-700/30 p-4">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const active = isActive(item.path);

              return (
                <motion.div key={item.name} variants={mobileItemVariants}>
                  {item.external ? (
                    <motion.a href={item.href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${active ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg` : "hover:bg-gray-700/50 text-gray-300 hover:text-white"}`} onClick={() => setOpen(false)} whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </motion.a>
                  ) : (
                    <Link to={item.path} onClick={() => setOpen(false)}>
                      <motion.div className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${active ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg` : "hover:bg-gray-700/50 text-gray-300 hover:text-white"}`} whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </motion.div>
                    </Link>
                  )}
                </motion.div>
              );
            })}

            {/* Mobile Email */}
            <motion.div className="flex items-center gap-3 px-4 py-3 mt-2 border-t border-gray-700/30 text-gray-300 text-sm" variants={mobileItemVariants}>
              <CiMail className="text-xl text-blue-400" />
              <span className="select-none">manish.login@gmail.com</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Animated underline for active states */}
      <motion.div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400" layoutId="activeTab" />
    </motion.nav>
  );
};

export default Navbar;
