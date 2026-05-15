import { PageHeader, Eyebrow } from "@/components/site/Section";
import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Navbar />
      <div>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's talk about your <span className="italic font-light text-[var(--brand-red)]">kitchen</span>.</>}
        subtitle="Free consultation, 3D layout and detailed quotation — usually back to you within 72 hours."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Form */}
          <div className="md:col-span-7">
            <div className="rounded-3xl glass-strong p-8 shadow-luxe md:p-10">
              <Eyebrow>Inquiry form</Eyebrow>
              <form
                className="mt-6 grid gap-5"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full name" name="name" />
                  <Field label="Company" name="company" />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Email" name="email" type="email" />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <Field label="Project type" name="type" placeholder="Hotel kitchen, bakery, hospital..." />
                <div>
                  <label className="font-grotesk text-xs uppercase tracking-widest text-[var(--mute)]">Tell us about the project</label>
                  <textarea
                    rows={5}
                    className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-white/80 px-4 py-3 font-body text-sm outline-none focus:border-[var(--brand-red)]"
                    placeholder="Location, scope, timeline..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 py-4 font-grotesk text-sm font-medium text-white transition hover:bg-[var(--brand-red)]"
                >
                  {sent ? "Thank you — we'll be in touch" : "Send inquiry"} <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Side info */}
          <div className="md:col-span-5 space-y-4">
            <InfoCard icon={MapPin} title="Workshop & studio" body={<>Smart Works, 11th Main, Pipeline Rd<br />Bengaluru, Karnataka 560091</>} />
            <InfoCard icon={Phone} title="Speak to us" body={<a href="tel:+917259150715" className="underline-gold">+91 7259150715</a>} />
            <InfoCard icon={Mail} title="Email" body={<a href="mailto:sunstarequipments@gmail.com" className="underline-gold">sunstarequipments@gmail.com</a>} />
            <InfoCard icon={MessageCircle} title="WhatsApp" body={<a href="https://wa.me/917259150715" className="underline-gold">Chat on WhatsApp</a>} />
            <InfoCard icon={Clock} title="Hours" body={<>Mon–Sat · 09:00 – 19:00 IST</>} />
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-[var(--line)] shadow-luxe">
          <iframe
            title="Sunstar Kitchen Equipments Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.693456789012!2d77.5108076!3d12.9937116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dda553dd77b%3A0x9ee5bd9f33efb2ec!2sSUNSTAR%20KITCHEN%20EQUIPMENTS!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
            className="h-[420px] w-full"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default ContactPage;

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="font-grotesk text-xs uppercase tracking-widest text-[var(--mute)]">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-full border border-[var(--line)] bg-white/80 px-5 py-3 font-body text-sm outline-none transition focus:border-[var(--brand-red)]"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, body }: { icon: React.ComponentType<{ className?: string }>; title: string; body: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-luxe">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--soft-red)] text-[var(--brand-red)]">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="font-grotesk text-xs uppercase tracking-widest text-[var(--mute)]">{title}</p>
        <p className="mt-1 font-display text-base font-medium">{body}</p>
      </div>
    </div>
  );
}
