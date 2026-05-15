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
        subtitle="Your trusted partner for complete commercial kitchen solutions in Bengaluru. Under the expert leadership of proprietor Rakshith Poojary, we have established ourselves as a trusted name in the industry with over 15+ years of experience."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <img src={companyProfile} alt="Our company profile" className="rounded-3xl shadow-luxe" loading="lazy" />
          </div>
          <div className="md:col-span-5 md:pt-16">
            <Eyebrow>Our Company Profile</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-5xl">Premier manufacturer and supplier of commercial kitchen equipment</h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-[var(--mute)]">
              Sunstar Kitchen Equipments is a premier manufacturer and supplier of high-quality commercial kitchen equipment based in Bengaluru. We specialize in providing comprehensive kitchen solutions for hotels, restaurants, bakeries, hospitals, and other commercial establishments. Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for businesses across Karnataka.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 md:pt-16 md:order-1">
            <Eyebrow>Our Mission & Vision</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-5xl">
              To provide innovative, high-quality commercial kitchen solutions
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-[var(--mute)]">
              Our mission is to provide innovative, high-quality commercial kitchen equipment and comprehensive solutions that enhance the operational efficiency of our clients while maintaining the highest standards of safety, durability, and performance.
            </p>
          </div>
          <div className="md:col-span-7 md:order-2">
            <img src={whyTrust} alt="Why businesses trust us" className="rounded-3xl shadow-luxe" loading="lazy" />
          </div>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            ["15+ Years Experience", "Over 15 years of extensive experience in commercial kitchen design, manufacturing, and installation across various industries."],
            ["Quality Manufacturing", "We use premium grade stainless steel and advanced manufacturing techniques to ensure durability and hygiene standards."],
            ["Complete Project Management", "From planning and design to installation and maintenance, we handle every aspect of your kitchen project."],
          ].map(([h, p]) => (
            <div key={h} className="rounded-3xl border border-[var(--line)] bg-white p-7 shadow-luxe">
              <p className="font-grotesk text-xs uppercase tracking-widest text-[var(--brand-red)]">{h}</p>
              <p className="mt-4 font-display text-xl font-semibold leading-snug">{p}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 overflow-hidden rounded-3xl bg-[var(--ink)] p-10 md:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-grotesk text-xs uppercase tracking-widest text-[var(--brand-gold)]">Meet Our Leadership</p>
              <p className="mt-6 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                "Rakshith Poojary - Proprietor & Founder"
              </p>
              <p className="mt-6 font-body text-white/70">With over 15+ years of experience in the commercial kitchen industry, Rakshith Poojary leads Sunstar Kitchen Equipments with a vision to provide innovative and quality solutions. His expertise in understanding client requirements and delivering customized kitchen solutions has established the company as a trusted name in the industry.</p>
            </div>
            <img src={manufacturing} alt="Manufacturing process" className="rounded-2xl" loading="lazy" />
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
