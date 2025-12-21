import React from "react";
import logoImg from "../assets/boostify_digitals.png";

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-[#0A1633] text-gray-300 montserrat overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-sky-500/10 pointer-events-none" />

        {/* Top divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <img
              src={logoImg}
              alt="Boostify Digital"
              className="w-40 bg-white p-2 rounded-md shadow"
            />

            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              We help local brands grow online through high-converting websites
              and performance-driven social media solutions.
            </p>

            <div className="flex gap-4 mt-6">
              {["facebook-f", "instagram", "linkedin-in"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-indigo-500 hover:text-white transition-all duration-300"
                >
                  <i className={`fa-brands fa-${icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-semibold tracking-wide mb-5">
              Services
            </h5>
            <ul className="space-y-3 text-sm">
              {[
                "Local Business Website",
                "Landing Page Design",
                "Facebook Page Setup",
                "Boosting & Management",
              ].map((service) => (
                <li
                  key={service}
                  className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-white font-semibold tracking-wide mb-5">
              Company
            </h5>
            <ul className="space-y-3 text-sm">
              {["About Us", "Projects", "Why Choose Us", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h5 className="text-white font-semibold tracking-wide mb-5">
              Let’s Work Together
            </h5>

            <p className="text-sm mb-3">📍 Dhaka, Bangladesh</p>
            <p className="text-sm mb-3">📞 +880 1304-755851</p>

            <a
              href="#contact"
              className="inline-block mt-4 px-6 py-3 text-sm font-medium rounded-md
        bg-gradient-to-r from-indigo-500 to-sky-500 text-white
        hover:opacity-90 transition"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Boostify Digital. All rights
              reserved.
            </p>
            <p className="text-xs tracking-wide">
              A Digital Agency for Growing Brands
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
