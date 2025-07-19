import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

import {
  SiReact,
  SiAngular,
  SiVite,
  SiCplusplus,
  SiRuby,
  SiKotlin,
  SiSwift,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiPhp,
  SiGo,
  SiRust,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGithub,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "Ruby", icon: SiRuby, color: "#CC342D" },
  { name: "Kotlin", icon: SiKotlin, color: "#0095D5" },
  { name: "Swift", icon: SiSwift, color: "#FA7343" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "Rust", icon: SiRust, color: "#000000" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
];

// Animation variants for container and children (stagger)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

function TechIcon({ name, Icon, color }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      tabIndex={0}
      role="button"
      aria-label={`Technology: ${name}`}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="group outline-none relative"
      style={{ cursor: "pointer" }}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.15}
        glareColor={color}
        glarePosition="all"
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        scale={1.1}
        transitionSpeed={1000}
        className="rounded-full p-5 bg-gradient-to-tr from-white/90 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg group-focus:ring-4 group-focus:ring-indigo-400"
      >
        <div
          className="flex items-center justify-center rounded-full w-16 h-16 mx-auto"
          style={{
            background: `radial-gradient(circle at center, ${color}33, transparent 80%)`,
          }}
        >
          <Icon size={56} color={color} />
        </div>
      </Tilt>

      {/* Custom tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded bg-gray-900 text-white text-sm select-none whitespace-nowrap shadow-lg z-10"
          >
            {name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Technologies() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center px-4 sm:px-8 select-none">
      <h2 className="text-4xl font-extrabold mb-16 text-gray-900 dark:text-white">
        Technologies We Use
      </h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {technologies.map(({ name, icon: Icon, color }) => (
          <TechIcon key={name} name={name} Icon={Icon} color={color} />
        ))}
      </motion.div>
    </section>
  );
}
