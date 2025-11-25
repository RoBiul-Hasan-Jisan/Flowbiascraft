import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { topServices, enterpriseServices, colorsPalette, serviceRoutes } from '../data/servicesData';

gsap.registerPlugin(ScrollTrigger);

const allServices = [...topServices, ...enterpriseServices];

const ParallaxCard = ({ service, index, total, progress }) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);
  const colors = colorsPalette[index % colorsPalette.length];

  // Mouse Light Effect
  const handleMouseMove = (e) => {
    const { left, top } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Update CSS variables for high performance (no re-renders)
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div 
      className="sticky top-0 h-screen flex items-center justify-center p-4 sm:p-8 overflow-hidden"
      style={{ 
        zIndex: index + 1, // Ensure correct stacking order
      }}
    >
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="card-container relative w-full max-w-5xl h-[70vh] rounded-[3rem] bg-[#0f0f0f] border border-white/10 overflow-hidden group shadow-2xl will-change-transform"
        style={{
          // Scale starts slightly larger for lower cards to create stack effect
          transformOrigin: "top center",
        }}
      >
        
        {/* 1. Volumetric Light / Glow (Follows Mouse) */}
        <div 
            className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 z-0"
            style={{
                background: `radial-gradient(
                    800px circle at var(--mouse-x) var(--mouse-y), 
                    rgba(255,255,255,0.06),
                    transparent 40%
                )`
            }}
        />

        {/* 2. Animated Gradient Background */}
        <div 
            className="absolute inset-0 opacity-20"
            style={{
                background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
                filter: "blur(80px)"
            }}
        />

        {/* 3. Noise Texture (Cinematic Feel) */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />

        {/* 4. Content */}
        <Link to={serviceRoutes[service]} className="relative z-10 h-full flex flex-col justify-between p-8 md:p-16 text-white hover:text-white/90 transition-colors">
            
            {/* Header */}
            <div className="flex justify-between items-start border-b border-white/10 pb-6">
                <span className="font-mono text-sm tracking-widest uppercase text-gray-400">
                    Service_0{index + 1}
                </span>
                <span className="font-mono text-sm border border-white/20 rounded-full px-3 py-1">
                    EXP: {colors[0]}
                </span>
            </div>

            {/* Main Title */}
            <div ref={contentRef} className="card-content transform transition-transform duration-700">
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mix-blend-lighten">
                    {service}
                </h2>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end">
                <p className="max-w-md text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                    We architect scalable solutions using {service} to drive enterprise growth and digital transformation.
                </p>
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-[-45deg] group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default function Services() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".card-container");
    
    cards.forEach((card, i) => {
      // Logic: As the next card scrolls into view, the current card 
      // (card[i]) needs to scale down and darken to simulate depth.
      
      const nextCard = cards[i + 1];
      if (!nextCard) return; // Last card doesn't need to scale down

      gsap.to(card, {
        scale: 0.9, // Shrink slightly
        filter: "brightness(0.5) blur(5px)", // Fade into background
        y: -50, // Move up slightly
        opacity: 0,
        transformOrigin: "center top",
        ease: "power2.out", // Smooth easing
        scrollTrigger: {
          trigger: card.parentElement.nextElementSibling, // Trigger when NEXT container hits
          start: "top bottom", // When next card enters viewport
          end: "top top", // When next card covers this one
          scrub: true,
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-black relative">
      
      {/* Intro Header */}
      <div className="h-[50vh] flex flex-col justify-center items-center text-center px-4 relative z-10">
        <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Expertise</span>
        </h1>
        <p className="text-gray-500 animate-bounce mt-10">Scroll to explore</p>
      </div>

      {/* The Stack Container */}
      <div className="relative w-full pb-24">
        {allServices.map((service, idx) => (
          <ParallaxCard 
            key={service} 
            service={service} 
            index={idx} 
            total={allServices.length}
          />
        ))}
      </div>

      {/* Outro */}
      <div className="h-[50vh] bg-black text-white flex items-center justify-center relative z-20">
         <h2 className="text-4xl font-mono text-gray-600">Let's build the future.</h2>
      </div>

    </section>
  );
}