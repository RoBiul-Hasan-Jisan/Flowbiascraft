import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaPaintBrush, FaCloud, FaPlug, FaLightbulb } from "react-icons/fa";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "We build scalable, secure, and responsive web applications from front to back.",
    icon: <FaCode />,
  },
  {
    title: "Mobile App Development",
    description:
      "Custom Android & iOS applications built to elevate your business.",
    icon: <FaMobileAlt />,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful interfaces to engage your users.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Cloud Integration",
    description:
      "Deploy and scale your applications seamlessly in the cloud.",
    icon: <FaCloud />,
  },
  {
    title: "API Development",
    description:
      "Designing secure and performant RESTful and GraphQL APIs.",
    icon: <FaPlug />,
  },
  {
    title: "Software Consulting",
    description:
      "Providing expert technology guidance for your software projects.",
    icon: <FaLightbulb />,
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-6 sm:px-10 overflow-hidden">
      {/* Background glows */}
      <div className="absolute w-96 h-96 bg-blue-400 opacity-20 rounded-full top-[-150px] left-[-100px] blur-[120px] animate-pulse" />
      <div className="absolute w-96 h-96 bg-purple-500 opacity-20 rounded-full bottom-[-150px] right-[-100px] blur-[120px] animate-pulse" />

      <h2 className="text-center text-4xl font-extrabold text-indigo-800 dark:text-white mb-24 select-none">
        What We Do
      </h2>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Timeline vertical line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-blue-400 to-purple-500 rounded-full shadow-xl"
        />

        {services.map((service, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={service.title}
              className={`relative flex w-full mb-24 ${isLeft ? "justify-start pr-8" : "justify-end pl-8"}`}
            >
              {/* Connector Dot */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1.5 w-6 h-6 rounded-full bg-white border-4 border-indigo-600 z-20 transform -translate-x-1/2 shadow-lg"
              />

              {/* Curved connector SVG */}
              <svg
                className={`absolute top-[28px] ${isLeft ? "left-1/2 -translate-x-[5px]" : "right-1/2 translate-x-[5px]"} w-[40px] h-[40px] text-indigo-300`}
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d={isLeft ? "M 100 0 Q 50 50 0 100" : "M 0 0 Q 50 50 100 100"}
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              {/* Service Card */}
              <motion.article
                initial={{ opacity: 0, y: 60, x: isLeft ? -50 : 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full sm:w-1/2 bg-white/60 dark:bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-l-4 border-indigo-600 hover:scale-[1.02] transition-transform cursor-default"
                aria-label={`${service.title} service`}
              >
                <div className="flex items-center gap-3 text-indigo-700 dark:text-indigo-300 text-2xl mb-3 select-none">
                  {service.icon}
                  <h3 className="font-semibold text-xl">{service.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
