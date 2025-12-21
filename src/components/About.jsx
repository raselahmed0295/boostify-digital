import { motion } from "framer-motion";
import { Users, Briefcase, TrendingUp } from "lucide-react";

const StatCard = ({ icon: Icon, label, value }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    className="flex flex-col items-center rounded-2xl border border-white/40 bg-white/70 backdrop-blur-xl p-6 shadow-sm"
  >
    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
      <Icon size={20} />
    </div>
    <span className="text-3xl font-bold text-gray-900">{value}+</span>
    <span className="text-sm text-gray-500 mt-1">{label}</span>
  </motion.div>
);

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl" />
        <div className="absolute bottom-0 -right-24 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 mb-5 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Partner in{" "}
            <span className="text-indigo-600">Digital Growth</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            We help local businesses build a strong digital presence through
            thoughtful design, strategic marketing and measurable results. Our
            focus is long-term growth, not short-term noise.
          </p>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            <StatCard icon={TrendingUp} label="Years Experience" value={3} />
            <StatCard icon={Briefcase} label="Projects Delivered" value={112} />
            <StatCard icon={Users} label="Happy Clients" value={89} />
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-2xl"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop"
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
