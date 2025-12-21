import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Facebook, BarChart3, ExternalLink, X } from "lucide-react";

/* =======================
   Portfolio Card
======================= */
const PortfolioCard = ({
  icon: Icon,
  title,
  category,
  description,
  onClick,
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="cursor-pointer group relative rounded-2xl border border-white/40 bg-white/70 backdrop-blur-xl p-7 shadow-sm hover:shadow-xl transition"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
        {Icon && <Icon size={22} />}
      </div>

      <span className="mb-2 ml-2 inline-block text-xs font-semibold uppercase tracking-wide text-indigo-600">
        {category}
      </span>

      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

      <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-indigo-600">
        View Project <ExternalLink size={14} />
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-indigo-300/40 transition" />
    </motion.div>
  );
};

/* =======================
   Main Portfolio Section
======================= */
const Protfolio = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Real Estate Landing Page",
      category: "Website",
      icon: Globe,
      type: "url",
      preview: "https://pushpodharabd.com",
      description: "High-converting landing page built for lead generation.",
    },
    {
      title: "Local Restaurant Website",
      category: "Website",
      icon: Globe,
      type: "url",
      preview: "https://pushpodharabd.com",
      description:
        "Fast-loading responsive website with menu & WhatsApp order button.",
    },

    {
      title: "Personal Service Business Site",
      category: "Website",
      icon: Globe,
      type: "image",
      preview: "/images/service-home.jpg",
      description: "Clean business website designed to convert local visitors.",
    },
    {
      title: "New FB Page Launch",
      category: "Facebook",
      icon: Facebook,
      type: "image",
      preview: "/images/fb-page.jpg",
      description: "Branded Facebook page setup with optimized bio & content.",
    },
    {
      title: "Local Shop Ad Campaign",
      category: "Boosting",
      icon: BarChart3,
      type: "image",
      preview: "/images/fb-ads.jpg",
      description: "Geo-targeted boosting campaign that increased walk-ins.",
    },
    {
      title: "Service Lead Generation",
      category: "Boosting",
      icon: BarChart3,
      type: "url",
      preview: "https://example.com",
      description: "Monthly Facebook ad management focused on quality leads.",
    },
  ];

  return (
    <section id="portfolio" className="relative py-28 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1 mb-5 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Real Work.{" "}
            <span className="text-indigo-600">Measurable Growth.</span>
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            High-performance websites and campaigns built to increase
            visibility, leads, and conversions for local businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <PortfolioCard
              key={i}
              icon={project.icon}
              title={project.title}
              category={project.category}
              description={project.description}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* =======================
          Modal (Same Page)
      ======================= */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <div>
                  <h3 className="text-lg font-semibold">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {activeProject.category}
                  </p>
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Preview */}
              <div className="p-4 bg-gray-100">
                {activeProject.type === "url" ? (
                  <iframe
                    src={activeProject.preview}
                    title={activeProject.title}
                    className="w-full h-[70vh] rounded-xl border"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                ) : (
                  <img
                    src={activeProject.preview}
                    alt={activeProject.title}
                    className="w-full rounded-xl"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Protfolio;
