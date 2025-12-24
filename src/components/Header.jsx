import React, { useEffect, useState } from "react";
import logoImg from "../assets/boostify_digitals.png";
//import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const navItems = [
    { to: "#home", label: "Home" },
    { to: "#services", label: "Services" },
    { to: "#portfolio", label: "Portfolio" },
    { to: "#about", label: "About" },
    { to: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.to));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleScrollTo = (hash) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-20">
      <header
        className={`montserrat fixed top-0 left-0 w-full z-50 transition-all duration-300
      backdrop-blur-md border-b border-gray-200
      ${scrolled ? "h-16 bg-white/90 shadow-lg" : "h-20 bg-white/80"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
          <div className="relative flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logoImg}
                alt="Logo"
                className={`transition-all duration-300 ${
                  scrolled ? "w-28" : "w-36"
                }`}
              />
            </div>

            {/* Navbar */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-2 font-medium">
              {navItems.map((item) => {
                const isActive = activeSection === item.to;

                return (
                  <button
                    key={item.to}
                    onClick={() => handleScrollTo(item.to)}
                    className={`relative px-4 py-2 rounded-full transition-all duration-300
                    ${
                      isActive
                        ? "text-[#6851df] font-semibold"
                        : "text-gray-700 hover:text-[#6851df]"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-[#6851df]/15 rounded-full -z-10" />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Call Button */}
            <div className="hidden md:inline-flex">
              <a href="tel:01867677350" className="premium-btn zoom-pulse">
                <span className="premium-btn-inner">📞 Call: 01867-677350</span>
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(true)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500 backdrop-blur shadow-md active:scale-95 transition"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-white p-8"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-5 right-6 text-3xl text-red-600"
              >
                ✕
              </button>

              <div
                className="mt-20 space-y-4 px-3 py-6 rounded-2xl
                bg-gradient-to-br from-indigo-500/100 via-purple-500/95 to-sky-500/100
                backdrop-blur-xl border border-white/95"
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.to;

                  return (
                    <button
                      key={item.to}
                      onClick={() => {
                        handleScrollTo(item.to);
                        setMenuOpen(false);
                      }}
                      className={`group relative w-full text-left
                      px-6 py-5 rounded-2xl
                      backdrop-blur-xl
                      border transition-all duration-300
                      ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-600/70 to-purple-600/70 border-indigo-400/90"
                          : "bg-white/50 border-white/70 hover:bg-white/80"
                      }`}
                    >
                      {/* Glow */}
                      <span
                        className="absolute inset-0 rounded-2xl
                        bg-gradient-to-br from-indigo-500/20 to-transparent
                        opacity-0 group-hover:opacity-100 transition"
                      />

                      <span
                        className={`relative z-10 text-lg font-semibold
                        ${isActive ? "text-white" : "text-gray-800"}`}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;
