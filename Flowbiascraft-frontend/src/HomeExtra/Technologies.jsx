import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiReact, SiAngular, SiVite, SiJavascript, SiTypescript, SiPython, 
  SiCplusplus, SiC, SiRuby, SiKotlin, SiSwift, SiGo, SiRust, SiPhp,
  SiHtml5, SiCss3, SiTailwindcss, SiMysql, SiMongodb, SiFirebase, 
  SiDocker, SiGit, SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { technologies } from '../data/servicesData'; 

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  SiReact, SiAngular, SiVite, SiJavascript, SiTypescript, SiPython, FaJava,
  SiCplusplus, SiC, SiRuby, SiKotlin, SiSwift, SiGo, SiRust, SiPhp,
  SiHtml5, SiCss3, SiTailwindcss, SiMysql, SiMongodb, SiFirebase, SiDocker,
  SiGit, SiGithub,
};

export default function Technologies() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const itemsRef = useRef([]); // Stores DOM elements
  const mouse = useRef({ x: 0, y: 0 });

  // --- PART 1: THE DOM ANIMATION (Entry) ---
  useGSAP(() => {
    gsap.fromTo(".tech-node",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: { amount: 0.5, from: "random" },
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );
  }, { scope: containerRef });

  // --- PART 2: THE HYBRID PHYSICS ENGINE (Canvas) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    let domNodes = []; // Cached coordinates of our React Icons

    // Configuration
    const particleCount = 60;
    const connectionDistance = 150;
    const mouseDistance = 200;

    // Resize Handler
    const handleResize = () => {
      canvas.width = containerRef.current.offsetWidth;
      canvas.height = containerRef.current.offsetHeight;
      
      // Re-map DOM positions
      domNodes = itemsRef.current.map(el => {
        if(!el) return null;
        const rect = el.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        return {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
          color: el.dataset.color // We stored color in a data attribute
        };
      }).filter(Boolean);
    };

    // Particle Class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1; // Velocity X
        this.vy = (Math.random() - 0.5) * 1; // Velocity Y
        this.size = Math.random() * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse Repulsion / Interaction
        const dx = mouse.current.x - this.x;
        const dy = mouse.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouseDistance - distance) / mouseDistance;
            // Push away slightly
            this.vx -= forceDirectionX * force * 0.5; 
            this.vy -= forceDirectionY * force * 0.5;
        }
      }

      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize
    const init = () => {
      handleResize();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // The Game Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 1. Update and Draw Particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();

        // 2. Connect Particles to other Particles (Constellation)
        // (Simplified for performance: only connect to nearby)
      });

      // 3. THE HYBRID LOGIC: Connect Particles to DOM Nodes
      domNodes.forEach(node => {
        // Draw the static connection points behind the icons
        // ctx.fillStyle = node.color;
        // ctx.beginPath();
        // ctx.arc(node.x, node.y, 3, 0, Math.PI*2);
        // ctx.fill();

        // Check distance to Mouse (Interactive Line)
        const mouseDx = mouse.current.x - node.x;
        const mouseDy = mouse.current.y - node.y;
        const mouseDist = Math.sqrt(mouseDx*mouseDx + mouseDy*mouseDy);

        if (mouseDist < mouseDistance) {
            ctx.strokeStyle = node.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.current.x, mouse.current.y);
            ctx.stroke();
        }

        // Check distance to Floating Particles
        particles.forEach(particle => {
            const dx = particle.x - node.x;
            const dy = particle.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
                // Opacity based on distance
                const opacity = 1 - (dist / connectionDistance);
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(node.x, node.y); // Connect Canvas particle to HTML Element!
                ctx.stroke();
            }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Run once on mount

  // Track mouse relative to container
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#050505] py-24 overflow-hidden"
    >
      {/* 1. THE CANVAS LAYER (Background Physics) */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-6xl md:text-8xl font-black text-white mb-20 tracking-tighter mix-blend-difference">
          Technologies  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">We Use</span>
        </h2>

        {/* 2. THE DOM LAYER (Foreground Interaction) */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {technologies.map(({ name, icon, color }, i) => {
            const IconComponent = iconMap[icon];
            return (
              <div 
                key={name}
                ref={el => itemsRef.current[i] = el}
                data-color={color} // Pass color to canvas via dataset
                className="tech-node relative group"
              >
                 <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                 
                 <div className="relative w-20 h-20 bg-[#111] border border-white/10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 z-10 shadow-2xl">
                    <IconComponent size={36} style={{ color: color }} />
                 </div>
                 
                 {/* Tooltip (Simple css) */}
                 <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-gray-400">
                    {name}
                 </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}