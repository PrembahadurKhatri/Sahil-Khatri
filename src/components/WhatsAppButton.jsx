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
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
