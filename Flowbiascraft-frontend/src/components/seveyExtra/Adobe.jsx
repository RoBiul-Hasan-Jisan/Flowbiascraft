import React, { useState, useEffect, useCallback } from "react";

const Adobe = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Professional scroll animation with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    document.querySelectorAll(".observe-me").forEach((el) => observer.observe(el));
    setIsVisible(true);

    return () => observer.disconnect();
  }, []);

  // Optimized bubble background
  const BubbleBackground = useCallback(() => {
    const bubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: 20 + Math.random() * 80,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 20 + Math.random() * 10,
      opacity: 0.05 + Math.random() * 0.1,
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full bg-gradient-to-br from-purple-400/20 to-indigo-600/10 backdrop-blur-sm"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
              bottom: '-100px',
              opacity: bubble.opacity,
              animation: `float-up ${bubble.duration}s ease-in-out ${bubble.delay}s infinite`,
            }}
          />
        ))}
      </div>
    );
  }, []);

  // Data structures
  const capabilities = [
    {
      title: "Customer Behavior Analysis",
      description: "Advanced analytics to understand customer patterns and preferences",
      icon: "📊",
      features: ["Pattern Recognition", "Predictive Modeling", "Real-time Insights"]
    },
    {
      title: "Face Identification",
      description: "Secure and accurate facial recognition systems",
      icon: "👤",
      features: ["Biometric Security", "Access Control", "Identity Verification"]
    },
    {
      title: "Process Automation",
      description: "Intelligent automation for business workflows",
      icon: "⚙️",
      features: ["Workflow Optimization", "Cost Reduction", "Efficiency Boost"]
    },
    {
      title: "Intelligent Chatbot",
      description: "AI-powered conversational agents for enhanced customer experience",
      icon: "💬",
      features: ["24/7 Support", "Natural Language Processing", "Multi-platform Integration"]
    },
    {
      title: "Fraud Detection",
      description: "Real-time fraudulent activity identification for financial institutions",
      icon: "🛡️",
      features: ["Anomaly Detection", "Risk Assessment", "Compliance Monitoring"]
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven forecasting and trend analysis",
      icon: "🔮",
      features: ["Market Trends", "Customer Insights", "Strategic Planning"]
    }
  ];

  const industries = [
    { name: "Banking & Finance", icon: "🏦", count: "50+ Projects" },
    { name: "Healthcare & Pharmaceuticals", icon: "🏥", count: "30+ Solutions" },
    { name: "E-commerce & Retail", icon: "🛒", count: "45+ Implementations" },
    { name: "Real Estate", icon: "🏢", count: "25+ Deployments" },
    { name: "Research & Development", icon: "🔬", count: "20+ Collaborations" },
  ];

  const stats = [
    { value: "98%", label: "Accuracy Rate" },
    { value: "50%", label: "Cost Reduction" },
    { value: "24/7", label: "System Uptime" },
    { value: "200+", label: "Successful Deployments" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <BubbleBackground />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                           linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center mb-24 observe-me opacity-0">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-purple-300 text-sm font-medium">AI & ML Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
            Machine Learning
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              & Artificial Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Transform your business with cutting-edge AI and ML solutions. 
            We deliver intelligent systems that drive innovation, efficiency, and competitive advantage.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/25">
              Start Your AI Journey
            </button>
            <button className="px-8 py-4 border border-purple-500/30 hover:border-purple-500/50 rounded-xl font-semibold text-purple-300 hover:text-white transition-all duration-300 backdrop-blur-sm">
              View Case Studies
            </button>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="mb-24">
          <div className="text-center mb-16 observe-me opacity-0">
            <h2 className="text-4xl font-bold text-white mb-4">AI & ML Capabilities</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive suite of artificial intelligence and machine learning services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group observe-me opacity-0 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => setActiveModal(capability)}
              >
                <div className="text-3xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {capability.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {capability.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-24">
          <div className="text-center mb-16 observe-me opacity-0">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted Across Industries</h2>
            <p className="text-gray-400 text-lg">
              Delivering AI solutions to leading organizations worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="observe-me opacity-0 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">{industry.icon}</div>
                  <span className="text-sm text-green-400 font-medium">{industry.count}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm">
                  Custom AI solutions tailored to industry-specific challenges and opportunities
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center observe-me opacity-0">
          <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our AI experts and discover how machine learning can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Book a Consultation
              </button>
              <button className="px-8 py-4 border border-white/30 hover:border-white/50 text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Enhanced Modal */}
      {activeModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-gray-900 rounded-2xl border border-purple-500/30 max-w-md w-full p-8 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-2xl">{activeModal.icon}</div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">{activeModal.title}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{activeModal.description}</p>
            
            <div className="space-y-3 mb-8">
              <h4 className="font-semibold text-white">Key Features:</h4>
              {activeModal.features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <svg className="w-4 h-4 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>
            
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl font-semibold text-white transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-120vh) translateX(20px) rotate(180deg);
            opacity: 0;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-in {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Adobe;