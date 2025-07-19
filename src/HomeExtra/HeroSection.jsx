import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* 🔁 Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌀 Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-indigo-800/40 to-purple-800/70 z-0 backdrop-blur-[2px]" />

      {/* 🎯 Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 w-full flex items-center justify-center min-h-screen px-6"
      >
        <div className="max-w-4xl text-center bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20 shadow-xl">
          <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-yellow-400 drop-shadow-md">FlowBiasCraft</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-200 font-medium mb-4">
            <Typewriter
              words={[
                "Innovative digital solutions.",
                "Custom software development.",
                "AI, Web, and Cloud Expertise.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Empowering your ideas with cutting-edge technology and elegant design.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-xl shadow-xl hover:bg-yellow-300 transition duration-300"
            >
              Explore Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-blue-800 transition duration-300 shadow-md"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
