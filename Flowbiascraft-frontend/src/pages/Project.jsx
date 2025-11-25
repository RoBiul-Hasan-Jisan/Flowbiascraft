import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from '../data/servicesData';

export default function Project() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 relative min-h-[700px]">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Projects</h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Click a card to see it take place in the layout.
      </p>

      <motion.div
        className={`grid gap-8 ${
          activeId === null ? "justify-center items-center" : "sm:grid-cols-2 lg:grid-cols-3"
        } relative`}
        style={{ minHeight: 420 }}
      >
        {projects.map((project, index) => {
          const isActive = project.id === activeId;
          return (
            <motion.div
              key={project.id}
              layout
              onClick={() => setActiveId(isActive ? null : project.id)}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              aria-label={`Project card: ${project.title}`}
              className={`bg-white rounded-xl shadow-md p-6 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400
                transition-transform duration-500 ease-in-out
                ${isActive ? "z-20 scale-105 shadow-xl" : "z-10"}
                ${activeId === null ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""}
                hover:shadow-lg`}
              style={{
                width: activeId === null ? 280 : undefined,
                height: activeId === null ? 180 : undefined,
                transformOrigin: "center",
                transform:
                  activeId === null
                    ? `translate(calc(-50% + ${index * 24 - 96}px), calc(-50% + ${index * 18 - 72}px))`
                    : undefined,
              }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h2>
              <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white bg-blue-600 px-5 py-2 rounded-md hover:bg-blue-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Learn More
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}