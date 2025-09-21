import { AiFillLinkedin, AiOutlineDeliveredProcedure } from "react-icons/ai";
import { FaBlog, FaGithubSquare, FaGlobe } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { User, Briefcase, BookOpen, FolderOpen, Zap, Database, Globe, Cpu, Layout, Shield, GitBranch, Code, Palette, Smartphone, Server, Pizza, AlignVerticalDistributeStart } from "lucide-react";
import { CiShop } from "react-icons/ci";
import { TbJoinBevel } from "react-icons/tb";

// Social media links
export const socialLinks = [
  { Icon: AiFillLinkedin, url: "https://www.linkedin.com/in/mk-manishkumar/", color: "hover:text-blue-400" },
  { Icon: RiTwitterXLine, url: "https://x.com/_manishmk", color: "hover:text-gray-300" },
  { Icon: FaGithubSquare, url: "https://github.com/mk-manishkumar", color: "hover:text-purple-400" },
  { Icon: FaGlobe, url: "https://manishmk.vercel.app/", color: "hover:text-green-400" },
];

// Navigation items
export const navItems = [
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

// Professional experience
export const experience = {
  title: "Associate Software Engineer",
  company: "Ekaggata Technologies",
  duration: "May 2023 - Nov 2023",
  location: "Bangalore, India (Remote)",
  description: "Designed and implemented multiple web views in Odoo to streamline management of critical business information and transactional data across multiple stores.",
  achievements: ["Built solutions that significantly improved tracking and managing refund details for a large store network"],
};

// Education details
export const education = {
  degree: "Bachelor of Computer Application",
  school: "CIMAGE Group of Institute",
  duration: "Oct 2016 - Jan 2020",
  location: "Patna, India",
  gpa: "8.2/10",
  relevant: "Specialized in Computer Application and Software Development",
};

// Tech skills with icons and colors
export const techSkills = [
  { name: "React", icon: Layout, color: "from-blue-500 to-cyan-500" },
  { name: "Node.js", icon: Code, color: "from-green-500 to-emerald-500" },
  { name: "Python", icon: Code, color: "from-yellow-500 to-orange-500" },
  { name: "TypeScript", icon: Code, color: "from-blue-600 to-indigo-600" },
  { name: "MongoDB", icon: Database, color: "from-green-600 to-teal-600" },
  { name: "Next.js", icon: Layout, color: "from-gray-600 to-gray-800" },
  { name: "Docker", icon: Cpu, color: "from-blue-400 to-blue-600" },
  { name: "Vercel", icon: Globe, color: "from-purple-600 to-indigo-600" },
  { name: "Express.js", icon: Code, color: "from-green-400 to-emerald-400" },
  { name: "Tailwind CSS", icon: Layout, color: "from-cyan-400 to-blue-400" },
  { name: "Framer Motion", icon: Zap, color: "from-pink-400 to-rose-400" },
  { name: "Git", icon: GitBranch, color: "from-orange-500 to-red-500" },
  { name: "GSAP", icon: Zap, color: "from-green-500 to-teal-500" },
  { name: "Linux", icon: Shield, color: "from-yellow-600 to-orange-600" },
  { name: "FastAPI", icon: Code, color: "from-teal-500 to-cyan-500" },
];

// Frontend projects
export const frontendProjects = [
  {
    _id: "1",
    title: "Pixenbuy",
    category: "React Projects",
    thumbnail: "/src/assets/frontend_projects_thumbnail/pixenbuy.jpg",
    projectUrl: "https://pixenbuy.vercel.app",
    githubUrl: "https://github.com/mk-manishkumar/pixenbuy",
    description: "It is an e-commerce application built with React and TypeScript using data from the Fake Store API. It was created as part of an internship assignment to demonstrate proficiency in component design, state management, routing, and basic UI/UX.",
    technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    gradient: "from-orange-400 to-red-500",
    icon: CiShop,
  },
  {
    _id: "2",
    title: "Catalyst - Ad Agency",
    category: "Animation & UI/UX",
    thumbnail: "/src/assets/frontend_projects_thumbnail/catalyst.jpg",
    projectUrl: "https://catalyst-adagency.netlify.app/",
    githubUrl: "https://github.com/mk-manishkumar/motion.div/tree/main/chap_05%20AdAgencyPage",
    description: "It is an Ad Agency landing page built with React, Tailwind & motion.div. It features smooth animations and a modern design to showcase the agency's services and portfolio effectively.",
    technologies: ["ReactJS", "motion.div", "Tailwind CSS", "Animation"],
    gradient: "from-orange-400 to-red-500",
    icon: AiOutlineDeliveredProcedure,
  },
  {
    _id: "3",
    title: "UI Projects Collection",
    category: "HTML & CSS",
    thumbnail: "/src/assets/frontend_projects_thumbnail/html_css.jpg",
    projectUrl: "https://html-css-projects-mk.netlify.app",
    githubUrl: "https://github.com/mk-manishkumar/html-css-projects",
    description: "A comprehensive collection of UI components and layouts built with pure HTML and CSS, showcasing modern design principles and responsive techniques. It displays UI elements and layouts effectively.",
    technologies: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design"],
    gradient: "from-orange-400 to-red-500",
    icon: Code,
  },
  {
    _id: "4",
    title: "Tailwind CSS Showcase",
    category: "UI/UX Design",
    thumbnail: "/src/assets/frontend_projects_thumbnail/tailwind.jpg",
    projectUrl: "https://tailwind-projects-mk.netlify.app",
    githubUrl: "https://github.com/mk-manishkumar/tailwind-projects",
    description: "Beautiful and responsive UI components built with Tailwind CSS, featuring modern design patterns and utility-first approach.",
    technologies: ["Tailwind CSS", "HTML5", "Responsive Design"],
    gradient: "from-orange-400 to-red-500",
    icon: Palette,
  },
  {
    _id: "5",
    title: "JavaScript Projects",
    category: "Interactive Frontend",
    thumbnail: "/src/assets/frontend_projects_thumbnail/js_projects.jpg",
    projectUrl: "https://js-projects-mk.netlify.app",
    githubUrl: "https://github.com/mk-manishkumar/javascript-projects",
    description: "Interactive JavaScript projects demonstrating DOM manipulation, API integration, and modern ES6+ features with clean, responsive interfaces.",
    technologies: ["JavaScript ES6+", "DOM API", "Fetch API", "CSS3"],
    gradient: "from-orange-400 to-red-500",
    icon: Smartphone,
  },
  {
    _id: "6",
    title: "Pizzify",
    category: "React Projects",
    thumbnail: "/src/assets/frontend_projects_thumbnail/pizzify.jpg",
    projectUrl: "https://pizzify.netlify.app",
    githubUrl: "https://github.com/mk-manishkumar/pizzify",
    description: "It s an interactive pizza ordering application built with React and TypeScript using Redux Toolkit for global state management. ",
    technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "Redux"],
    gradient: "from-orange-400 to-red-500",
    icon: Pizza,
  },
  {
    _id: "7",
    title: "VirtualR",
    category: "Animation & UI/UX",
    thumbnail: "/src/assets/frontend_projects_thumbnail/virtualr.jpg",
    projectUrl: "https://virtualr-mk.netlify.app",
    githubUrl: "https://github.com/mk-manishkumar/motion.div/tree/main/chap_04%20VRLandingPage",
    description: "It is a VR landing page built with React, Tailwind & motion.div. It features smooth animations and a modern design to showcase VR services and portfolio effectively.",
    technologies: ["ReactJS", "motion.div", "Tailwind CSS"],
    gradient: "from-orange-400 to-red-500",
    icon: AlignVerticalDistributeStart,
  },
];


// Full Stack projects
export const fullStackProjects = [
  {
    _id: "1",
    title: "Writescape",
    category: "Blogging Platform",
    thumbnail: "/src/assets/fullstack_projects_thumbnail/writescape.jpg",
    projectUrl: "https://writescape-mk.vercel.app",
    githubUrl: "https://github.com/mk-manishkumar/writescape",
    description: "It is a AI based blogging platform that I have created using MERN STACK. This platform provides a seamless writing and publishing experience, allowing users to create, manage, and share their blog posts easily.",
    technologies: ["Node.js", "Express.js", "MongoDB", "ReactJS", "Tailwind CSS", "shadcn/ui", "Imagekit", "Framer Motion", "Gemini API"],
    gradient: "from-purple-400 to-white-500",
    icon: FaBlog,
    features: ["User Authentication", "Real-time Sync", "Rich Text Editor", "Search & Filter"],
  },
  {
    _id: "2",
    title: "Worknest",
    category: "Job Portal",
    thumbnail: "/src/assets/fullstack_projects_thumbnail/worknest.jpg",
    projectUrl: "https://worknest-mk.vercel.app",
    githubUrl: "https://github.com/mk-manishkumar/worknest",
    description: "It is a robust MERN-stack job application platform designed to provide a responsive and user-friendly interface for job seekers and recruiters alike.",
    technologies: ["Node.js", "Express.js", "MongoDB", "ReactJS", "Tailwind CSS", "shadcn/ui", "Cloudinary", "Framer Motion"],
    gradient: "from-yellow-400 to-white-500",
    icon: TbJoinBevel,
    features: ["User Authentication", "Real-time Sync", "Rich Text Editor", "Search & Filter"],
  },
  {
    _id: "3",
    title: "NoteNexus",
    category: "Notes Management System",
    thumbnail: "/src/assets/fullstack_projects_thumbnail/notenexus.jpg",
    projectUrl: "https://notenexus-nmow.onrender.com",
    githubUrl: "https://github.com/mk-manishkumar/notenexus",
    description: "A comprehensive note-taking application with user authentication, real-time synchronization, and advanced search capabilities. Features rich text editing and collaborative sharing.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "EJS"],
    gradient: "from-emerald-400 to-white-500",
    icon: Database,
    features: ["User Authentication", "Real-time Sync", "Rich Text Editor", "Search & Filter"],
  },
  {
    _id: "4",
    title: "CoinKeeper",
    category: "Personal Finance Tracker",
    thumbnail: "/src/assets/fullstack_projects_thumbnail/coinkeeper.jpg",
    projectUrl: "https://coinkeeper-mk.vercel.app",
    githubUrl: "https://github.com/mk-manishkumar/coinkeeper",
    description: "A full-featured expense tracking application with budget management, financial analytics, and data visualization. Helps users manage their finances effectively.",
    technologies: ["Node.js", "Express.js", "MongoDB", "ReactJS", "Tailwind CSS", "shadcn/ui", "TypeScript"],
    gradient: "from-purple-400 to-pink-500",
    icon: Server,
    features: ["Expense Tracking", "Budget Management"],
  },
  {
    _id: "5",
    title: "WatchWise",
    category: "Video Info Platform",
    thumbnail: "/src/assets/fullstack_projects_thumbnail/watchwise.jpg",
    projectUrl: "https://watchwise-yt.vercel.app/",
    githubUrl: "https://github.com/mk-manishkumar/watchwise",
    description: "A modern video streaming platform with advanced search, playlist management, and user recommendations. Built with React and integrated with YouTube API.",
    technologies: ["React", "YouTube API", "Tailwind CSS", "Context API", "React Router", "Vercel"],
    gradient: "from-cyan-400 to-white-500",
    icon: Globe,
    features: ["Advanced Search"],
  },
];