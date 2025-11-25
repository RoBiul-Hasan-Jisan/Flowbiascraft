import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import {
  SiReact, SiAngular, SiVite, SiCplusplus, SiRuby, SiKotlin, SiSwift,
  SiJavascript, SiTypescript, SiPython, SiC, SiPhp, SiGo, SiRust,
  SiHtml5, SiCss3, SiMysql, SiMongodb, SiFirebase, SiDocker, SiGit,
  SiGithub, SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Tooltip from "../components/Tooltip/Tooltip";
import { technologies } from '../data/servicesData';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  SiReact, SiAngular, SiVite, SiJavascript, SiTypescript, SiPython, FaJava,
  SiCplusplus, SiC, SiRuby, SiKotlin, SiSwift, SiGo, SiRust, SiPhp,
  SiHtml5, SiCss3, SiTailwindcss, SiMysql, SiMongodb, SiFirebase, SiDocker,
  SiGit, SiGithub,
};

function TechIcon({ name, icon, color }) {
  const IconComponent = iconMap[icon];
  const itemRef = useRef(null);

  // Hover Animation: Clean Scale & Border Highlight
  const onEnter = () => {
    gsap.to(itemRef.current, {
      scale: 1.1,
      y: -5,
      borderColor: color,
      boxShadow: `0px 10px 20px -5px ${color}40`, // 40 is hex opacity
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const onLeave = () => {
    gsap.to(itemRef.current, {
      scale: 1,
      y: 0,
      borderColor: "rgba(156, 163, 175, 0.2)", // gray-400 with opacity
      boxShadow: "0px 0px 0px 0px transparent",
      duration: 0.3,
      ease: "power2.inOut"
    });
  };

  return (
    <div
      ref={itemRef}
      className="tech-item relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700/50 p-1 cursor-pointer transition-colors will-change-transform"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <Tooltip content={name}>
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor={color}
          glarePosition="all"
          scale={1.02}
          transitionSpeed={1500}
          className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 mx-auto"
        >
          <IconComponent size={48} style={{ color: color }} />
        </Tilt>
      </Tooltip>
    </div>
  );
}

export default function Technologies() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal Animation: Center-Out Ripple
    // This feels like a modern HUD loading up
    gsap.fromTo(".tech-item",
      { 
        y: 50, 
        opacity: 0, 
        scale: 0.8 
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.2)", // Subtle bounce, not cartoony
        stagger: {
          grid: "auto",
          from: "center", // Ripples from the middle
          amount: 0.6
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 text-center px-4 sm:px-8 select-none"
    >
      <h2 className="text-4xl font-extrabold mb-16 text-gray-900 dark:text-white tracking-tight">
        Technologies We Use
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
        {technologies.map(({ name, icon, color }) => (
          <TechIcon key={name} name={name} icon={icon} color={color} />
        ))}
      </div>
    </section>
  );
}