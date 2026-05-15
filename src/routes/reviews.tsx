import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { Star, PlayCircle } from "lucide-react";
import companyProfile from "@/assets/Our Company Profile.webp";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Sunstar Kitchen Equipments" },
      { name: "description", content: "What chefs, owners and architects say about working with Sunstar." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { n: "Rajesh Kumar", r: "Hotel Manager", l: "Bengaluru", t: "Hotel Kitchen", s: 5,
    body: "Sunstar Kitchen Equipments delivered exceptional quality for our hotel kitchen. The installation was professional and completed on time. Highly recommended!" },
  { n: "Priya Sharma", r: "Owner", l: "Bengaluru", t: "Bakery Display", s: 5,
    body: "The display counters they provided for our bakery are absolutely beautiful. The LED lighting and temperature control are perfect for showcasing our products." },
  { n: "Chef Anand", r: "Head Chef", l: "Bengaluru", t: "Restaurant Kitchen", s: 5,
    body: "Working with Sunstar was a great experience. They understood our kitchen workflow requirements and delivered exactly what we needed. Excellent craftsmanship!" },
  { n: "Dr. Meera", r: "Hospital Administrator", l: "Bengaluru", t: "Hospital Kitchen", s: 5,
    body: "The stainless steel work for our hospital kitchen meets all hygiene standards. Professional team and quality installation. Very satisfied with their service." },
  { n: "Suresh Reddy", r: "Restaurant Owner", l: "Bengaluru", t: "Commercial Kitchen", s: 5,
    body: "From gas line installation to exhaust systems, everything was handled professionally. The kitchen operates efficiently and the equipment quality is excellent." },
  { n: "Kavitha", r: "Cafe Owner", l: "Bengaluru", t: "Display Counter", s: 5,
    body: "The ice cream display counter has been working perfectly for over 2 years. Great temperature control and energy efficiency. Excellent after-sales support too." },
];

function ReviewsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Customer reviews"
        title={<>What our <span className="italic font-light text-[var(--brand-red)]">clients</span> say about us.</>}
        subtitle="Real reviews from satisfied customers who trust Sunstar Kitchen Equipments for their commercial kitchen needs."
      />
      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-4">
          {[["4.9", "Average rating"], ["100+", "Happy clients"], ["98%", "Would recommend"], ["15+", "Years experience"]].map(([v, l]) => (
            <div key={l} className="bg-white p-8">
              <p className="font-display text-4xl font-semibold">{v}</p>
              <p className="mt-2 font-grotesk text-xs uppercase tracking-widest text-[var(--mute)]">{l}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.n} className="group rounded-3xl glass-strong p-7 shadow-luxe transition hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-[var(--brand-gold)]">
                  {Array.from({ length: r.s }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="font-grotesk text-[10px] uppercase tracking-widest text-[var(--mute)]">{r.t}</span>
              </div>
              <blockquote className="mt-5 font-display text-base font-medium leading-relaxed">
                "{r.body}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--line)] pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--soft-red)] font-display text-sm font-semibold text-[var(--brand-red)]">
                  {r.n.split(" ").pop()?.[0]}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold">{r.n}</p>
                  <p className="font-grotesk text-xs text-[var(--mute)]">{r.r} · {r.l}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Video testimonial */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-luxe">
              <img src={companyProfile} alt="Video testimonial" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <PlayCircle className="h-16 w-16 text-white/90 transition group-hover:scale-110" strokeWidth={1.2} />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-grotesk text-xs uppercase tracking-widest text-white/80">Video review</p>
                <p className="mt-1 font-display text-xl font-semibold text-white">{i === 1 ? "Hotel Kitchen Setup" : i === 2 ? "Restaurant Installation" : "Bakery Equipment"}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
