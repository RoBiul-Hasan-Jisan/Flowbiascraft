import { motion } from "framer-motion";
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
import { FaJava, FaCode } from "react-icons/fa"; // FaJava for Java, FaCode as VS Code placeholder

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

export default function Technologies() {
  return (
    <section className="py-20 bg-white text-center px-4 sm:px-8">
      <h2 className="text-4xl font-bold mb-16 text-gray-800">
        Technologies We Use
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-10">
        {technologies.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.2, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center cursor-pointer"
          >
            <Icon size={56} color={color} />
            <span className="mt-2 text-gray-700 font-medium">{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
