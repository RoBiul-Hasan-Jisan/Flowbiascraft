import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const customers = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png",
  },
];

const partners = [
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Salesforce",
    logo:
      "data:image/png;base64,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",
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
];

// Animation variants
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
    scale: 1.1,
    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
    transition: { type: "spring", stiffness: 300 },
  },
  focus: {
    scale: 1.1,
    boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.8)",
    outline: "none",
  },
};

function LogoCard({ name, logo }) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

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
      className="relative bg-white rounded-xl p-6 flex justify-center items-center cursor-pointer shadow-sm focus:outline-none"
      style={{ width: 160, height: 80 }}
    >
      <img
        src={logo}
        alt={name}
        className="max-h-14 object-contain pointer-events-none"
        loading="lazy"
        draggable={false}
      />
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full mb-2 px-3 py-1 rounded bg-gray-900 text-white text-sm select-none pointer-events-none whitespace-nowrap shadow-lg"
          >
            {name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function CustomersAndPartners() {
  return (
    <section
      aria-labelledby="customers-partners-title"
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 px-6 sm:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h2
            id="customers-partners-title"
            className="text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl">
            We proudly collaborate with top global customers and partners to
            deliver world-class software solutions.
          </p>
        </header>

        {/* Customers Section */}
        <section aria-label="Our Customers" className="mb-24">
          <h3 className="text-3xl font-semibold text-gray-800 mb-10 text-center tracking-wide">
            Our Customers
          </h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-12 justify-items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {customers.map(({ name, logo }) => (
              <LogoCard key={name} name={name} logo={logo} />
            ))}
          </motion.div>
        </section>

        <hr className="border-gray-300 mb-24" />

        {/* Partners Section */}
        <section
          aria-label="Our Strategic Partners"
          className="bg-gradient-to-r from-blue-50 to-white py-20 px-8 rounded-2xl shadow-xl max-w-5xl mx-auto"
        >
          <h3 className="text-4xl font-semibold text-blue-900 mb-16 text-center tracking-wide">
            Our Strategic Partners
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {partners.map(({ name, logo }) => (
              <LogoCard key={name} name={name} logo={logo} />
            ))}
          </motion.div>
        </section>
      </div>
    </section>
  );
}
