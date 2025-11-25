import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function HeroSection() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  // We don't need refs for text if we scope the selector, 
  // but keeping a container ref is good practice.

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Background Animation: Slow "Ken Burns" Zoom Effect
    // Starts zoomed in (scale 1.2) and dark, then settles to normal
    tl.fromTo(bgRef.current,
      { 
        scale: 1.2, 
        filter: "brightness(0.4)" // Start darker
      },
      { 
        scale: 1, 
        filter: "brightness(1)", // Brighten up
        duration: 2.5, 
        ease: "power2.out" 
      }
    );

    // 2. Text Reveal
    // We select everything with the class 'hero-anim'
    // The "-=2.0" makes this start 0.5s after the background starts (overlap)
    tl.fromTo(".hero-anim",
      { 
        y: 50, 
        opacity: 0, 
        filter: "blur(10px)" // Cinematic blur effect
      },
      { 
        y: 0, 
        opacity: 1, 
        filter: "blur(0px)", 
        duration: 1, 
        stagger: 0.2 // 0.2s delay between each text element
      },
      "-=2.0" 
    );

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative h-[66vh] flex items-center justify-center overflow-hidden text-white"
    >
      {/* Background Layer 
        Separated into a div so we can animate scale without affecting text 
      */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('images/your-background-image.jpg')" }} 
      >
        {/* Dark Overlay inside the background div */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-center px-6">
        
        {/* Intro Text */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 overflow-hidden">
          <div className="hero-anim inline-block mr-3">
            WE ARE
          </div>
          
          <div className="hero-anim inline-block text-blue-400">
            FlowBiasCraft
          </div>
        </h1>

        {/* Subtitle */}
        <p className="hero-anim text-xl md:text-2xl font-medium text-gray-200">
          Flowing Ideas. Crafted Solutions.
        </p>

        {/* Optional: Call to Action Button (example) */}
        <div className="hero-anim mt-8">
            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-400 hover:text-white transition-colors">
                Get Started
            </button>
        </div>

      </div>
    </section>
  );
}