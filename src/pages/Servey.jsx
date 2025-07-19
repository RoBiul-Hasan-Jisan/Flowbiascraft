import React from "react";
import { Link } from "react-router-dom";

const topServices = [
  "ML & AI Development",
  "Data Engineering",
  "Business Intelligence",
  "AR/VR Solutions",
  "Game Studio",
  "QA Testing & Automation",
];



const enterpriseServices = [
  "LMS Development",
  "Web & Mobile App Development",
  "eCommerce Development",
  "Adobe Experience Manager",
  "SharePoint Services",
  "Enterprise Focused",
  "Field Force Automation",
  "Banking Solutions",
  "Cloud Solutions",
  "Cyber Security",
  "ERP Development",
  "Backup Solutions",
];

const colorsPalette = [
  ["#4F46E5", "#6366F1", "#A78BFA"],
  ["#059669", "#10B981", "#6EE7B7"],
  ["#DC2626", "#F87171", "#FCA5A5"],
  ["#DB2777", "#EC4899", "#F472B6"],
  ["#2563EB", "#3B82F6", "#60A5FA"],
  ["#D97706", "#F59E0B", "#FBBF24"],
];

const serviceRoutes = {
  "ML & AI Development": "/ml-ai-development",
  "Data Engineering": "/data-engineering",
  "Business Intelligence": "/business-intelligence",
  "AR/VR Solutions": "/ar-vr-solutions",
  "Game Studio": "/game-studio",
  "QA Testing & Automation": "/qa-testing",
  "LMS Development": "/lms-development",
  "Web & Mobile App Development": "/web-mobile-apps",
  "eCommerce Development": "/ecommerce-development",
  "Adobe Experience Manager": "/adobe-experience-manager",
  "SharePoint Services": "/sharepoint-services",
  "Enterprise Focused": "/enterprise-focused",
  "Field Force Automation": "/field-force-automation",
  "Banking Solutions": "/banking-solutions",
  "Cloud Solutions": "/cloud-solutions",
  "Cyber Security": "/cyber-security",
  "ERP Development": "/erp-development",
  "Backup Solutions": "/backup-solutions",
};

export default function Services() {
  return (
    <section className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 px-6 py-24 max-w-7xl mx-auto relative overflow-hidden">
      <header className="text-center mb-20 select-none">
        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 animate-textGlow">
          Top Services
        </h1>
        <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg tracking-wider leading-relaxed">
          Delivering cutting-edge technology solutions tailored to your business needs.
        </p>
      </header>

      <div className="grid gap-14 md:grid-cols-3 place-items-center">
        {topServices.map((service, idx) => {
          const colors = colorsPalette[idx % colorsPalette.length];
          return (
            <Link to={serviceRoutes[service]} key={service} className="w-full">
              <article
                className="service-card"
                style={{
                  background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
                  backgroundSize: "400% 400%",
                  animationDelay: `${idx * 200}ms`,
                }}
              >
                <h3 className="text-3xl font-extrabold mb-2 text-white drop-shadow-lg tracking-wide">
                  {service}
                </h3>
              </article>
            </Link>
          );
        })}
      </div>

      <header className="text-center mb-20 mt-32 select-none">
        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan-400 animate-textGlow">
          Enterprise Focused
        </h1>
      </header>

      <div className="grid gap-14 md:grid-cols-3 place-items-center">
        {enterpriseServices.map((service, idx) => {
          const colors = colorsPalette[(idx + topServices.length) % colorsPalette.length];
          return (
            <Link to={serviceRoutes[service]} key={service} className="w-full">
              <article
                className="service-card"
                style={{
                  background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
                  backgroundSize: "400% 400%",
                  animationDelay: `${idx * 200}ms`,
                }}
              >
                <h3 className="text-3xl font-extrabold mb-2 text-white drop-shadow-lg tracking-wide">
                  {service}
                </h3>
              </article>
            </Link>
          );
        })}
      </div>

      <style>{`
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 8px #f43f5e, 0 0 16px #fb7185, 0 0 24px #f43f5e;
          }
          50% {
            text-shadow: 0 0 16px #fb7185, 0 0 32px #f43f5e, 0 0 48px #fb7185;
          }
        }

        .animate-textGlow {
          animation: textGlow 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px) rotateX(0deg) rotateY(0deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) rotateY(0deg);
          }
        }

        .service-card {
          position: relative;
          padding: 2.5rem;
          border-radius: 1.5rem;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
          color: white;
          cursor: pointer;
          background-size: 400% 400%;
          animation: gradientShift 12s ease infinite, fadeSlideUp 0.7s ease forwards;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          user-select: none;
        }

        .service-card:hover {
          transform: perspective(800px) rotateX(10deg) rotateY(10deg) scale(1.07);
          box-shadow: 0 30px 50px rgba(255, 255, 255, 0.3);
          z-index: 10;
        }
      `}</style>
    </section>
  );
}
