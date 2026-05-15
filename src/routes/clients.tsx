import { PageHeader, Eyebrow } from "@/components/site/Section";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const groups = {
  "Hotels & Resorts": ["Grand Palace Hotel", "Royal Inn", "Heritage Resort", "City Plaza", "Business Hotel", "Luxury Suites", "Garden Resort", "Metro Inn"],
  "Restaurants": ["Spice Garden", "Urban Kitchen", "Coastal Cafe", "Rooftop Dining", "Family Restaurant", "Fine Dine", "Quick Bites", "Multi-Cuisine"],
  "Bakeries & Cafes": ["Sweet Dreams Bakery", "Fresh Bakes", "Artisan Breads", "Cake Corner", "Coffee Culture", "Pastry Palace", "Bread Basket"],
  "Hospitals & Healthcare": ["City Hospital", "Medical Center", "Healthcare Plus", "Wellness Hospital", "Specialty Clinic", "Nursing Home"],
  "Corporate & Institutions": ["Tech Park Cafeteria", "Office Complex", "Educational Institute", "Training Center", "Corporate Kitchen"],
};

const stats = [
  ["500+", "Projects completed"],
  ["100+", "Happy clients"],
  ["15+", "Years experience"],
  ["24/7", "Support available"],
];

function ClientsPage() {
  return (
    <>
      <Navbar />
      <div>
      <PageHeader
        eyebrow="Partnerships"
        title={<>Trusted by <span className="italic font-light text-[var(--brand-red)]">businesses</span> across Bengaluru.</>}
        subtitle="From small cafes to large hotel kitchens — we've helped businesses create efficient and modern commercial kitchen spaces."
      />
      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-4">
          {stats.map(([v, l]) => (
            <div key={l} className="bg-white p-8">
              <p className="font-display text-4xl font-semibold">{v}</p>
              <p className="mt-2 font-grotesk text-xs uppercase tracking-widest text-[var(--mute)]">{l}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-16">
          {Object.entries(groups).map(([cat, items]) => (
            <div key={cat}>
              <Eyebrow>{cat}</Eyebrow>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {items.map((c) => (
                  <div
                    key={c}
                    className="group relative grid aspect-[5/3] place-items-center rounded-2xl glass-strong shadow-luxe transition hover:ring-brand"
                  >
                    <span className="font-display text-xl font-light tracking-widest text-[var(--ink)]/70 transition group-hover:text-[var(--brand-red)]">
                      {c.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 overflow-hidden border-y border-[var(--line)] py-6">
          <div className="marquee flex w-max items-center gap-12">
            {[...Object.values(groups).flat(), ...Object.values(groups).flat()].map((c, i) => (
              <span key={i} className="font-display text-lg font-light tracking-widest text-[var(--mute)]/60">
                {c.toUpperCase()} <span className="text-[var(--brand-gold)]">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default ClientsPage;
