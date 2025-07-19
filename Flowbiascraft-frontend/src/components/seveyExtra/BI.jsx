// src/components/seveyExtra/MlAi.jsx



import React, { useState, useEffect } from "react";

export default function BI() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-10");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bubble count
  const bubbleCount = 200;

  const capabilities = [
    "Customer/Human Behavior Analysis",
    "Face Identification",
    "Process Automation",
    "Pattern Analysis",
    "Intelligent Chatbot",
    "Fraudulent Identification (Bank)",
    "Data Analysis for Biological Macromolecular Structures",
    "Predictive Analytics & Modeling",
    "Targeted Marketing",
    "Churn Analysis",
    "Trend Analysis",
    "Time Series Analysis",
  ];

  const industries = [
    "Bank & Financial Organisations",
    "Real-estate",
    "E-commerce",
    "Biomolecular Research",
    "Pharmaceuticals",
  ];

  return (
    <section className="ml-ai-hero-section">
      {/* Bubble background container */}
      <div className="bubble-bg pointer-events-none">
        {[...Array(bubbleCount)].map((_, i) => {
          // Random values for each bubble
          const size = 15 + Math.random() * 60; // px
          const left = Math.random() * 100; // %
          const delay = Math.random() * 20; // s
          const duration = 15 + Math.random() * 25; // s
          const opacity = 0.1 + Math.random() * 0.25;

          return (
            <span
              key={i}
              className="bubble"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                opacity,
              }}
            />
          );
        })}
      </div>

      {/* Title & subtitle */}
      <header className="max-w-4xl mx-auto text-center mb-20 fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out z-20 relative">
        <h1
          className="text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg"
          style={{ textShadow: "0 0 12px rgba(124, 58, 237, 0.8)" }}
        >
          Machine Learning (ML) & Artificial Intelligence (AI)
        </h1>
        <p className="text-lg text-purple-300 max-w-3xl mx-auto tracking-wide">
          Expert solutions crafted to empower your organization’s AI and ML journey.
        </p>
      </header>

      {/* Description */}
      <article className="max-w-4xl mx-auto text-purple-200 space-y-6 leading-relaxed fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-150 ease-out relative z-20">
        <p>
          ML integration enables your business to contextualize data efficiently, drastically reducing the effort to transform data sets for better, actionable insights.
          AI solutions elevate your strategic decisions, forecasting potential future scopes and limitations before major investments.
        </p>
        <p>
          Adopted rapidly across diverse industries, these technologies are tailored with cutting-edge innovations to meet the unique demands of your business.
        </p>
      </article>

      {/* What we can do */}
      <section className="mt-24 max-w-4xl mx-auto fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 ease-out z-20 relative">
        <h2 className="text-3xl font-semibold mb-8 border-b border-purple-500 pb-3 drop-shadow-lg">
          What we can do
        </h2>
        <ul className="list-disc list-inside space-y-3 text-purple-300 text-lg select-text">
          {capabilities.map((item, idx) => (
            <li
              key={item}
              className="cursor-pointer hover:text-indigo-400 transition-colors duration-300"
              onClick={() => idx === 4 && setShowModal(true)}
              title={idx === 4 ? "Click for more info" : ""}
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" && idx === 4) setShowModal(true); }}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Industries served */}
      <section className="mt-24 max-w-4xl mx-auto fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-450 ease-out z-20 relative">
        <h2 className="text-3xl font-semibold mb-8 border-b border-purple-500 pb-3 drop-shadow-lg">
          Clients we have served in
        </h2>
        <ul className="list-disc list-inside space-y-3 text-purple-300 text-lg select-text">
          {industries.map((item) => (
            <li key={item} className="hover:text-indigo-400 transition-colors duration-300 cursor-default">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="mt-28 text-center fade-in-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-600 ease-out z-20 relative">
        <p className="text-purple-300 mb-8 text-lg tracking-wide">
          Ready to bring AI and ML innovations to your projects?
        </p>
        <a
          href="mailto:contact@yourcompany.com"
          className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 transition transform px-14 py-4 rounded-full text-lg font-semibold tracking-wide shadow-xl shadow-purple-700/50 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500"
          aria-label="Contact Us"
        >
          Contact Us
        </a>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-gradient-to-tr from-[#1a1a2e] via-[#16213e] to-[#0f3460] bg-opacity-95 flex items-center justify-center z-50 p-6"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
        >
          <div
            className="bg-[#1b1464] border-2 border-purple-500 rounded-lg p-8 max-w-md text-purple-100 relative shadow-2xl shadow-purple-700"
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              id="modal-title"
              className="text-2xl font-semibold mb-5 drop-shadow-lg"
              style={{ textShadow: "0 0 10px #a855f7" }}
            >
              Intelligent Chatbot
            </h3>
            <p className="mb-6 text-purple-200 leading-relaxed">
              Our Intelligent Chatbots use advanced NLP and ML algorithms to provide human-like conversational experiences, automate customer service, and significantly improve user engagement.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-purple-300 hover:text-purple-500 text-3xl font-bold focus:outline-none"
              aria-label="Close modal"
            >
              &times;
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 transition px-6 py-2 rounded-full text-white font-semibold shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Custom styles */}
      <style jsx>{`
        /* Floating bubble animation */
        @keyframes bubbleFloat {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-120vh) translateX(20px);
            opacity: 0;
          }
        }

        .bubble-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 5;
          pointer-events: none;
        }

        .bubble {
          position: absolute;
          bottom: -100px; /* start just below view */
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(124, 58, 237, 0.5),
            transparent 70%
          );
          filter: drop-shadow(0 0 12px rgba(124, 58, 237, 0.8));
          animation-name: bubbleFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: normal;
          will-change: transform, opacity;
          /* size, left, delay, and duration come from inline styles */
        }

        /* Hero section styles (you already have these) */
        .ml-ai-hero-section {
          position: relative;
          min-height: 100vh;
          padding: 6rem 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: white;
          overflow: hidden;
          background: linear-gradient(145deg, #0f172a, #1e293b, #3b0764, #7c3aed);
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
          z-index: 0;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
