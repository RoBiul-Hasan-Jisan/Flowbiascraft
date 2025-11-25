import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Clock,
  Gamepad,
  Trophy,
  Users,
  DollarSign,
  Linkedin,
  Twitter,
  Mail as MailIcon,
} from "lucide-react";
import { teamMembers, benefits, jobs } from '../data/servicesData';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

// Icon mapping
const iconMap = {
  Briefcase: Briefcase,
  Clock: Clock,
  Gamepad: Gamepad,
  Trophy: Trophy,
  Users: Users,
  DollarSign: DollarSign,
};

export default function TeamCareers() {
  const [filter, setFilter] = useState({ location: "All", experience: "All" });

  // Filter logic
  const filteredJobs = jobs.filter((job) => {
    const locationMatch =
      filter.location === "All" || job.location === filter.location;
    const experienceMatch =
      filter.experience === "All" || job.experience === filter.experience;
    return locationMatch && experienceMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6 lg:px-24 text-gray-800">
      {/* Team Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-24"
      >
        <motion.h1
          custom={0}
          variants={fadeUp}
          className="text-5xl font-extrabold text-indigo-700 text-center mb-8"
        >
          Meet Our Talented Team
        </motion.h1>
        <motion.p
          custom={1}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center text-gray-600 mb-12"
        >
          Our developers, designers, and project managers deliver innovative
          software solutions with passion and precision.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, i) => {
            const IconComponent = iconMap[member.icon];
            return (
              <motion.div
                key={member.email}
                custom={i + 2}
                variants={fadeUp}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
                />
                <h3 className="text-xl font-semibold text-indigo-700 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex gap-4 text-indigo-600">
                  <a href={member.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
                    <Linkedin size={24} />
                  </a>
                  <a href={member.twitter} aria-label="Twitter" target="_blank" rel="noreferrer">
                    <Twitter size={24} />
                  </a>
                  <a href={`mailto:${member.email}`} aria-label="Email">
                    <MailIcon size={24} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Career Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-16 text-center"
      >
        <motion.h2 custom={0} variants={fadeUp} className="text-4xl font-bold text-indigo-700 mb-4">
          Careers at FlowBiasCraft
        </motion.h2>
        <motion.p custom={1} variants={fadeUp} className="text-gray-600 max-w-2xl mx-auto mb-8">
          Join our fast-growing team to experience a dynamic work environment with growth opportunities.
        </motion.p>
      </motion.section>

      {/* Benefits */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-20"
      >
        <motion.h3 custom={0} variants={fadeUp} className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Why Join Us?
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {benefits.map((b, i) => {
            const IconComponent = iconMap[b.icon];
            return (
              <motion.div
                key={i}
                custom={i + 1}
                variants={fadeUp}
                className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <div className="text-indigo-600">
                  <IconComponent size={24} />
                </div>
                <h4 className="text-md font-medium text-gray-700">{b.title}</h4>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Job Filter */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <motion.h3 custom={0} variants={fadeUp} className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Open Positions
        </motion.h3>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <select
            className="border border-gray-300 rounded-md p-2"
            onChange={(e) => setFilter({ ...filter, location: e.target.value })}
            value={filter.location}
          >
            <option value="All">All Locations</option>
            {[...new Set(jobs.map((job) => job.location))].map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <select
            className="border border-gray-300 rounded-md p-2"
            onChange={(e) => setFilter({ ...filter, experience: e.target.value })}
            value={filter.experience}
          >
            <option value="All">All Experience</option>
            {[...new Set(jobs.map((job) => job.experience))].map((exp) => (
              <option key={exp} value={exp}>
                {exp}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-6">
          {filteredJobs.length ? (
            filteredJobs.map((job) => (
              <motion.div
                key={job.id}
                custom={1}
                variants={fadeUp}
                className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row sm:items-center justify-between"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{job.title}</h4>
                  <p className="text-sm text-gray-500">{job.location}</p>
                  <p className="text-sm text-gray-500">{job.experience}</p>
                </div>
                <a
                  href="#"
                  className="mt-4 sm:mt-0 inline-block bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition"
                >
                  Apply Now
                </a>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500">No positions match your filters.</p>
          )}
        </div>
      </motion.section>
    </div>
  );
}