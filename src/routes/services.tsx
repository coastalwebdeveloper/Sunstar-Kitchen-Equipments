import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Eyebrow } from "@/components/site/Section";
import { ArrowUpRight } from "lucide-react";
import kitchenEquipment from "@/assets/Kitchen Equipment for Hotels.webp";
import freezers from "@/assets/Commercial Freezers & Chillers.webp";
import exhaustSystems from "@/assets/Fresh Air & Exhaust Systems.webp";
import gasLine from "@/assets/Gas Line & Steam Line Installation.webp";
import hospitalSS from "@/assets/Custom SS Works for Hospitals.webp";
import iceCreamDisplay from "@/assets/Ice Cream Display Counters.webp";
import pastryDisplay from "@/assets/Pastry Display Counters.webp";
import steamBoilers from "@/assets/Steam Boilers.webp";
import bakeryEquipment from "@/assets/Bakery Equipment.webp";
import displayCounters from "@/assets/Display Counters (Various Types).webp";
import glassCounters from "@/assets/Glass Counters.webp";
import hotCounters from "@/assets/Hot Counters & Chat Counters.webp";
import koreanDisplay from "@/assets/Korean Display Counters.webp";
import koreanTables from "@/assets/SS Chairs & Korean Tables.webp";
import ovens from "@/assets/Ovens & Cake Mixers.webp";
import utility from "@/assets/Utility Equipment.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sunstar Kitchen Equipments" },
      { name: "description", content: "Hotel kitchens, bakery equipment, exhaust systems, steam boilers, display counters, gas pipelines and custom SS fabrication." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { n: "01", t: "Kitchen Equipment for Hotels & Restaurants", img: kitchenEquipment, d: "Complete range of professional kitchen equipment including cooking ranges, ovens, grills, and preparation stations designed specifically for hotel operations." },
  { n: "02", t: "Commercial Freezers & Display Counters", img: freezers, d: "Energy-efficient refrigeration solutions including walk-in coolers, blast chillers, and display freezers for food storage and preservation." },
  { n: "03", t: "Fresh Air & Exhaust Systems", img: exhaustSystems, d: "Advanced ventilation solutions including exhaust hoods, fresh air systems, and ducting to maintain optimal air quality and safety in commercial kitchens." },
  { n: "04", t: "Gas Line & Steam Line Installation", img: gasLine, d: "Professional installation of gas lines and steam distribution systems with safety valves, regulators, and monitoring systems for commercial kitchen operations." },
  { n: "05", t: "Custom SS Works for Hospitals", img: hospitalSS, d: "Specialized stainless steel fabrication for hospitals and healthcare facilities including medical equipment stands, surgical tables, and hygiene stations." },
  { n: "06", t: "Ice Cream Display Counters", img: iceCreamDisplay, d: "Attractive and efficient display counters for ice cream parlors, restaurants, and cafes with precise temperature control and energy-saving features." },
  { n: "07", t: "Pastry & Sweet Display Counters", img: pastryDisplay, d: "Elegant showcase counters for bakeries and sweet shops with humidity control, LED lighting, and temperature management for optimal product display." },
  { n: "08", t: "Steam Boilers", img: steamBoilers, d: "High-efficiency steam boilers for cooking, heating, and sterilization applications in hotels, restaurants, and food processing facilities." },
  { n: "09", t: "Bakery Equipment", img: bakeryEquipment, d: "Complete bakery solutions including dough mixers, proofers, display units, and specialized baking equipment for commercial bakeries." },
  { n: "10", t: "Display Counters (Various Types)", img: displayCounters, d: "Wide range of display counters including straight glass, curved glass, and custom configurations for different food service applications." },
  { n: "11", t: "Glass Counters", img: glassCounters, d: "Premium glass display counters for showcasing food items, desserts, and beverages with elegant design and superior functionality." },
  { n: "12", t: "Hot Counters & Chat Counters", img: hotCounters, d: "Specialized food warming and serving counters for street food, chat items, and hot food service with temperature control systems." },
  { n: "13", t: "Korean Display Counters", img: koreanDisplay, d: "Specialized display counters designed for Korean cuisine presentation with precise temperature control and authentic design elements." },
  { n: "14", t: "SS Chairs & Korean Tables", img: koreanTables, d: "Durable stainless steel seating solutions and Korean-style dining tables designed for commercial restaurant and hotel dining areas." },
  { n: "15", t: "Ovens & Cake Mixers", img: ovens, d: "Professional baking equipment including convection ovens, deck ovens, and high-capacity mixers for bakeries and pastry operations." },
  { n: "16", t: "Utility Equipment", img: utility, d: "Essential kitchen utilities including trolleys, steam vessels, plate warmers, and mobile serving stations for efficient kitchen operations." },
];

function ServicesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Capabilities"
        title={<>Our Services & <span className="italic font-light text-[var(--brand-red)]">Products</span>.</>}
        subtitle="Comprehensive commercial kitchen solutions for hotels, restaurants, bakeries, and hospitals with complete manufacturing and installation services."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="space-y-24">
          {services.map((s, i) => (
            <article key={s.n} className="grid items-center gap-8 md:gap-10 md:grid-cols-12">
              <div className={`md:col-span-6 ${i % 2 ? "md:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-luxe md:aspect-auto">
                  <img src={s.img} alt={s.t} className="h-full w-full object-cover transition duration-700 hover:scale-105 md:h-[420px]" loading="lazy" />
                </div>
              </div>
              <div className={`md:col-span-6 ${i % 2 ? "md:order-1 md:pr-10" : "md:pl-10"}`}>
                <span className="font-grotesk text-xs uppercase tracking-widest text-[var(--brand-red)]">/{s.n}</span>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight md:text-4xl lg:text-6xl">{s.t}</h2>
                <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-[var(--mute)] md:text-lg">{s.d}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {["Design", "Fabricate", "Install", "Service"].map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 font-grotesk text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 font-grotesk text-sm font-medium underline-gold">
                  Discuss this service <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
