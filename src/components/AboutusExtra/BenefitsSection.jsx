import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  const benefits = [
    {
      title: "Experienced Team",
      description:
        "Work with skilled developers, designers, and tech experts who bring years of experience across multiple industries.",
      icon: "👨‍💻",
    },
    {
      title: "Custom Solutions",
      description:
        "We build tailored software that fits your exact needs — no one-size-fits-all approach.",
      icon: "🛠️",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Stay ahead of the curve with modern, scalable, and secure solutions using the latest technologies and frameworks.",
      icon: "⚡",
    },
    {
      title: "Transparent Communication",
      description:
        "We keep you in the loop at every stage — with clear timelines, regular updates, and direct access to your project team.",
      icon: "📢",
    },
    {
      title: "Agile Development",
      description:
        "Fast, flexible, and iterative development ensures your software evolves with your business.",
      icon: "🔄",
    },
    {
      title: "End-to-End Support",
      description:
        "From concept to launch and beyond, we support you every step of the way — including post-deployment maintenance and updates.",
      icon: "🔧",
    },
    {
      title: "On-Time Delivery",
      description:
        "We respect your deadlines and work with efficiency to deliver high-quality solutions on schedule.",
      icon: "⏱️",
    },
    {
      title: "Cost-Effective Services",
      description:
        "Premium solutions at competitive rates — giving you the best value for your investment.",
      icon: "💰",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-gray-50 to-white py-24 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title & subtitle */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
  variants={titleVariants}
  className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 mb-4 tracking-tight drop-shadow-lg select-none"
  style={{
    backgroundSize: "200% auto",
    backgroundPosition: "left center",
    animation: "gradientShift 4s ease infinite",
    lineHeight: 1.2,            // increase line height to avoid clipping descenders
    paddingBottom: "0.2em",     // add some padding below text
  }}
>
  Benefits of Working With Us
</motion.h2>


          <motion.p
            variants={titleVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We deliver exceptional value through our comprehensive approach and
            technical expertise
          </motion.p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 30px rgba(59,130,246,0.2)" }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100"
            >
              <div className="text-5xl mb-5">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600 flex-grow">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }
      `}</style>
    </section>
  );
};
