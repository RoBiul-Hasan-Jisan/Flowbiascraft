import React from "react";

export function HeroSection() {
  return (
    <section
      className="relative h-[66vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('images/your-background-image.jpg')" }} 
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          WE ARE <span className="text-blue-400">FlowBiasCraft</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium">
          Flowing Ideas. Crafted Solutions.
        </p>
      </div>
    </section>
  );
}