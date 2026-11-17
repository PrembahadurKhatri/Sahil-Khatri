import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiCheck, FiAlertCircle, FiArrowRight } from "react-icons/fi";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";
import IconTile from "../components/IconTile.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { useSpotlight } from "../hooks/useSpotlight.js";
import { profile } from "../data/content.js";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, isEmailjsConfigured } from "../config/emailjs.js";

const DETAILS = [
  { icon: FaEnvelope, color: "#EA4335", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: FaWhatsapp,
    color: "#25D366",
    label: "Phone / WhatsApp",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  { icon: FaMapMarkerAlt, color: "#3E63DD", label: "Location", value: profile.location, href: profile.mapLinkUrl },
  { icon: FaClock, color: "gold", label: "Hours", value: profile.hours },
];

function DetailRow({ detail, delay }) {
  const spotlight = useSpotlight();

  return (
    <Reveal
      ref={spotlight.ref}
      onMouseMove={spotlight.onMouseMove}
      delay={delay}
      whileHover={{ y: -3 }}
      className="card-premium spotlight group flex items-center gap-4 rounded-2xl px-4 py-4"
    >
      <IconTile icon={detail.icon} color={detail.color} size="md" />

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{detail.label}</p>
        {detail.href ? (
          <a
            href={detail.href}
            target={detail.href.startsWith("http") ? "_blank" : undefined}
            rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
            className="text-sm font-medium text-ink hover:text-accent"
          >
            {detail.value}
          </a>
        ) : (
          <p className="text-sm font-medium text-ink">{detail.value}</p>
        )}
      </div>
    </Reveal>
  );
}

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState("");
  const formSpotlight = useSpotlight();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailjsConfigured) {
      setStatus("error");
      setErrorMessage("Email sending isn't set up yet — add your EmailJS keys in src/config/emailjs.js.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("sent");
      formRef.current?.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong sending that. Please try emailing me directly instead.");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's talk about your project"
          description="I'm selective about projects because I want to do great work, not just collect paychecks. Tell me what you're trying to build, and I'll give you an honest answer about whether I can help. I respond to every message personally within 24 hours."
        />

        <div className="grid gap-8 md:grid-cols-12">
          <div className="flex flex-col gap-3 md:col-span-5">
            {DETAILS.map((detail, i) => (
              <DetailRow key={detail.label} detail={detail} delay={0.05 * i} />
            ))}

            <Reveal
              delay={0.2}
              className="card-premium mt-1 overflow-hidden rounded-3xl p-1.5"
            >
              <iframe
                title="Location map"
                src={profile.mapEmbedUrl}
                className="h-56 w-full rounded-[1.25rem] grayscale-[0.2]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </Reveal>
          </div>

          <Reveal
            ref={formSpotlight.ref}
            onMouseMove={formSpotlight.onMouseMove}
            delay={0.1}
            className="card-premium spotlight rounded-3xl p-7 md:col-span-7 md:p-10"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <label className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-ink">Your Name</span>
                <input
                  required
                  type="text"
                  name="from_name"
                  placeholder="What should I call you?"
                  className="rounded-xl border border-line bg-base/60 px-4 py-3.5 text-ink placeholder:text-ink-faint outline-none transition-all duration-200 focus:border-gold/70 focus:bg-base focus:shadow-[0_0_0_4px_rgb(var(--color-gold)/0.12)]"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-ink">Email Address</span>
                <input
                  required
                  type="email"
                  name="from_email"
                  placeholder="Where can I reach you?"
                  className="rounded-xl border border-line bg-base/60 px-4 py-3.5 text-ink placeholder:text-ink-faint outline-none transition-all duration-200 focus:border-gold/70 focus:bg-base focus:shadow-[0_0_0_4px_rgb(var(--color-gold)/0.12)]"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-ink">What are you trying to build?</span>
                <textarea
                  required
                  rows={5}
                  name="message"
                  placeholder="Tell me about your project and goals..."
                  className="resize-none rounded-xl border border-line bg-base/60 px-4 py-3.5 text-ink placeholder:text-ink-faint outline-none transition-all duration-200 focus:border-gold/70 focus:bg-base focus:shadow-[0_0_0_4px_rgb(var(--color-gold)/0.12)]"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-ink">Budget Range (NPR)</span>
                <input
                  type="text"
                  name="budget"
                  placeholder="e.g., NPR 50,000 - 100,000"
                  className="rounded-xl border border-line bg-base/60 px-4 py-3.5 text-ink placeholder:text-ink-faint outline-none transition-all duration-200 focus:border-gold/70 focus:bg-base focus:shadow-[0_0_0_4px_rgb(var(--color-gold)/0.12)]"
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary shine mt-2 w-full py-4 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sent" ? (
                  <>
                    <FiCheck size={16} /> Message Sent
                  </>
                ) : status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <FiArrowRight size={16} />
                  </>
                )}
              </button>

              <AnimatePresence mode="wait">
                {status === "error" && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-start gap-2 text-sm text-red-500"
                  >
                    <FiAlertCircle size={16} className="mt-0.5 shrink-0" />
                    {errorMessage}
                  </motion.p>
                )}
                {status === "sent" && (
                  <motion.p
                    key="sent"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="text-sm text-accent"
                  >
                    Thanks for reaching out — I'll get back to you within 24 hours.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
