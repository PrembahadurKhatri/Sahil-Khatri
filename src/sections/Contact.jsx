import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiPhone, FiClock, FiCheck, FiAlertCircle, FiArrowRight } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { profile } from "../data/content.js";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, isEmailjsConfigured } from "../config/emailjs.js";

const DETAILS = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    icon: FiPhone,
    label: "Phone / WhatsApp",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  { icon: FiMapPin, label: "Location", value: profile.location, href: profile.mapLinkUrl },
  { icon: FiClock, label: "Hours", value: profile.hours },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState("");

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
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's talk about your project"
          description="I'm selective about projects because I want to do great work, not just collect paychecks. Tell me what you're trying to build, and I'll give you an honest answer about whether I can help. I respond to every message personally within 24 hours."
        />

        <div className="grid gap-8 md:grid-cols-12">
          <div className="flex flex-col gap-3 md:col-span-5">
            {DETAILS.map((detail, i) => (
              <Reveal
                key={detail.label}
                delay={0.05 * i}
                whileHover={{ y: -3 }}
                className="group flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4 transition-colors duration-300 hover:border-accent/50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
                  <detail.icon size={17} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink-faint">{detail.label}</p>
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
            ))}
          </div>

          <Reveal delay={0.1} className="rounded-2xl border border-line bg-surface p-7 md:col-span-7 md:p-9">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <label className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-ink">Your Name</span>
                <input
                  required
                  type="text"
                  name="from_name"
                  placeholder="What should I call you?"
                  className="rounded-lg border border-line bg-base px-4 py-3 text-ink placeholder:text-ink-faint outline-none focus:border-accent"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-ink">Email Address</span>
                <input
                  required
                  type="email"
                  name="from_email"
                  placeholder="Where can I reach you?"
                  className="rounded-lg border border-line bg-base px-4 py-3 text-ink placeholder:text-ink-faint outline-none focus:border-accent"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-ink">What are you trying to build?</span>
                <textarea
                  required
                  rows={5}
                  name="message"
                  placeholder="Tell me about your project and goals..."
                  className="resize-none rounded-lg border border-line bg-base px-4 py-3 text-ink placeholder:text-ink-faint outline-none focus:border-accent"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm">
                <span className="font-medium text-ink">Budget Range (NPR)</span>
                <input
                  type="text"
                  name="budget"
                  placeholder="e.g., NPR 50,000 - 100,000"
                  className="rounded-lg border border-line bg-base px-4 py-3 text-ink placeholder:text-ink-faint outline-none focus:border-accent"
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="shine mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
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

              {status === "error" && (
                <p className="flex items-start gap-2 text-sm text-red-500">
                  <FiAlertCircle size={16} className="mt-0.5 shrink-0" />
                  {errorMessage}
                </p>
              )}
              {status === "sent" && (
                <p className="text-sm text-accent">Thanks for reaching out — I'll get back to you within 24 hours.</p>
              )}
            </form>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="mt-6 overflow-hidden rounded-2xl border border-line">
          <iframe
            title="Location map"
            src={profile.mapEmbedUrl}
            className="h-64 w-full grayscale-[0.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
