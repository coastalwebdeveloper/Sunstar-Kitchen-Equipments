import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/Logo.webp";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-[var(--line)] bg-[var(--soft-gold)]/30">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[var(--brand-gold)]/30 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[var(--brand-red)]/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Sunstar Kitchen Equipments" className="h-10 w-auto" />
            </div>
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-[var(--mute)]">
              Complete Hotel & Bakery Solution. We manufacture and supply high-quality commercial kitchen equipment for hotels, restaurants, bakeries, and hospitals across Bengaluru.
            </p>
          </div>

          <div>
            <p className="font-grotesk text-xs font-semibold uppercase tracking-widest text-[var(--mute)]">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="underline-gold">Home</Link></li>
              <li><Link to="/about" className="underline-gold">About Us</Link></li>
              <li><Link to="/services" className="underline-gold">Services</Link></li>
              <li><Link to="/projects" className="underline-gold">Gallery</Link></li>
              <li><Link to="/clients" className="underline-gold">Clients</Link></li>
              <li><Link to="/reviews" className="underline-gold">Reviews</Link></li>
              <li><Link to="/contact" className="underline-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-grotesk text-xs font-semibold uppercase tracking-widest text-[var(--mute)]">Reach</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--mute)]">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[var(--brand-red)]" />Smart Works, 11th Main, Pipeline Rd, Bengaluru, Karnataka 560091</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-[var(--brand-red)]" />+91 7259150715</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-[var(--brand-red)]" />sunstarequipments@gmail.com</li>
            </ul>
          </div>

          <div>
            <p className="font-grotesk text-xs font-semibold uppercase tracking-widest text-[var(--mute)]">Start</p>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-red)]">
              Request a quote
            </Link>
            <a href="https://wa.me/917259150715" className="mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-medium transition hover:border-[var(--brand-red)]">
              <MessageCircle className="h-4 w-4 text-[var(--brand-red)]" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--line)] pt-6 md:flex-row md:items-center">
          <p className="font-grotesk text-xs text-[var(--mute)]">© {new Date().getFullYear()} Sunstar Kitchen Equipments. All rights reserved.</p>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <p className="font-grotesk text-xs text-[var(--mute)]">Bengaluru · India</p>
            <p className="font-grotesk text-xs text-[var(--mute)]">
              Designed & Developed by{" "}
              <a 
                href="https://www.dotdesigntech.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline-gold font-medium text-[var(--brand-red)] hover:text-[var(--brand-gold)]"
              >
                Dot Design
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;