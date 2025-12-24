import { motion } from "framer-motion";

import ServicesSection from "./Service";
import AboutSection from "../components/About";
import ContactSection from "../components/ContactSection";
import Protfolio from "./Protfolio";

const Home = () => {
  const bars = [40, 60, 30, 80, 50, 70, 45, 65, 55, 75, 85, 35];

  return (
    <div className="system-ui ">
      <section
        id="home"
        className="relative overflow-hidden bg-gray-50 font-inter"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 items-center gap-12 py-16 md:py-28">
            {/* Left Content Area */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                We Build
                <span className="text-[#5B43D8] block sm:inline sm:ml-2 color-animated">
                  Websites & Grow Your Social Reach
                </span>
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Fast, professional, and conversion-focused single-page websites
                for local businesses—plus Facebook Page setup, content, and
                smart boosting to attract real customers.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4 mt-6"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-white font-medium shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="#services"
                  className="px-8 py-3 border border-[#5B43D8] text-[#5B43D8] font-semibold rounded-md hover:bg-[#5B43D8] hover:text-white transition duration-300"
                >
                  Our Services
                </a>
              </motion.div>
            </div>

            {/* Right Dashboard Visualization Area */}
            <div className="relative">
              {/* BACKGROUND GLOW (More subtle blur and color) */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl rounded-full"></div>

              {/* MAIN DASHBOARD CARD */}
              <div className="relative rounded-3xl border border-gray-100 bg-white shadow-2xl p-7 md:p-8">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Revenue Growth</p>
                    <h4 className="text-2xl font-bold text-gray-900">
                      $124,560
                    </h4>
                  </div>
                  <span className="px-4 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-700">
                    +38%
                  </span>
                </div>

                {/* CHART CONTAINER */}
                <div className="relative h-48 rounded-xl bg-gray-50 overflow-hidden">
                  {/* GRID LINE */}
                  <div className="absolute inset-0 grid grid-rows-4 opacity-20">
                    <div className="border-b border-gray-300"></div>
                    <div className="border-b border-gray-300"></div>
                    <div className="border-b border-gray-300"></div>
                  </div>

                  {/* ANIMATED BARS */}
                  <div className="absolute bottom-0 left-4 right-4 flex items-end justify-between gap-2 h-full py-4">
                    {bars.map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: `${height}%`, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1, // Slightly faster animation delay
                          ease: "easeOut",
                        }}
                        className="w-full max-w-[14px] rounded-t-md bg-gradient-to-t from-[#5B43D8] to-[#8d7dfa] shadow-md"
                      />
                    ))}
                  </div>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">CTR</p>
                    <p className="font-bold text-gray-900">4.9%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">ROAS</p>
                    <p className="font-bold text-gray-900">6.2x</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">CPA</p>
                    <p className="font-bold text-gray-900">$12.4</p>
                  </div>
                </div>
              </div>

              {/* FLOATING CARD (Slightly darker color) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-10 -right-5 bg-white rounded-xl shadow-xl px-5 py-4 border border-gray-100"
              >
                <p className="text-xs text-gray-500">Conversions</p>
                <p className="font-bold text-lg text-[#5B43D8]">+1,248</p>
              </motion.div>

              {/* BRAND BADGE */}
              <div className="absolute -bottom-6 -left-6 bg-gray-800 text-white px-5 py-3 rounded-xl shadow-lg text-sm font-semibold">
                Premium Analytics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM FEATURE HIGHLIGHTS */}
      <section id="chouse" className="max-w-7xl mx-auto px-6 py-24">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full">
            Our Advantage
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Built for <span className="text-indigo-600">Scalable Growth</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Premium performance marketing systems designed to maximize revenue,
            efficiency, and long-term success.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: "📈",
              title: "ROI Focused Campaigns",
              desc: "Data-backed strategies optimized for profit, not vanity metrics.",
              gradient: "from-indigo-500/20 via-indigo-500/10 to-transparent",
            },
            {
              icon: "🎯",
              title: "High-Converting Creatives",
              desc: "Psychology-driven messaging that turns attention into action.",
              gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
            },
            {
              icon: "🤝",
              title: "Long-Term Partnership",
              desc: "Strategic collaboration aligned with your growth goals.",
              gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
            },
            {
              icon: "⚡",
              title: "Fast & Clear Communication",
              desc: "Instant updates, transparent reporting, no delays.",
              gradient: "from-teal-500/20 via-teal-500/10 to-transparent",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
          relative group rounded-2xl
          border border-gray-200/70
          bg-white/80 backdrop-blur-xl
          p-8
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-xl
          hover:border-indigo-300/60
        "
            >
              {/* GRADIENT GLOW */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient}
          opacity-100 group-hover:opacity-0 transition`}
              />

              {/* CONTENT */}
              <div className="relative z-10">
                <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 text-2xl">
                  {item.icon}
                </div>

                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <ServicesSection></ServicesSection>
      </section>

      {/* Protfolio Section */}

      <section id="protfolio">
        <Protfolio></Protfolio>
      </section>

      {/* ABOUT */}

      <section id="about">
        <AboutSection></AboutSection>
      </section>

      {/* CONTACT */}

      <section id="contact">
        <ContactSection></ContactSection>
      </section>
    </div>
  );
};

export default Home;
