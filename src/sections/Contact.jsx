import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiCheck, FiArrowUpRight } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { profile } from "../data/content.js";

const FIELDS = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: FiMapPin, label: "Location", value: profile.location, href: profile.mapLinkUrl },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Static site — no backend to send to yet. Simulated success for now;
    // wire this up to Formspree / Resend / EmailJS / your own API.
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Have a project in mind, or just want to say hello? My inbox is open."
        />

        <div className="grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7 rounded-2xl border border-line bg-surface p-7 md:p-9">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-ink-muted">Name</span>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="rounded-lg border border-line bg-base px-4 py-3 text-ink placeholder:text-ink-faint outline-none focus:border-accent"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-ink-muted">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="rounded-lg border border-line bg-base px-4 py-3 text-ink placeholder:text-ink-faint outline-none focus:border-accent"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-ink-muted">Message</span>
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about what you're building..."
                  className="resize-none rounded-lg border border-line bg-base px-4 py-3 text-ink placeholder:text-ink-faint outline-none focus:border-accent"
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {status === "sent" ? (
                  <>
                    <FiCheck size={16} /> Message Sent
                  </>
                ) : status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <FiArrowUpRight size={16} />
                  </>
                )}
              </button>
            </form>
          </Reveal>

          <div className="md:col-span-5 flex flex-col gap-6">
            <Reveal delay={0.06} className="rounded-2xl border border-line bg-surface p-7 md:p-9">
              <ul className="flex flex-col gap-6">
                {FIELDS.map((field) => (
                  <li key={field.label} className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <field.icon size={16} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest2 text-ink-faint">{field.label}</p>
                      <a
                        href={field.href}
                        target={field.label === "Location" ? "_blank" : undefined}
                        rel={field.label === "Location" ? "noreferrer" : undefined}
                        className="text-sm font-medium text-ink hover:text-accent"
                      >
                        {field.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex gap-3 border-t border-line pt-6">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted hover:border-accent hover:text-accent transition-colors"
                  >
                    <social.icon size={15} />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Location map"
                src={profile.mapEmbedUrl}
                className="h-56 w-full grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
