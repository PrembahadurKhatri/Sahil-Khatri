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
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading eyebrow="Contact" title="Let's build something great" subtitle="Have a project in mind, or just want to say hi? My inbox is open." />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-border bg-surface/40 p-8">
              <p className="text-balance text-sm leading-relaxed text-ink-muted sm:text-base">{profile.bio}</p>

              <div className="mt-6 flex items-center gap-2 font-mono text-sm text-ink-muted">
                <FiMapPin className="h-4 w-4 text-accent" />
                {profile.location}
              </div>

              <a href={`mailto:${profile.email}`} className="mt-2 block font-mono text-sm text-ink-muted transition-colors hover:text-accent">
                {profile.email}
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {profile.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <MagneticButton
                    key={social.label}
                    as="a"
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={social.label}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent/50 hover:text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                  </MagneticButton>
                );
              })}
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-surface/40 p-8"
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <FiCheckCircle className="h-10 w-10 text-accent" />
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
                    className="w-full rounded-lg border border-border bg-base/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent/60"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-faint">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-base/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent/60"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-ink-faint">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-border bg-base/40 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent/60"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status === "error" && <p className="font-mono text-xs text-red-400">Please fill in every field.</p>}

                <MagneticButton as="button" type="submit" disabled={status === "sending"} className="mt-2 w-full">
                  <span className="flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wide text-base transition-colors hover:bg-accent hover:text-ink disabled:opacity-60">
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
