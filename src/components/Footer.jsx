import React from "react";
import logoImg from "../assets/boostify_digitals.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";

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
              <a
                href="https://www.facebook.com/boostifydigitalsbd"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Boostify Digital Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/boostifydigital"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Boostify Digital Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/boostifydigital"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Boostify Digital LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-semibold tracking-wide mb-5">
              Services
            </h5>

            <ul className="space-y-3 text-sm">
              {[
                {
                  label: "Premium Single-Page Website",
                  link: "#single-page-website",
                },
                {
                  label: "Small or Local Business Website",
                  link: "#business-website",
                },
                {
                  label: "Full E-commerce Website",
                  link: "#ecommerce-website",
                },
                { label: "Facebook Page Setup", link: "#facebook-page" },
                { label: "Boosting & Management", link: "#boosting" },
                {
                  label: "Pro Youtube Channel & Video Editing",
                  link: "#youtube",
                },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="block hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    {item.label}
                  </a>
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
              {[
                { label: "About Us", link: "#about" },
                { label: "Our Services", link: "#services" },
                { label: "Why Choose Us", link: "#chouse" },
                { label: "Contact", link: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="block hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h5 className="text-white font-semibold tracking-wide mb-5">
              Let’s Work Together
            </h5>

            <p className="text-sm mb-3">📍 Dhaka, Bangladesh</p>
            <p className="text-sm mb-3">📞 +880 1867 677 350</p>

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
