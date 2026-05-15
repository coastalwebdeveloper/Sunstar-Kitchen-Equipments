import { Link } from "react-router-dom";
import { PageHeader, Eyebrow } from "@/components/site/Section";
import companyProfile from "@/assets/Our Company Profile.webp";
import manufacturing from "@/assets/Steel Cutting & Fabrication.webp";
import qualityControl from "@/assets/Quality Control.webp";
import whyTrust from "@/assets/Why Businesses Trust Us.webp";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />
      <div>
      <PageHeader
        eyebrow="About the studio"
        title={<>About Sunstar <span className="italic font-light text-[var(--brand-red)]">Kitchen Equipments</span>.</>}
        subtitle="Your trusted partner for complete commercial kitchen solutions in Bengaluru."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-luxe">
              <img src={companyProfile} alt="Our company profile" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="md:col-span-5">
            <Eyebrow>Our Company Profile</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-4xl">Premier manufacturer and supplier of commercial kitchen equipment</h2>
            <p className="mt-6 font-body text-base leading-relaxed text-[var(--mute)] md:text-lg">
              Sunstar Kitchen Equipments is a premier manufacturer and supplier of high-quality commercial kitchen equipment based in Bengaluru. Under the expert leadership of our proprietor Rakshith Poojary, we have established ourselves as a trusted name in the industry with over 15+ years of experience.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-[var(--mute)] md:text-lg">
              We specialize in providing comprehensive kitchen solutions for hotels, restaurants, bakeries, hospitals, and other commercial establishments. Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for businesses across Karnataka.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-[var(--mute)] md:text-lg">
              From initial consultation to final installation, we ensure that every project meets the highest standards of quality and functionality. Our experienced team works closely with clients to understand their specific requirements and deliver customized solutions that exceed expectations.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5 md:order-1">
            <Eyebrow>Our Mission & Vision</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-[var(--mute)] md:text-lg">
              To provide innovative, high-quality commercial kitchen equipment and comprehensive solutions that enhance the operational efficiency of our clients while maintaining the highest standards of safety, durability, and performance.
            </p>
            <h3 className="mt-8 font-display text-2xl font-semibold leading-tight md:text-3xl">
              Our Vision
            </h3>
            <p className="mt-4 font-body text-base leading-relaxed text-[var(--mute)] md:text-lg">
              To become the leading provider of commercial kitchen solutions across South India, recognized for our innovation, quality craftsmanship, and exceptional customer service that transforms culinary spaces into efficient, productive environments.
            </p>
          </div>
          <div className="md:col-span-7 md:order-2">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-luxe">
              <img src={whyTrust} alt="Why businesses trust us" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            ["Quality Manufacturing", "We use premium grade stainless steel and advanced manufacturing techniques to ensure durability and hygiene standards for all our equipment."],
            ["Custom Solutions", "Our team specializes in creating custom kitchen equipment tailored to specific requirements and operational needs of each client."],
            ["Professional Installation", "Our certified technicians ensure proper installation, testing, and commissioning of all equipment with comprehensive after-sales support."],
          ].map(([h, p]) => (
            <div key={h} className="rounded-3xl border border-[var(--line)] bg-white p-7 shadow-luxe">
              <p className="font-grotesk text-xs uppercase tracking-widest text-[var(--brand-red)]">{h}</p>
              <p className="mt-4 font-display text-xl font-semibold leading-snug">{p}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center">
            <Eyebrow>Our Manufacturing Expertise</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-5xl">
              With state-of-the-art manufacturing facilities and skilled craftsmen, we deliver excellence in every product
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["15+ Years of Experience", "Over 15 years of extensive experience in commercial kitchen design, manufacturing, and installation across various industries."],
            ["Complete Project Management", "From planning and design to installation and maintenance, we handle every aspect of your kitchen project."],
            ["Quality Assurance", "All our products undergo rigorous quality checks and comply with industry standards and safety regulations."],
            ["Competitive Pricing", "Direct manufacturer pricing with transparent quotations and no hidden costs for all our services."],
          ].map(([h, p]) => (
            <div key={h} className="rounded-3xl border border-[var(--line)] bg-white p-7 shadow-luxe">
              <p className="font-grotesk text-xs uppercase tracking-widest text-[var(--brand-red)]">{h}</p>
              <p className="mt-4 font-display text-lg font-semibold leading-snug">{p}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 overflow-hidden rounded-3xl bg-[var(--ink)] p-8 md:p-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            <div>
              <p className="font-grotesk text-xs uppercase tracking-widest text-[var(--brand-gold)]">Meet Our Leadership</p>
              <p className="mt-6 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                Rakshith Poojary
              </p>
              <p className="mt-2 font-grotesk text-lg font-medium text-[var(--brand-gold)]">
                Proprietor & Founder
              </p>
              <p className="mt-6 font-body text-white/80 leading-relaxed">
                With over 15+ years of experience in the commercial kitchen industry, Rakshith Poojary leads Sunstar Kitchen Equipments with a vision to provide innovative and quality solutions. His expertise in understanding client requirements and delivering customized kitchen solutions has established the company as a trusted name in the industry.
              </p>
              <p className="mt-4 font-body text-white/80 leading-relaxed">
                Under his leadership, the company has successfully completed numerous projects across hotels, restaurants, bakeries, and hospitals in Bengaluru and surrounding areas.
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={manufacturing} alt="Manufacturing process" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-red)] px-6 py-4 font-grotesk text-sm font-medium text-white">
            Get Free Quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default AboutPage;
