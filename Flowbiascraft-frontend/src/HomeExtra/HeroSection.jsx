import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const comp = useRef(null); 
  const cardRef = useRef(null); // Ref specifically for the 3D tilt effect

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. MASTER TIMELINE
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Sequence: Card grows in -> Title slides up -> Subtitle -> Text -> Buttons pop
      tl.from(cardRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(".hero-title", {
          y: 50,
          opacity: 0,
          duration: 1,
          skewY: 5, // Adds a cool cinematic skew during reveal
        }, "-=0.5") // Overlap previous animation by 0.5s
        .from(".hero-subtitle", {
          x: -20,
          opacity: 0,
          duration: 0.8,
        }, "-=0.6")
        .from(".hero-desc", {
          y: 20,
          opacity: 0,
          duration: 0.8,
        }, "-=0.6")
        .from(".hero-btn", {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2, // Animate buttons one after another
          ease: "back.out(1.7)", // "Pop" effect
        }, "-=0.4");

      // 2. CONTINUOUS ANIMATION (The "Breathing" Gradient)
      gsap.to(".animated-overlay", {
        backgroundPosition: "200% center",
        duration: 20,
        repeat: -1,
        ease: "linear",
      });

    }, comp);

    return () => ctx.revert();
  }, []);

  // 3. ADVANCED INTERACTION: 3D Parallax Tilt
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    
    // Calculate mouse position relative to center (-1 to 1)
    const xPos = (clientX / width) - 0.5;
    const yPos = (clientY / height) - 0.5;

    // Tilt the card using GSAP quickSetter for performance or standard .to
    gsap.to(cardRef.current, {
      rotationY: xPos * 20, // Rotate horizontally
      rotationX: -yPos * 20, // Rotate vertically (inverted)
      duration: 1,
      ease: "power2.out",
      transformPerspective: 1000, // Vital for 3D effect
    });
  };

  const handleMouseLeave = () => {
    // Reset to flat
    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 1,
      ease: "power2.out",
    });
  };

  // Button Hover Effects (Elastic)
  const btnHover = (e) => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.4, ease: "elastic.out(1, 0.3)" });
  const btnHoverOut = (e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.out" });
  const btnTap = (e) => gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1 });

  return (
    <section 
      ref={comp} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full overflow-hidden perspective-1000"
    >
      {/* 🔁 Video Background */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* 🌀 Animated Overlay - Added 'bg-size' for animation */}
      <div className="animated-overlay absolute inset-0 bg-[length:400%_400%] bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-indigo-900/80 z-0 backdrop-blur-[3px]" />

      {/* 🎯 Content Container */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-screen px-6">
        
        {/* Glass Card - Reference attached here for 3D Tilt */}
        <div 
          ref={cardRef}
          className="max-w-4xl text-center bg-white/10 backdrop-blur-2xl rounded-3xl p-10 border border-white/20 shadow-2xl will-change-transform"
        >
          {/* Title */}
          <div className="overflow-hidden mb-6"> {/* Overflow hidden helps the slide-up effect */}
            <h1 className="hero-title text-3xl md:text-6xl font-extrabold text-white leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-sm">
                FlowBiasCraft
              </span>
            </h1>
          </div>

          {/* Typewriter */}
          <h2 className="hero-subtitle text-xl md:text-2xl text-gray-200 font-medium mb-4 h-8">
            <Typewriter
              words={[
                "Innovative digital solutions.",
                "Custom software development.",
                "AI, Web, and Cloud Expertise.",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          {/* Description */}
          <p className="hero-desc text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg font-light tracking-wide">
            Empowering your ideas with cutting-edge technology and elegant design.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onMouseEnter={btnHover}
              onMouseLeave={btnHoverOut}
              onMouseDown={btnTap}
              className="hero-btn bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-yellow-400/50 transition-shadow duration-300"
            >
              Explore Projects
            </button>
            <button
              onMouseEnter={btnHover}
              onMouseLeave={btnHoverOut}
              onMouseDown={btnTap}
              className="hero-btn border border-white/30 bg-white/5 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white hover:text-blue-900 transition-colors duration-300 shadow-md backdrop-blur-sm"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}