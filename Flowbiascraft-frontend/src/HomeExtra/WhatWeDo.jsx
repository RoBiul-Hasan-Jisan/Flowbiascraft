import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaMobileAlt, FaPaintBrush, FaCloud, FaPlug, FaLightbulb } from "react-icons/fa";
import Tooltip from '../components/Tooltip/Tooltip';
import { services } from '../data/servicesData';

gsap.registerPlugin(ScrollTrigger);

// Create icon mapping
const serviceIconMap = {
  FaCode: FaCode,
  FaMobileAlt: FaMobileAlt,
  FaPaintBrush: FaPaintBrush,
  FaCloud: FaCloud,
  FaPlug: FaPlug,
  FaLightbulb: FaLightbulb
};

export default function WhatWeDo() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // ... your existing animations
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const onHover = (e) => gsap.to(e.currentTarget, { scale: 1.03, boxShadow: "0px 20px 40px rgba(79, 70, 229, 0.2)", duration: 0.3 });
  const onLeave = (e) => gsap.to(e.currentTarget, { scale: 1, boxShadow: "0px 10px 15px rgba(0,0,0,0.1)", duration: 0.3 });

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={containerRef} className="relative bg-gradient-to-b from-white via-slate-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-6 sm:px-10 overflow-hidden perspective-[1200px]">
      
      {/* Floating Background Blobs */}
      <div className="blob-1 absolute w-96 h-96 bg-blue-400/20 rounded-full top-[-100px] left-[-100px] blur-[100px] z-0 pointer-events-none" />
      <div className="blob-2 absolute w-96 h-96 bg-purple-500/20 rounded-full bottom-[-100px] right-[-100px] blur-[100px] z-0 pointer-events-none" />

      <h2 className="text-center text-4xl font-extrabold text-indigo-800 dark:text-white mb-24 select-none relative z-10">
        What We Do
      </h2>

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* The Scroll-Scrubbed Line */}
        <div 
          ref={lineRef}
          className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-blue-400 to-purple-500 rounded-full shadow-xl origin-top"
        />

        {services.map((service, index) => {
          const isLeft = index % 2 === 0;
          const IconComponent = serviceIconMap[service.icon];

          return (
            <div
              key={service.title}
              className={`relative flex w-full mb-24 ${isLeft ? "justify-start pr-8" : "justify-end pl-8"}`}
            >
              {/* Central Dot */}
              <span className="absolute left-1/2 top-1.5 w-6 h-6 rounded-full bg-white border-4 border-indigo-600 z-20 transform -translate-x-1/2 shadow-lg" />
              
              {/* Connector Curve SVG */}
              <svg
                className={`absolute top-[28px] ${isLeft ? "left-1/2 -translate-x-[5px]" : "right-1/2 translate-x-[5px]"} w-[40px] h-[40px] text-indigo-300`}
                viewBox="0 0 100 100" fill="none"
              >
                <path
                  d={isLeft ? "M 100 0 Q 50 50 0 100" : "M 0 0 Q 50 50 100 100"}
                  stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                />
              </svg>

              {/* Service Card */}
              <article
                ref={addToRefs}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                className="w-full sm:w-1/2 bg-white/60 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border-l-4 border-indigo-600 cursor-default transform-style-3d will-change-transform"
              >
                <div className="flex items-center gap-3 text-indigo-700 dark:text-indigo-300 text-2xl mb-3 select-none">
                  <Tooltip content={service.description}>
                    <span className="p-2 bg-indigo-100/50 dark:bg-indigo-900/30 rounded-lg">
                      <IconComponent />
                    </span>
                  </Tooltip>
                  <h3 className="font-semibold text-xl">{service.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}