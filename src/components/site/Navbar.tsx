import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/Logo.webp";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Gallery" },
  { to: "/clients", label: "Clients" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-2 sm:px-4 md:top-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-2 py-2.5 transition-all sm:px-4 sm:py-3 md:px-6 ${
          scrolled ? "glass-strong shadow-luxe" : "glass"
        }`}
      >
        <Link to="/" className="flex items-center gap-1 shrink-0">
          <img src={logo} alt="Sunstar Kitchen Equipments" className="h-9 w-auto sm:h-10 md:h-12" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="group relative rounded-full px-4 py-2 font-grotesk text-sm font-medium text-[var(--ink)]/70 transition hover:text-[var(--ink)]"
              >
                <span className="underline-gold">{l.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://wa.me/917259150715"
            target="_blank"
            rel="noopener"
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-[var(--ink)] transition hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-[var(--ink)] px-5 py-2.5 font-grotesk text-sm font-medium text-white transition hover:bg-[var(--brand-red)]"
          >
            Call Now
          </Link>
        </div>

        <button
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--line)] md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-2 mt-2 rounded-3xl glass-strong p-3 shadow-luxe sm:mx-4 sm:p-4 md:mx-auto md:max-w-6xl lg:hidden reveal">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-3 py-2.5 font-grotesk text-sm font-medium hover:bg-[var(--soft-red)] sm:px-4 sm:py-3"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-2xl bg-[var(--ink)] px-3 py-2.5 text-center font-grotesk text-sm font-medium text-white sm:px-4 sm:py-3"
              >
                Call Now
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/917259150715"
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl border border-[var(--line)] px-3 py-2.5 font-grotesk text-sm font-medium hover:bg-[var(--soft-red)] sm:px-4 sm:py-3"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;