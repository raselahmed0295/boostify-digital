import React from "react";
import { motion } from "framer-motion";
import {
  PenLine,
  Layers,
  MessageCircle,
  Server,
  Facebook,
  BarChart3,
  ArrowRight,
  Youtube,
  Handshake,
  ShoppingBag,
  PanelsTopLeft,
} from "lucide-react";

const SERVICES_DATA = [
  {
    id: 1,
    icon: PanelsTopLeft,
    title: "Premium Single-Page Website",
    price: "৳9,000 – ৳12,000",
    shortDesc:
      "A single-page website with clear branding, a conversion-focused hero, a clean services section, and a custom contact form—launch your business, capture leads, and build trust.",
    features: [
      "Single page layout",
      "Mobile-first & All devices are Responsive",
      "Fast loading & SEO friendly",
      "Custom contact form",
      "Modern UI with CTA",
      "On-page SEO (meta, headings)",
    ],
    bundle: "2-3 round of design revision",
    trustText: "Perfect for startups • Fast launch • Conversion focused",
    addons: [
      {
        title: "Content Writing (Short)",
        price: "৳ 2,500",
        icon: "pen",
      },

      {
        title: "Form → CRM / WhatsApp Integration",
        price: "৳ 2,000",
        icon: "whatsapp",
      },
      {
        title: "Hosting + Domain Setup",
        price: "৳ 2,000",
        note: "Yearly hosting & domain cost separate",
        icon: "server",
      },
    ],
  },
  {
    id: 2,
    icon: Handshake,
    title: "Small Business Website",
    price: "Starting from ৳15,000",
    shortDesc:
      "A complete small business website with dedicated pages for services, about, and contact, plus a clear brand story—designed to build trust and generate consistent leads.",
    features: [
      "3–4 custom pages (Home, Services, About, Contact)",
      "Professional navbar & footer design",
      "Lead-focused layout",
      "Mobile-responsive, fast & SEO-ready",
      "Contact form + Google Map integration",
    ],
    bundle: "Bonus WhatsApp integration",
    trustText: "Trusted by growing businesses • Lead-focused design",
    addons: [
      {
        title: "Extra page",
        price: "৳ 2,500",
        icon: "pen",
      },
      {
        title: "Content Writing (Short)",
        price: "৳ 3,500",
        icon: "pen",
      },

      {
        title: "Hosting + Domain Setup",
        price: "৳ 2,000",
        note: "Yearly hosting & domain cost separate",
        icon: "server",
      },
      {
        title: "Google Analytics setup",
        price: "৳ 1,500",
        icon: "popup",
      },
    ],
  },
  {
    id: 3,
    icon: ShoppingBag,
    title: "Full E-commerce Website",
    price: "Starting from ৳35,000",
    shortDesc:
      "A complete online store with product management, order processing, and a payment-ready setup—professionally built for small and medium-sized businesses.",
    features: [
      "Product listing & category system",
      "Shop/Product and Prodduct details page",
      "Shopping cart & checkout",
      "Order management dashboard",
      "Mobile-responsive & SEO-ready",
      "Secure contact & inquiry forms",
    ],
    bundle: "Bonus WhatsApp integration & Unlimited revision",
    trustText: "• Best for business • Secure • Scalable • Payment-ready store",
    addons: [
      {
        title: "Online payment gateway setup",
        price: "৳ 5,500",
        icon: "pen",
      },
      {
        title: "Product upload (per 20)",
        price: "৳ 2,000",
        icon: "popup",
      },

      {
        title: "Hosting + Domain Setup",
        price: "৳ 2,500",
        note: "Yearly hosting & domain cost separate",
        icon: "server",
      },
      {
        title: "Delivery charge system",
        price: "৳ 3,500",
        icon: "server",
      },
      {
        title: "Maintenance (monthly)",
        price: "৳ 3,000",
        icon: "server",
      },
    ],
  },
  {
    id: 4,
    icon: Facebook,
    title: "FB Page Pro Setup & Management",
    price: "Starting from ৳5,000",
    shortDesc:
      "Professional Facebook Page setup with branded cover & profile, first five posts, contact setup, instant reply configuration, and basic ongoing management to boost credibility and engagement.",
    features: [
      "Professional FB Page setup / Optimization",
      "Profile & cover design",
      "About, services & contact setup",
      "Related first five posts ready",
      "Weekly post management (basic)",
    ],
    bundle:
      "Any Facebook Page setup content changes are allowed within 1 month.",
    trustText:
      "Ideal for small businesses starting their Facebook presence professionally",
    addons: [
      {
        title: "Boost post setup",
        price: "৳ 1,500",
        icon: "pen",
      },
      {
        title: "Ad account setup",
        price: "৳ 2,000",
        icon: "popup",
      },

      {
        title: "Reels creation (per 5)",
        price: "৳ 2,500",
        icon: "server",
      },
      {
        title: "Monthly content calendar",
        price: "৳ 2,000",
        icon: "server",
      },
    ],
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Social Media Boosting Services",
    price: "৳5,000 / month",
    shortDesc:
      "Helps your brand grow quickly on social media with organic and paid strategies, precise audience targeting, and engagement-boosting tactics for meaningful online impact.",
    features: [
      "Targeted audience growth & engagement",
      "Organic reach optimization",
      "Paid ad campaign setup (optional add-on)",
      "Weekly post & engagement tracking",
      "Analytics & insights reporting",
    ],
    bundle:
      "A complete strategy for Facebook Page and Group growth will be provided.",
    trustText:
      "Ideal for businesses aiming to boost their social media presence fast and professionally.",
    addons: [
      {
        title: "Instagram Reels / Short Videos (8 Videos/month)",
        price: "৳ 4,000",
        icon: "pen",
      },
      {
        title: "Competitor Analysis Report",
        price: "৳ 2,000",
        icon: "popup",
      },

      {
        title: "Social media post design (10 Design / month)",
        price: "৳ 3,000",
        icon: "server",
      },
      {
        title: "Monthly Full page Maintenance",
        price: "৳ 5,000",
        icon: "server",
      },
    ],
  },
  {
    id: 6,
    icon: Youtube,
    title: "Pro YouTube Channel & Video Editing",
    price: "Starting from ৳6,500",
    shortDesc:
      "Professional YouTube channel setup with 2–3 high-quality video edits—perfect for small businesses or personal brands looking to grow online presence.",
    features: [
      "Full YouTube channel setup & optimization",
      "2 professionally edited videos (intro/outro, basic effects)",
      "Channel branding (logo, banner, thumbnails)",
      "SEO optimized video titles & descriptions",
      "Channel tips for growth & engagement",
    ],
    bundle: "Bonus 3 edited videos",
    trustText:
      "Perfect for personal brands and small businesses ready to start their YouTube journey professionally.",
    addons: [
      {
        title: "Extra video editing (per video/ length 15 min below)",
        price: "৳ 1,000",
        icon: "pen",
      },
      {
        title: "Custom thumbnails (per 10)",
        price: "৳ 2,000",
        icon: "popup",
      },

      {
        title: "YouTube SEO + tag research",
        price: "৳ 3,000",
        icon: "server",
      },
      {
        title: "Channel consultation / strategy",
        price: "৳ 3,500",
        icon: "server",
      },
    ],
  },
];

const Service = ({ icon: Icon, title, price, children }) => {
  return (
    <div>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="group relative rounded-2xl border border-white/40 bg-white/70 backdrop-blur-xl p-8 shadow-sm hover:shadow-xl transition"
      >
        {/* Icon */}
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
          <Icon size={22} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>

        {/* Price */}
        <div className="mb-4">
          <span className="inline-block text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {price}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-sm">{children}</p>

        {/* Hover Accent */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-indigo-300/40 transition"></div>
      </motion.div>
    </div>
  );
};
const ADDON_ICONS = {
  pen: PenLine,
  popup: Layers,
  whatsapp: MessageCircle,
  server: Server,
};

export default function ServicesSection() {
  const [activeService, setActiveService] = React.useState(null);

  React.useEffect(() => {
    if (activeService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeService]);

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block px-4 py-1 mb-5 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Designed to <span className="text-indigo-600">Drive Results</span>
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Premium digital solutions for local businesses — fast launch, clear
            strategy and measurable growth.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {SERVICES_DATA.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              onClick={() => setActiveService(service)}
              className="cursor-pointer"
            >
              <Service
                icon={service.icon}
                title={service.title}
                price={service.price}
              >
                {service.shortDesc}
              </Service>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust + CTA */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500 mb-6">
            Trusted by local businesses • 48h delivery • Transparent pricing
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl transition"
          >
            Book a Free Consultation
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              relative max-w-2xl w-full rounded-3xl
              bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600
              text-white shadow-2xl
              h-[85vh] overflow-hidden
            "
          >
            {/* Close */}
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white text-xl z-10"
            >
              ✕
            </button>

            {/* Scroll Area */}
            <div className="modal-scroll h-full overflow-y-auto px-8 py-8 scroll-smooth">
              {/* Title */}
              <h3 className="text-3xl font-bold mb-3">{activeService.title}</h3>

              {/* Short Description */}
              <p className="text-white/90 mb-6 leading-relaxed">
                {activeService.shortDesc}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {activeService.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bundle */}
              <div className="mb-6 rounded-xl bg-white/10 px-4 py-3 text-sm">
                🎁 <strong>Bonus:</strong> {activeService.bundle}
              </div>

              {/* Add-ons / Upsells */}
              {activeService.addons && (
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">
                    Optional Add-ons
                  </h4>

                  <div className="space-y-3">
                    {activeService.addons.map((addon, i) => {
                      const Icon = ADDON_ICONS[addon.icon];

                      return (
                        <div
                          key={i}
                          className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3"
                        >
                          <div className="mt-1 text-white">
                            <Icon size={18} />
                          </div>

                          <div className="flex-1">
                            <p className="text-sm font-medium">{addon.title}</p>
                            {addon.note && (
                              <p className="text-xs text-white/70">
                                {addon.note}
                              </p>
                            )}
                          </div>

                          <span className="text-sm font-semibold">
                            {addon.price}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CTA */}
              <a
                href="#contact"
                onClick={() => setActiveService(null)}
                className="inline-flex items-center justify-center w-full rounded-xl
          bg-white text-indigo-600 font-semibold py-4
          hover:bg-gray-100 transition"
              >
                Book This Package
              </a>

              {/* Trust Copy */}
              {activeService.trustText && (
                <p className="mt-5 text-xs text-white/70 text-center">
                  {activeService.trustText}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
