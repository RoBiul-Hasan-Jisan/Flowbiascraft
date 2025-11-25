import React, { useState, useRef, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { customers, partners } from '../data/servicesData';
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  hidden: {},
};

const logoVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
  hover: {
    scale: 1.12,
    boxShadow:
      "0 25px 40px rgba(0, 123, 255, 0.3), 0 8px 16px rgba(0, 123, 255, 0.15)",
    transition: { type: "spring", stiffness: 300 },
  },
  focus: {
    scale: 1.12,
    boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.85)",
    outline: "none",
  },
};

const LogoCard = forwardRef(function LogoCard(
  { name, logo, index, total, onArrowNavigation },
  ref
) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      onArrowNavigation((index + 1) % total);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      onArrowNavigation((index - 1 + total) % total);
    }
  }

  return (
    <motion.button
      type="button"
      aria-label={`${name} logo`}
      onFocus={() => setTooltipVisible(true)}
      onBlur={() => setTooltipVisible(false)}
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
      tabIndex={0}
      variants={logoVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileFocus="focus"
      viewport={{ once: true, amount: 0.3 }}
      className="relative rounded-2xl p-6 cursor-pointer shadow-md bg-white/70 backdrop-blur-md border border-gray-200 hover:bg-white focus:bg-white focus:ring-4 focus:ring-blue-400 transition-colors duration-300 flex justify-center items-center"
      style={{ width: 180, height: 90 }}
      onKeyDown={handleKeyDown}
      ref={ref}
    >
      <img
        src={logo}
        alt={name}
        className="max-h-16 object-contain pointer-events-none select-none"
        loading="lazy"
        draggable={false}
      />
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full mb-3 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold select-none pointer-events-none whitespace-nowrap shadow-lg"
          >
            {name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
});

export default function CustomersAndPartners() {
  const [customerFocusIndex, setCustomerFocusIndex] = useState(0);
  const [partnerFocusIndex, setPartnerFocusIndex] = useState(0);

  const customerRefs = useRef(Array(customers.length).fill(null));
  const partnerRefs = useRef(Array(partners.length).fill(null));

  useEffect(() => {
    if (customerRefs.current[customerFocusIndex]) {
      customerRefs.current[customerFocusIndex].focus();
    }
  }, [customerFocusIndex]);

  useEffect(() => {
    if (partnerRefs.current[partnerFocusIndex]) {
      partnerRefs.current[partnerFocusIndex].focus();
    }
  }, [partnerFocusIndex]);

  return (
    <section
      aria-labelledby="customers-partners-title"
      className="py-28 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h2
            id="customers-partners-title"
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600"
          >
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-lg sm:text-xl">
            We proudly collaborate with top global customers and partners to
            deliver world-class software solutions.
          </p>
        </header>

        {/* Customers Section */}
        <section aria-label="Our Customers" className="mb-28">
          <h3 className="text-3xl font-semibold text-indigo-800 mb-12 text-center tracking-wide">
            Our Customers
          </h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-14 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {customers.map(({ name, logo }, i) => (
              <LogoCard
                key={name}
                name={name}
                logo={logo}
                index={i}
                total={customers.length}
                onArrowNavigation={setCustomerFocusIndex}
                ref={(el) => (customerRefs.current[i] = el)}
              />
            ))}
          </motion.div>
        </section>

        <hr className="border-gray-300 mb-28" />

        {/* Partners Section */}
        <section
          aria-label="Our Strategic Partners"
          className="bg-gradient-to-r from-indigo-100 to-white py-20 px-10 rounded-3xl shadow-lg max-w-6xl mx-auto"
        >
          <h3 className="text-4xl font-semibold text-indigo-900 mb-16 text-center tracking-wide">
            Our Strategic Partners
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {partners.map(({ name, logo }, i) => (
              <LogoCard
                key={name}
                name={name}
                logo={logo}
                index={i}
                total={partners.length}
                onArrowNavigation={setPartnerFocusIndex}
                ref={(el) => (partnerRefs.current[i] = el)}
              />
            ))}
          </motion.div>
        </section>
      </div>
    </section>
  );
}