import { Link } from "@tanstack/react-router";
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
    <header className="fixed left-0 right-0 top-4 z-50 px-4 md:top-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 transition-all md:px-6 ${
          scrolled ? "glass-strong shadow-luxe" : "glass"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Sunstar Kitchen Equipments" className="h-9 w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="group relative rounded-full px-4 py-2 font-grotesk text-sm font-medium text-[var(--ink)]/70 transition hover:text-[var(--ink)]"
                activeProps={{ className: "text-[var(--ink)]" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {({ isActive }) => (
                  <>
                    <span className="underline-gold">{l.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--brand-red)]" />
                    )}
                  </>
                )}
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
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl glass-strong p-4 shadow-luxe lg:hidden reveal">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-grotesk font-medium hover:bg-[var(--soft-red)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-2xl bg-[var(--ink)] px-4 py-3 text-center font-grotesk font-medium text-white"
              >
                Call Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
