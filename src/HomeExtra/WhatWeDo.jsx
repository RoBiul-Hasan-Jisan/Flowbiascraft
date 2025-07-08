import { motion } from "framer-motion";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "We build scalable, secure, and responsive web applications from front to back.",
  },
  {
    title: "Mobile App Development",
    description:
      "Custom Android & iOS applications built to elevate your business.",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful interfaces to engage your users.",
  },
  {
    title: "Cloud Integration",
    description:
      "Deploy and scale your applications seamlessly in the cloud.",
  },
  {
    title: "API Development",
    description:
      "Designing secure and performant RESTful and GraphQL APIs.",
  },
  {
    title: "Software Consulting",
    description:
      "Providing expert technology guidance for your software projects.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-purple-50 py-20 px-4 sm:px-8">
      <h2 className="text-center text-4xl font-bold text-indigo-800 mb-16">
        What We Do
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Road Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-indigo-300 z-0" />

        {/* Timeline Cards */}
        {services.map((service, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={service.title}
              className={`relative w-full flex ${
                isLeft ? "justify-start" : "justify-end"
              } mb-20 z-10`}
            >
              <div className="w-full sm:w-1/2 px-4">
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-indigo-600"
                >
                  <h3 className="text-xl font-bold text-indigo-700 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
