import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function MlAI() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const industriesRef = useRef(null);
  const ctaRef = useRef(null);
  const bubbleContainerRef = useRef(null);

  const capabilities = [
    {
      title: "Customer Behavior Analysis",
      description: "Advanced analytics to understand customer patterns and preferences",
      icon: "📊"
    },
    {
      title: "Face Identification",
      description: "Secure and accurate facial recognition systems",
      icon: "👤"
    },
    {
      title: "Process Automation",
      description: "Intelligent automation for business workflows",
      icon: "⚙️"
    },
    {
      title: "Intelligent Chatbot",
      description: "AI-powered conversational agents for enhanced customer experience",
      icon: "💬",
      modal: true
    },
    {
      title: "Fraud Detection",
      description: "Real-time fraudulent activity identification",
      icon: "🛡️"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven forecasting and trend analysis",
      icon: "🔮"
    }
  ];

  const industries = [
    { name: "Banking & Finance", icon: "🏦", projects: "50+" },
    { name: "Healthcare & Pharmaceuticals", icon: "🏥", projects: "30+" },
    { name: "E-commerce & Retail", icon: "🛒", projects: "45+" },
    { name: "Real Estate", icon: "🏢", projects: "25+" },
    { name: "Research & Development", icon: "🔬", projects: "20+" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create floating bubbles
      createBubbles();

      // Master timeline for hero section
      const masterTL = gsap.timeline();
      
      // Hero animations
      masterTL
        .fromTo(headingRef.current, 
          {
            opacity: 0,
            y: 100,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out"
          }
        )
        .fromTo(subtitleRef.current,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
          },
          "-=0.7"
        )
        .fromTo(descriptionRef.current,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
          },
          "-=0.5"
        );

      // Capabilities section animation
      gsap.fromTo(".capability-item",
        {
          opacity: 0,
          x: -50,
          rotationY: 15
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: capabilitiesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Industries section animation
      gsap.fromTo(".industry-item",
        {
          opacity: 0,
          y: 40,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: industriesRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // CTA section animation
      gsap.fromTo(ctaRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Continuous background gradient animation
      gsap.to(sectionRef.current, {
        backgroundPosition: "200% 200%",
        duration: 20,
        ease: "none",
        repeat: -1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const createBubbles = () => {
    if (!bubbleContainerRef.current) return;

    // Clear existing bubbles
    bubbleContainerRef.current.innerHTML = '';

    // Create optimized number of bubbles
    const bubbleCount = 15;
    
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('div');
      const size = 20 + Math.random() * 60;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 15 + Math.random() * 10;
      const opacity = 0.05 + Math.random() * 0.15;

      bubble.className = 'absolute rounded-full bg-gradient-to-br from-purple-400/20 to-indigo-600/10 backdrop-blur-sm';
      bubble.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        bottom: -100px;
        opacity: ${opacity};
        animation: float-up ${duration}s ease-in-out ${delay}s infinite;
      `;

      bubbleContainerRef.current.appendChild(bubble);
    }
  };

  const openModal = (capability) => {
    if (capability.modal) {
      // Create and show modal with GSAP animation
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6';
      modal.innerHTML = `
        <div class="bg-gray-900 rounded-2xl border border-purple-500/30 max-w-md w-full p-8">
          <div class="flex items-center justify-between mb-6">
            <div class="text-2xl">${capability.icon}</div>
            <button class="close-modal text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">${capability.title}</h3>
          <p class="text-gray-300 mb-6 leading-relaxed">${capability.description}</p>
          <button class="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl font-semibold text-white transition-all duration-300 close-modal">
            Learn More
          </button>
        </div>
      `;

      document.body.appendChild(modal);

      // Animate modal in
      gsap.fromTo(modal, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3 }
      );
      
      const modalContent = modal.querySelector('div');
      gsap.fromTo(modalContent,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.2)" }
      );

      // Close modal handlers
      const closeModal = () => {
        gsap.to(modalContent, {
          scale: 0.8,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            document.body.removeChild(modal);
          }
        });
      };

      modal.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', closeModal);
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"
      style={{
        backgroundSize: '400% 400%',
        backgroundImage: 'linear-gradient(145deg, #0f172a, #1e293b, #3b0764, #7c3aed)'
      }}
    >
      {/* Bubble Background */}
      <div ref={bubbleContainerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0" />

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                           linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Hero Section */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-purple-300 text-sm font-medium">AI & ML Solutions</span>
          </div>
          
          <h1 
            ref={headingRef}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent leading-tight"
          >
            Machine Learning
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              & Artificial Intelligence
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Expert solutions crafted to empower your organization's AI and ML journey.
          </p>
        </header>

        {/* Description */}
        <article 
          ref={descriptionRef}
          className="max-w-4xl mx-auto text-gray-300 space-y-6 leading-relaxed text-lg"
        >
          <p>
            ML integration enables your business to contextualize data efficiently, drastically reducing 
            the effort to transform data sets for better, actionable insights.
          </p>
          <p>
            AI solutions elevate your strategic decisions, forecasting potential future scopes and 
            limitations before major investments.
          </p>
        </article>

        {/* Capabilities Section */}
        <section 
          ref={capabilitiesRef}
          className="mt-24 max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center border-b border-purple-500/30 pb-4">
            Our AI Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="capability-item group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-500 cursor-pointer"
                onClick={() => openModal(capability)}
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {capability.description}
                </p>
                {capability.modal && (
                  <div className="mt-4 text-purple-400 text-sm font-medium flex items-center">
                    Click for details
                    <span className="ml-2">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section 
          ref={industriesRef}
          className="mt-24 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center border-b border-purple-500/30 pb-4">
            Industries We Serve
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="industry-item group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">{industry.icon}</div>
                  <span className="text-sm text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded">
                    {industry.projects} projects
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  Custom AI solutions tailored to industry-specific challenges
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section 
          ref={ctaRef}
          className="mt-28 text-center"
        >
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 backdrop-blur-sm">
            <p className="text-gray-300 mb-8 text-xl">
              Ready to bring AI and ML innovations to your projects?
            </p>
            <a
              href="mailto:contact@yourcompany.com"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 px-12 py-4 rounded-xl text-lg font-semibold text-white shadow-2xl shadow-purple-500/25 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
            >
              Start Your AI Journey
            </a>
          </div>
        </section>
      </div>

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
      `}</style>
    </section>
  );
}