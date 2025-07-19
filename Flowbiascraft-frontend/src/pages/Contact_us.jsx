import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ContactUs() {
  const offices = [
    {
      title: "Bangladesh",
      address: "8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka 1212",
      email: "sales@brainstation-23.com",
      phone: "+8801404055226",
    },
    {
      title: "USA",
      address: "7426 Alban Station Blvd, Suite A101, Springfield, VA 22150",
      email: "sales@brainstation-23.com",
      phone: "+1 201 534 7200",
    },
    {
      title: "Germany",
      address: "26160 Bad Zwischenahn, Germany",
      email: "sales@brainstation-23.de",
      phone: "+49 4403 6999839",
    },
    {
      title: "UAE",
      address: "903, DAMAC XL Tower, Business Bay, Dubai, PO BOX-29544",
      email: "sales@brainstation-23.com",
      phone: "+971 42420223",
    },
    {
      title: "Malaysia",
      address: "Level 9, Integra Tower, The Intermark, Jalan Tun Razak, Kuala Lumpur 50400",
      email: "sales@brainstation-23.com",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-slate-100 text-gray-800 px-6 py-20 lg:px-24">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">
          Let’s Work Together
        </h1>
        <p className="text-lg text-gray-600">
          Got a project in mind? Reach out and let’s build something amazing together.
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* Left Panel */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-indigo-700">Get in Touch</h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Whether you're launching a product or need expert guidance — we're just a message away.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex gap-3 items-start">
              <MapPin className="text-indigo-500 mt-1" size={20} />
              <span>Global presence in 5+ countries</span>
            </div>
            <div className="flex gap-3 items-start">
              <Mail className="text-indigo-500 mt-1" size={20} />
              <a href="mailto:sales@brainstation-23.com" className="text-blue-600 hover:underline">
                sales@brainstation-23.com
              </a>
            </div>
            <div className="flex gap-3 items-start">
              <Phone className="text-indigo-500 mt-1" size={20} />
              <a href="tel:+8801404055226" className="text-blue-600 hover:underline">
                +880 1404 055 226
              </a>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="#"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-indigo-700 transition"
            >
              Start a Conversation
            </a>
          </div>
        </motion.div>

        {/* Right Panel - Animated Cards */}
        <div className="grid gap-6">
          {offices.map((office, i) => (
            <motion.div
              key={i}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-5"
            >
              <h3 className="text-lg font-semibold text-indigo-700">
                {office.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 whitespace-pre-line">
                {office.address}
              </p>
              <p className="text-sm mt-2">
                <span className="font-medium">Email:</span>{" "}
                <a href={`mailto:${office.email}`} className="text-blue-600 hover:underline">
                  {office.email}
                </a>
              </p>
              {office.phone && (
                <p className="text-sm">
                  <span className="font-medium">Phone:</span>{" "}
                  <a href={`tel:${office.phone}`} className="text-blue-600 hover:underline">
                    {office.phone}
                  </a>
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
