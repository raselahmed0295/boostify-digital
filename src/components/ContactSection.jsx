import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Send } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const WHATSAPP_NUMBER = "8801304755851"; // Bangladesh with country code

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!form.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // WhatsApp message
    const message = `
New Contact Message

Name: ${form.name}
Phone: ${form.phone}

Message:
${form.message}
    `;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // reset form
    setTimeout(() => {
      setForm({ name: "", phone: "", message: "" });
      setSubmitted(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden
             bg-gradient-to-b from-indigo-50/60 via-white to-purple-50/60"
    >
      {/* Decorative background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-purple-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[320px] w-[320px] rounded-full bg-indigo-200/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 mb-5 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let’s Talk{" "}
            <span className="text-indigo-600">About Your Project</span>
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Share your ideas with us — we’ll reply within 24 hours.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
        bg-white/80 backdrop-blur-xl
        border border-white/50
        rounded-3xl
        p-8 md:p-10
        shadow-[0_20px_60px_-15px_rgba(79,70,229,0.35)]
      "
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium">Your Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full border rounded-lg px-4 py-3"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Phone / WhatsApp</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-2 w-full border rounded-lg px-4 py-3"
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full border rounded-lg px-4 py-3"
              />
              {errors.message && (
                <p className="text-xs text-red-500 mt-1">{errors.message}</p>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone size={16} /> 01304755851
            </div>

            {/* <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 text-white hover:bg-green-700 transition"
            >
              {submitted ? "Opening WhatsApp..." : "Send via WhatsApp"}
              <Send size={18} />
            </button> */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-white"
            >
              {submitted ? "Message Sent" : "Send Message"}
              <Send size={18} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
