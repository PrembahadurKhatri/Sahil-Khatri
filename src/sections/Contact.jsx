import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiMapPin, FiSend } from "react-icons/fi";
import { profile } from "../data/content.js";
import SectionHeading from "../components/SectionHeading.jsx";
import MagneticButton from "../components/MagneticButton.jsx";

const EMPTY_FORM = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    // Static site, no backend — simulates a real submission. Wire this up
    // to a form service (Formspree, Resend, EmailJS, ...) or your own API
    // when you're ready to actually receive these.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
    setForm(EMPTY_FORM);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading eyebrow="Contact" title="Let's build something great" subtitle="Have a project in mind, or just want to say hi? My inbox is open." />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: info + decorative rotating globe */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64"
            >
              <motion.div
                className="absolute inset-0 rounded-full border border-electric/30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 18px, rgb(var(--color-electric) / 0.12) 19px), repeating-linear-gradient(90deg, transparent, transparent 18px, rgb(var(--color-violet) / 0.12) 19px)",
                  borderRadius: "9999px",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-electric/20 via-violet/15 to-cyan/20 shadow-glow" />
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan shadow-glow-cyan" />
              </motion.div>
            </motion.div>

            <div className="flex items-center justify-center gap-2 font-mono text-sm text-ink-muted lg:justify-start">
              <FiMapPin className="h-4 w-4 text-cyan" />
              {profile.location}
            </div>

            <div className="flex justify-center gap-4 lg:justify-start">
              {profile.socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <MagneticButton
                    key={social.label}
                    as="a"
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={social.label}
                    className="animate-float"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/60 text-ink-muted backdrop-blur-xl transition-colors hover:border-electric/50 hover:text-electric">
                      <Icon className="h-4 w-4" />
                    </span>
                  </MagneticButton>
                );
              })}
            </div>
          </div>

          {/* Right: glass form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass flex flex-col gap-5 rounded-3xl p-8 shadow-card"
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <FiCheckCircle className="h-10 w-10 text-cyan" />
                <p className="font-display text-lg font-semibold">Message sent — thank you!</p>
                <p className="text-sm text-ink-muted">I'll get back to you as soon as I can.</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-faint">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-base/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-electric/60"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-faint">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-base/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-electric/60"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-faint">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-border bg-base/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-electric/60"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status === "error" && <p className="font-mono text-xs text-red-400">Please fill in every field.</p>}

                <MagneticButton as="button" type="submit" disabled={status === "sending"} className="mt-2 w-full">
                  <span className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wide text-base transition-transform hover:scale-[1.02] disabled:opacity-60">
                    {status === "sending" ? "Sending..." : "Send Message"}
                    {status !== "sending" && <FiSend className="h-3.5 w-3.5" />}
                  </span>
                </MagneticButton>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
