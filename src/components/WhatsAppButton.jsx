import { FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/content.js";

export default function WhatsAppButton() {
  const message = encodeURIComponent(`Hi ${profile.name}, I found your portfolio and would like to connect.`);
  const href = `https://wa.me/${profile.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 md:bottom-6 md:right-6 md:h-14 md:w-14 items-center justify-center rounded-full text-white transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: "linear-gradient(150deg, #5ef08f 0%, #25D366 45%, #128C4A 100%)",
        boxShadow:
          "inset 0 1px 0 rgb(255 255 255 / 0.55), inset 0 -3px 6px rgb(0 0 0 / 0.25), 0 12px 28px -8px rgb(37 211 102 / 0.75)",
      }}
    >
      <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-1.5 top-1 h-1/2 rounded-t-full"
        style={{ background: "linear-gradient(180deg, rgb(255 255 255 / 0.4), transparent)" }}
      />
      <FaWhatsapp size={25} className="relative" style={{ filter: "drop-shadow(0 1px 1.5px rgb(0 0 0 / 0.35))" }} />
    </a>
  );
}
