import { MessageCircle } from "lucide-react";
import { company } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Comsystem pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.62_0.17_150)] text-white shadow-[0_18px_40px_-12px_oklch(0.62_0.17_150_/_0.7)] transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
