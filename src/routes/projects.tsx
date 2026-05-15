import { PageHeader, Eyebrow } from "@/components/site/Section";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import kitchenEquipment from "@/assets/Kitchen Equipment for Hotels.webp";
import iceCreamDisplay from "@/assets/Ice Cream Display Counters.webp";
import pastryDisplay from "@/assets/Pastry Display Counters.webp";
import steamBoilers from "@/assets/Steam Boilers.webp";
import exhaustSystems from "@/assets/Exhaust Systems.webp";
import hospitalSS from "@/assets/Custom SS Works for Hospitals.webp";
import bakeryEquipment from "@/assets/Bakery Equipment.webp";
import companyProfile from "@/assets/Our Company Profile.webp";
import industriesServe from "@/assets/Industries We Serve.webp";
import manufacturing from "@/assets/Steel Cutting & Fabrication.webp";
import welding from "@/assets/Welding & Assembly.webp";
import qualityControl from "@/assets/Quality Control.webp";
import finalFinishing from "@/assets/Final Finishing.webp";
import { ArrowUpRight, Star, CheckCircle, Users, Award, Clock, MessageCircle, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";

const cats = ["All", "Hotels", "Restaurants", "Bakeries", "Hospitals", "Equipment", "Corporate", "Company"] as const;

const detailedProjects = [
  {
    img: kitchenEquipment,
    category: "Hotels",
    title: "Luxury Hotel Kitchen Setup",
    location: "Bengaluru",
    description: "Complete commercial kitchen installation for a premium 5-star hotel featuring industrial cooking ranges, stainless steel preparation counters, exhaust hoods, and workflow-based kitchen planning.",
    highlights: ["Stainless Steel Setup", "Exhaust Ventilation", "Hotel Cooking Range", "Food Prep Stations"]
  },
  {
    img: hospitalSS,
    category: "Hospitals",
    title: "Hospital Kitchen Facility",
    location: "Bengaluru",
    description: "Hygienic stainless steel kitchen solution for hospitals with steam cooking systems, sanitary workstations, and healthcare-grade preparation zones.",
    highlights: ["Hygienic SS Fabrication", "Steam Cooking", "Washable Surfaces", "Medical Compliance"]
  },
  {
    img: pastryDisplay,
    category: "Bakeries",
    title: "Pastry Display Counters",
    location: "Bengaluru",
    description: "Modern bakery showcase counters with LED lighting, humidity control, premium glass finishing, and cooling systems for professional product display.",
    highlights: ["LED Lighting", "Curved Glass", "Temperature Control", "Bakery Display"]
  },
  {
    img: exhaustSystems,
    category: "Restaurants",
    title: "Commercial Exhaust System",
    location: "Bengaluru",
    description: "Industrial ventilation system with fresh air supply, stainless steel ducting, smoke extraction, and kitchen airflow balancing.",
    highlights: ["Fresh Air System", "Industrial Ducting", "Exhaust Hood", "Air Balancing"]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Design & Planning",
    description: "Custom kitchen layout design based on your space requirements and operational workflow needs.",
    img: companyProfile
  },
  {
    number: "02",
    title: "Steel Cutting & Fabrication",
    description: "Precision cutting of premium stainless steel using advanced machinery and expert craftsmanship.",
    img: manufacturing
  },
  {
    number: "03",
    title: "Welding & Assembly",
    description: "Expert welding and assembly by skilled craftsmen ensuring durability and perfect finishing.",
    img: welding
  },
  {
    number: "04",
    title: "Surface Finishing",
    description: "Premium surface finishing and polishing for hygiene standards and aesthetic appeal.",
    img: finalFinishing
  },
  {
    number: "05",
    title: "Quality Inspection",
    description: "Rigorous quality control checks ensuring every product meets our high standards.",
    img: qualityControl
  },
  {
    number: "06",
    title: "Installation & Support",
    description: "Professional installation with comprehensive testing and ongoing support services.",
    img: industriesServe
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Hotel Operations Manager",
    company: "Grand Palace Hotel",
    review: "Sunstar Kitchen Equipments delivered a complete hotel kitchen setup with exceptional finishing and timely installation.",
    rating: 5,
    avatar: "RK"
  },
  {
    name: "Priya Sharma",
    role: "Owner",
    company: "Sweet Dreams Bakery",
    review: "The pastry display counters exceeded our expectations. Excellent finishing and professional quality.",
    rating: 5,
    avatar: "PS"
  },
  {
    name: "Mohammed Arif",
    role: "Restaurant Owner",
    company: "Spice Route Restaurant",
    review: "The exhaust system installation improved our kitchen workflow and ventilation significantly.",
    rating: 5,
    avatar: "MA"
  },
  {
    name: "Kavya Reddy",
    role: "Administrator",
    company: "City Care Hospital",
    review: "Professional installation, hygienic finishing, and durable stainless steel quality.",
    rating: 5,
    avatar: "KR"
  }
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Installations" },
  { value: "200+", label: "Clients" },
  { value: "Karnataka", label: "Wide Service" }
];

const projects = [
  { img: kitchenEquipment, cat: "Hotels", t: "Luxury Hotel Kitchen Setup", loc: "Bengaluru", h: "h-[520px] md:col-span-7" },
  { img: companyProfile, cat: "Company", t: "Our Manufacturing Facility", loc: "Bengaluru", h: "h-[520px] md:col-span-5" },
  { img: iceCreamDisplay, cat: "Bakeries", t: "Ice Cream Display Installation", loc: "Bengaluru", h: "h-[420px] md:col-span-5" },
  { img: pastryDisplay, cat: "Bakeries", t: "Pastry Display Counters", loc: "Bengaluru", h: "h-[420px] md:col-span-7" },
  { img: hospitalSS, cat: "Hospitals", t: "Hospital Kitchen Facility", loc: "Bengaluru", h: "h-[480px] md:col-span-7" },
  { img: steamBoilers, cat: "Hotels", t: "Steam Boiler Installation", loc: "Bengaluru", h: "h-[480px] md:col-span-5" },
  { img: exhaustSystems, cat: "Restaurants", t: "Commercial Exhaust System", loc: "Bengaluru", h: "h-[420px] md:col-span-6" },
  { img: bakeryEquipment, cat: "Bakeries", t: "Complete Bakery Setup", loc: "Bengaluru", h: "h-[420px] md:col-span-6" },
  { img: manufacturing, cat: "Equipment", t: "Steel Cutting & Fabrication", loc: "Bengaluru", h: "h-[420px] md:col-span-4" },
  { img: welding, cat: "Equipment", t: "Welding & Assembly Process", loc: "Bengaluru", h: "h-[420px] md:col-span-4" },
  { img: qualityControl, cat: "Equipment", t: "Quality Control Process", loc: "Bengaluru", h: "h-[420px] md:col-span-4" },
  { img: industriesServe, cat: "Corporate", t: "Industries We Serve", loc: "Karnataka", h: "h-[480px] md:col-span-12" },
];

function ProjectsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div>
      <PageHeader
        eyebrow="Portfolio"
        title={<>Our Projects <span className="italic font-light text-[var(--brand-red)]">Gallery</span>.</>}
        subtitle="Explore our completed projects and see the quality of our commercial kitchen installations across various industries."
      />
      
      {/* Gallery Section */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="grid gap-6 md:grid-cols-12">
          {projects.map((p, i) => (
            <article key={`project-${i}`} className={`group relative overflow-hidden rounded-3xl shadow-lg h-[280px] md:h-auto ${p.h.replace('h-[', 'md:h-[')}`}>
              <img src={p.img} alt={p.t} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 md:p-6 lg:p-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/80">{p.cat} · {p.loc}</p>
                  <p className="mt-1 text-lg font-semibold text-white md:text-2xl lg:text-3xl">{p.t}</p>
                </div>
                <span className="grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-full bg-white/90 transition group-hover:bg-red-600">
                  <ArrowUpRight className="h-4 w-4 text-gray-900 transition group-hover:text-white" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 1: Detailed Project Showcase */}
      <section className="relative bg-[#f7f6f2] py-24 md:py-32">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <Eyebrow>Project Installation Details</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Detailed Commercial Kitchen Installations
            </h2>
            <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-[var(--mute)]">
              Explore detailed commercial kitchen installations designed for hotels, restaurants, bakeries, hospitals, and industrial food operations across Bengaluru.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {detailedProjects.map((project, i) => (
              <article key={i} className="group grid gap-8 overflow-hidden rounded-3xl bg-white p-6 shadow-luxe transition hover:-translate-y-2 md:grid-cols-12 md:items-center md:p-8">
                <div className={`md:col-span-6 ${i % 2 ? "md:order-2" : ""}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl md:aspect-auto">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105 md:h-[320px]" 
                      loading="lazy" 
                    />
                  </div>
                </div>
                <div className={`md:col-span-6 ${i % 2 ? "md:order-1 md:pr-8" : "md:pl-8"}`}>
                  <span className="inline-block rounded-full bg-[var(--brand-red)] px-3 py-1 font-grotesk text-xs font-medium text-white">
                    {project.category}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-tight md:text-3xl">{project.title}</h3>
                  <p className="mt-2 font-grotesk text-sm text-[var(--mute)]">{project.location}</p>
                  <p className="mt-4 font-body text-sm leading-relaxed text-[var(--mute)] md:text-base">{project.description}</p>
                  
                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[var(--brand-red)]" />
                        <span className="font-grotesk text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 font-grotesk text-sm font-medium text-white transition hover:bg-[var(--brand-red)]">
                    View Details <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Manufacturing Process */}
      <section className="relative py-24 md:py-32">
        <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-[var(--brand-red)]/10 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-96 w-96 rounded-full bg-[var(--brand-gold)]/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <Eyebrow>Our Manufacturing Process</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Precision Engineering & Quality Manufacturing
            </h2>
            <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-[var(--mute)]">
              Every commercial kitchen solution is manufactured using premium stainless steel materials, precision engineering, and strict quality standards.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <div key={i} className="group relative">
                <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-luxe transition hover:-translate-y-2 md:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-red)] font-display text-lg font-bold text-white">
                      {step.number}
                    </span>
                    <div className="h-12 w-12 overflow-hidden rounded-2xl md:h-16 md:w-16">
                      <img src={step.img} alt={step.title} className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-semibold md:text-xl">{step.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-[var(--mute)]">{step.description}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 hidden h-8 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--line)] to-transparent lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Client Testimonials */}
      <section className="relative bg-[#f5f5f3] py-24 md:py-32">
        <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-[var(--brand-gold)]/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-[var(--brand-red)]/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <Eyebrow>What Our Clients Say</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-[var(--mute)]">
              Trusted by hotels, bakeries, restaurants, hospitals, and commercial food businesses across Karnataka.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="group rounded-3xl glass-strong p-6 shadow-luxe transition hover:-translate-y-2">
                <div className="flex gap-1 text-[var(--brand-gold)]">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 font-body text-sm leading-relaxed">
                  "{testimonial.review}"
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-[var(--line)] pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-red)] font-display text-sm font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold">{testimonial.name}</p>
                    <p className="font-grotesk text-xs text-[var(--mute)]">{testimonial.role}</p>
                    <p className="font-grotesk text-xs text-[var(--mute)]">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Premium CTA */}
      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--ink)] via-[var(--ink)] to-[var(--brand-red)] p-12 md:p-16">
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[var(--brand-red)]/30 blur-2xl" />
          
          <div className="relative text-center">
            <h2 className="font-display text-4xl font-semibold text-white md:text-6xl">
              Ready to Build Your Commercial Kitchen?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-white/80">
              Get customized commercial kitchen solutions designed for efficiency, hygiene, durability, and long-term business performance.
            </p>
            
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
                  <p className="mt-1 font-grotesk text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <button className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-grotesk text-sm font-medium text-[var(--ink)] transition hover:bg-white/90 hover:shadow-2xl">
                Get Free Consultation
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-grotesk text-sm font-medium text-white backdrop-blur transition hover:bg-white/20">
                Request a Quote
              </button>
              <a href="https://wa.me/917259150715" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-grotesk text-sm font-medium text-white backdrop-blur transition hover:bg-white/20">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default ProjectsPage;
