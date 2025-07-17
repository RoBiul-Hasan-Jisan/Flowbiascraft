import { motion } from "framer-motion";
import React from "react";

export function WhoWeAreSection() {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
         
          <h2 className="text-4xl font-extrabold text-blue-700 mb-6 leading-tight">
            Who <span className="text-gray-900">We</span> Are
          </h2>
          <p className="text-lg leading-relaxed mb-5">
            We are a team of passionate developers, designers, and innovators committed to building smart, scalable, and secure software solutions.
          </p>
          <p className="text-lg leading-relaxed mb-5">
            From startups to enterprises, we partner with clients across industries to bring ideas to life — delivering web, mobile, cloud, and AI-powered applications that drive results.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you're looking to launch a new product or upgrade an existing system, we’re here to make it happen — with precision, creativity, and care.
          </p>
        </motion.div>
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/we-secure-the-digitally-connected-world.png"
            alt="FlowBiasCraft Team"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
