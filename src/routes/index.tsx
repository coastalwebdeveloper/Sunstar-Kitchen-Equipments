import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle, Sparkles, ChevronRight, ChefHat, Refrigerator, Wind, Flame, Cross, IceCream, Cake, Zap } from "lucide-react";
import heroImg from "@/assets/Kitchen Equipment for Hotels.webp";
import detailImg from "@/assets/Steel Cutting & Fabrication.webp";
import bakeryImg from "@/assets/Ice Cream Display Counters.webp";
import boilerImg from "@/assets/Steam Boilers.webp";
import exhaustImg from "@/assets/Exhaust Systems.webp";
import restaurantImg from "@/assets/Our Company Profile.webp";
import hotelImg from "@/assets/Kitchen Equipment for Hotels.webp";
import craftImg from "@/assets/Why Businesses Trust Us.webp";
import industriesImg from "@/assets/Industries We Serve.webp";
import govindaBabu from "@/assets/ClientReview/Govinda Babu Poojari-Founder-Chelf Talk Hospitality Services.jpeg";
import nithinKanchan from "@/assets/ClientReview/Nithin_Kanchan-Managing Partner-Udupi Kai Ruchi.jpeg";
import raghavendraKanchan from "@/assets/ClientReview/Raghavendra_Kanchan-Managing Partner-Rajathagiri Palace.jpeg";
import sathyanarayanAmpar from "@/assets/ClientReview/Sathyanarayan Ampar-Managing Partner-Udupi Krishnam Hotel.jpeg";
import { Eyebrow } from "@/components/site/Section";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const services = [
  { t: "Kitchen Equipment for Hotels & Restaurants", n: "01", icon: ChefHat },
  { t: "Commercial Freezers & Display Counters", n: "02", icon: Refrigerator },
  { t: "Fresh Air & Exhaust Systems", n: "03", icon: Wind },
  { t: "Gas Line & Steam Line Installation", n: "04", icon: Flame },
  { t: "Custom SS Works for Hospitals", n: "05", icon: Cross },
  { t: "Ice Cream Display Counters", n: "06", icon: IceCream },
  { t: "Pastry Display Counters", n: "07", icon: Cake },
  { t: "Steam Boilers", n: "08", icon: Zap },
];

const stats = [
  { v: "15+", l: "Years Experience" },
  { v: "500+", l: "Projects Completed" },
  { v: "100+", l: "Happy Clients" },
  { v: "24/7", l: "Support Available" },
];

const process = [
  { step: "Consultation", desc: "Initial site visit and requirement analysis with detailed measurements." },
  { step: "Planning", desc: "Custom layout design and workflow optimization for maximum efficiency." },
  { step: "Design", desc: "3D modeling and technical drawings with material specifications." },
  { step: "Manufacturing", desc: "Precision fabrication using premium SS 304 grade stainless steel." },
  { step: "Installation", desc: "Professional on-site installation with complete system integration." },
  { step: "Quality Testing", desc: "Comprehensive testing and commissioning with performance validation." },
];

const clients = [
  "Taj", "ITC", "Hyatt", "Marriott", "Oberoi", "Leela", "Radisson", "Hilton", "Accor", "Lemon Tree",
];

const clientReviews = [
  {
    name: "Govinda Babu Poojari",
    designation: "Founder",
    company: "Chelf Talk Hospitality Services",
    image: govindaBabu
  },
  {
    name: "Raghavendra Kanchan",
    designation: "Managing Partner",
    company: "Rajathagiri Palace",
    image: raghavendraKanchan
  },
  {
    name: "Nithin Kanchan",
    designation: "Managing Partner",
    company: "Udupi Kai Ruchi",
    image: nithinKanchan
  },
  {
    name: "Sathyanarayan Ampar",
    designation: "Managing Partner",
    company: "Krishnam Udupi Hotel",
    image: sathyanarayanAmpar
  }
];

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative pt-28 md:pt-36">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-[var(--brand-gold)]/25 blur-3xl" />
        <div className="absolute top-40 -left-20 h-96 w-96 rounded-full bg-[var(--brand-red)]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <Eyebrow>Complete Hotel & Bakery Solution · Est. Bengaluru</Eyebrow>
              <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[0.95] tracking-tight md:text-[5.5rem]">
                SUNSTAR <span className="italic font-light text-[var(--brand-red)]">Kitchen</span> 
                <span className="block">Equipments<span className="text-[var(--brand-red)]">.</span></span>
              </h1>
              <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-[var(--mute)] md:text-lg">
                Premier manufacturer and supplier of commercial kitchen equipment in Bengaluru. We provide comprehensive solutions for hotels, restaurants, bakeries, and hospitals with top-quality stainless steel equipment.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3.5 font-grotesk text-sm font-medium text-white transition hover:bg-[var(--brand-red)]">
                  Get Quote Now
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-6 py-3.5 font-grotesk text-sm font-medium backdrop-blur transition hover:border-[var(--ink)]">
                  View Services
                </Link>
                <a href="tel:+917259150715" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-6 py-3.5 font-grotesk text-sm font-medium backdrop-blur transition hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]">
                  Call +91 7259150715
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-luxe">
                  <img src={detailImg} alt="Steel cutting and fabrication" className="h-full w-full object-cover" loading="eager" />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden rounded-2xl glass-strong px-5 py-4 shadow-luxe md:block float-slow">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-[var(--brand-gold)]" />
                    <div>
                      <p className="font-display text-2xl font-semibold leading-none">SS 304</p>
                      <p className="font-grotesk text-xs text-[var(--mute)]">Food-grade steel</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 rounded-full bg-[var(--brand-red)] px-4 py-2 font-grotesk text-xs font-medium text-white shadow-luxe">
                  Made in Bengaluru
                </div>
              </div>
            </div>
          </div>

          {/* HERO IMAGE BAND */}
          <div className="relative mt-16 overflow-hidden rounded-[2rem] shadow-luxe">
            <img src={heroImg} alt="Commercial kitchen equipment for hotels" className="h-[44vh] w-full object-cover md:h-[64vh]" />
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-px bg-white/70 backdrop-blur-md md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l} className="bg-white/60 px-6 py-5 backdrop-blur">
                  <p className="font-display text-3xl font-semibold md:text-4xl">{s.v}</p>
                  <p className="mt-1 font-grotesk text-xs uppercase tracking-widest text-[var(--mute)]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo strip */}
        <div className="relative mt-16 overflow-hidden border-y border-[var(--line)] py-6">
          <div className="marquee flex w-max gap-16 pl-16">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="font-display text-2xl font-light tracking-widest text-[var(--mute)]/60">
                {c.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="relative py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="relative">
                <img src={craftImg} alt="Why businesses trust us" className="rounded-3xl shadow-luxe" loading="lazy" />
                <div className="absolute -right-6 -bottom-6 hidden rounded-2xl glass-strong px-5 py-4 shadow-luxe md:block">
                  <p className="font-display text-3xl font-semibold">15<span className="text-[var(--brand-red)]">+</span></p>
                  <p className="font-grotesk text-xs uppercase tracking-widest text-[var(--mute)]">Years of craft</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 md:pl-8">
              <Eyebrow>Why Choose Sunstar Kitchen Equipments?</Eyebrow>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                With years of experience in
                <span className="text-gradient-brand"> commercial kitchen solutions.</span>
              </h2>
              <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-[var(--mute)]">
                We deliver excellence in every project with high-quality stainless steel equipment manufactured with precision and attention to detail for lasting durability.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Expert Manufacturing", "High-quality stainless steel equipment with precision."],
                  ["Complete Solutions", "Kitchen equipment to exhaust systems under one roof."],
                  ["Timely Delivery", "Professional installation and project completion."],
                  ["24/7 Support", "Dedicated support for all your kitchen needs."],
                ].map(([h, p]) => (
                  <div key={h} className="rounded-2xl border border-[var(--line)] bg-white/60 p-5 backdrop-blur">
                    <p className="font-display text-base font-semibold">{h}</p>
                    <p className="mt-1 font-body text-sm text-[var(--mute)]">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-[var(--soft-gold)]/30 py-24 md:py-32">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Capabilities</Eyebrow>
              <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Our Specialization - Complete Kitchen Solutions.
              </h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)] px-5 py-3 font-grotesk text-sm font-medium transition hover:bg-[var(--ink)] hover:text-white">
              All services <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-4">
            {services.map((s) => {
              const IconComponent = s.icon;
              return (
                <Link
                  to="/services"
                  key={s.t}
                  className="group relative bg-white p-6 transition hover:bg-[var(--soft-red)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-grotesk text-xs uppercase tracking-widest text-[var(--mute)]">/{s.n}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--soft-red)] text-[var(--brand-red)] transition group-hover:bg-[var(--brand-red)] group-hover:text-white">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-6 font-display text-xl font-semibold leading-tight">{s.t}</p>
                  <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-[var(--mute)] transition group-hover:text-[var(--brand-red)]" />
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--brand-red)] transition-all group-hover:w-full" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS — editorial */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>Catalogue</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Featured Products - Premium Quality Equipment.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-12">
            <article className="group relative col-span-12 overflow-hidden rounded-3xl shadow-luxe md:col-span-7">
              <img src={bakeryImg} alt="Ice cream display counters" className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[560px]" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <p className="font-grotesk text-xs uppercase tracking-widest text-white/80">Display</p>
                <p className="mt-1 font-display text-3xl font-semibold text-white">Ice Cream Display Counters</p>
              </div>
            </article>
            <div className="col-span-12 grid gap-6 md:col-span-5">
              <article className="group relative overflow-hidden rounded-3xl shadow-luxe">
                <img src={boilerImg} alt="Steam boilers" className="h-[200px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[270px]" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="font-grotesk text-xs uppercase tracking-widest text-white/80">Thermal</p>
                  <p className="mt-1 font-display text-2xl font-semibold text-white">Steam Boilers</p>
                </div>
              </article>
              <article className="group relative overflow-hidden rounded-3xl shadow-luxe">
                <img src={exhaustImg} alt="Exhaust systems" className="h-[200px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[270px]" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="font-grotesk text-xs uppercase tracking-widest text-white/80">Ventilation</p>
                  <p className="mt-1 font-display text-2xl font-semibold text-white">Exhaust Systems</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS PORTFOLIO */}
      <section className="relative bg-[var(--soft-red)]/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Case studies from the floor.
              </h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 font-grotesk text-sm font-medium text-white transition hover:bg-[var(--brand-red)]">
              View portfolio <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-12">
            {[
              { img: hotelImg, cat: "Hotel", title: "Complete kitchen setup", loc: "Bengaluru", span: "md:col-span-7 h-[420px]" },
              { img: restaurantImg, cat: "Company", title: "Our manufacturing facility", loc: "Bengaluru", span: "md:col-span-5 h-[420px]" },
              { img: bakeryImg, cat: "Bakery", title: "Display & refrigeration", loc: "Bengaluru", span: "md:col-span-5 h-[360px]" },
              { img: industriesImg, cat: "Industries", title: "Sectors we serve", loc: "Karnataka", span: "md:col-span-7 h-[360px]" },
            ].map((p, i) => (
              <article key={i} className={`group relative overflow-hidden rounded-3xl shadow-luxe ${p.span}`}>
                <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                  <div>
                    <p className="font-grotesk text-xs uppercase tracking-widest text-white/80">{p.cat} · {p.loc}</p>
                    <p className="mt-1 font-display text-2xl font-semibold text-white md:text-3xl">{p.title}</p>
                  </div>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white/90 transition group-hover:bg-[var(--brand-red)]">
                    <ArrowUpRight className="h-4 w-4 text-[var(--ink)] transition group-hover:text-white" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>Engineering process</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            From first sketch to final commissioning.
          </h2>

          <div className="mt-14 relative">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent md:block" />
            <ol className="grid gap-8 md:gap-6 md:grid-cols-6">
              {process.map((item, i) => (
                <li key={item.step} className="relative flex items-start gap-4 md:block">
                  <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full border-2 border-[var(--brand-red)] bg-gradient-to-br from-[var(--brand-red)] to-[var(--brand-gold)] font-display text-sm font-bold text-white shadow-luxe">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 md:mt-5">
                    <p className="font-display text-lg font-semibold">{item.step}</p>
                    <p className="mt-2 font-body text-sm leading-relaxed text-[var(--mute)]">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CLIENT REVIEWS WITH PHOTOS */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <Eyebrow>Client Reviews</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Trusted by Industry <span className="italic font-light text-[var(--brand-red)]">Leaders</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-[var(--mute)]">
              Our valued clients from hospitality and restaurant industry who trust Sunstar Kitchen Equipments for their commercial kitchen needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {clientReviews.map((client, i) => (
              <div key={i} className="group text-center">
                <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full shadow-luxe transition group-hover:-translate-y-2">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className={`h-full w-full transition duration-700 group-hover:scale-110 ${
                      client.name === "Raghavendra Kanchan" 
                        ? "object-cover object-top" 
                        : "object-cover object-center"
                    }`}
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <h3 className="font-display text-lg font-semibold">{client.name}</h3>
                <p className="mt-1 font-grotesk text-sm text-[var(--brand-red)]">{client.designation}</p>
                <p className="mt-1 font-grotesk text-xs text-[var(--mute)]">{client.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--soft-red)] via-white to-[var(--soft-gold)]" />
        <div className="absolute -top-20 left-1/4 h-[28rem] w-[28rem] rounded-full bg-[var(--brand-red)]/15 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-[28rem] w-[28rem] rounded-full bg-[var(--brand-gold)]/30 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Eyebrow>Let's build</Eyebrow>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
            Ready to Transform
            <span className="block italic font-light text-[var(--brand-red)]">Your Kitchen?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-[var(--mute)]">
            Get in touch with our experts for a free consultation and quote. We're here to help you create the perfect commercial kitchen solution.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-4 font-grotesk text-sm font-medium text-white transition hover:bg-[var(--brand-red)]">
              Get Detailed Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href="tel:+917259150715" className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)] bg-white/80 px-6 py-4 font-grotesk text-sm font-medium backdrop-blur transition hover:bg-[var(--ink)] hover:text-white">
              +91 7259150715
            </a>
            <a href="https://wa.me/917259150715" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-6 py-4 font-grotesk text-sm font-medium backdrop-blur transition hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]">
              <MessageCircle className="h-4 w-4" /> Send Message
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default HomePage;
