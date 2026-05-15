import { PageHeader } from "@/components/site/Section";
import { Star } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import govindaBabu from "@/assets/ClientReview/Govinda Babu Poojari-Founder-Chelf Talk Hospitality Services.jpeg";
import nithinKanchan from "@/assets/ClientReview/Nithin_Kanchan-Managing Partner-Udupi Kai Ruchi.jpeg";
import raghavendraKanchan from "@/assets/ClientReview/Raghavendra_Kanchan-Managing Partner-Rajathagiri Palace.jpeg";
import sathyanarayanAmpar from "@/assets/ClientReview/Sathyanarayan Ampar-Managing Partner-Udupi Krishnam Hotel.jpeg";

const reviews = [
  { n: "Govinda Babu Poojari", r: "Founder", l: "Chelf Talk Hospitality Services", t: "Hotel Kitchen", s: 5, img: govindaBabu,
    body: "Sunstar Kitchen Equipments delivered exceptional quality for our hospitality business. Their expertise in commercial kitchen solutions is unmatched. Professional installation and excellent after-sales support." },
  { n: "Raghavendra Kanchan", r: "Managing Partner", l: "Rajathagiri Palace", t: "Restaurant Kitchen", s: 5, img: raghavendraKanchan,
    body: "Working with Sunstar was a great experience. They understood our kitchen workflow requirements and delivered exactly what we needed. The quality of stainless steel work is outstanding." },
  { n: "Nithin Kanchan", r: "Managing Partner", l: "Udupi Kai Ruchi", t: "Commercial Kitchen", s: 5, img: nithinKanchan,
    body: "From gas line installation to exhaust systems, everything was handled professionally. The kitchen operates efficiently and the equipment quality is excellent. Highly recommended for restaurant setups." },
  { n: "Sathyanarayan Ampar", r: "Managing Partner", l: "Krishnam Udupi Hotel", t: "Hotel Kitchen", s: 5, img: sathyanarayanAmpar,
    body: "The complete kitchen solution provided by Sunstar has transformed our hotel operations. Professional team, quality installation, and excellent equipment. Very satisfied with their service and support." },
  { n: "Priya Sharma", r: "Owner", l: "Bengaluru", t: "Bakery Display", s: 5,
    body: "The display counters they provided for our bakery are absolutely beautiful. The LED lighting and temperature control are perfect for showcasing our products." },
  { n: "Chef Anand", r: "Head Chef", l: "Bengaluru", t: "Restaurant Kitchen", s: 5,
    body: "Working with Sunstar was a great experience. They understood our kitchen workflow requirements and delivered exactly what we needed. Excellent craftsmanship!" },
];

function ReviewsPage() {
  return (
    <>
      <Navbar />
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
                {r.img ? (
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <img 
                      src={r.img} 
                      alt={r.n} 
                      className={`h-full w-full object-cover ${
                        r.n === "Raghavendra Kanchan" 
                          ? "object-top" 
                          : "object-center"
                      }`}
                    />
                  </div>
                ) : (
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--soft-red)] font-display text-sm font-semibold text-[var(--brand-red)]">
                    {r.n.split(" ").pop()?.[0]}
                  </div>
                )}
                <div>
                  <p className="font-display text-sm font-semibold">{r.n}</p>
                  <p className="font-grotesk text-xs text-[var(--mute)]">{r.r} · {r.l}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default ReviewsPage;
