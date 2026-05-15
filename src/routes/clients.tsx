import { PageHeader, Eyebrow } from "@/components/site/Section";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import clientLogo1 from "@/assets/ClientLogo/Client Logo-01.jpg.jpeg";
import clientLogo2 from "@/assets/ClientLogo/Client Logo-02.jpg.jpeg";
import clientLogo3 from "@/assets/ClientLogo/Client Logo-03.jpg.jpeg";
import clientLogo4 from "@/assets/ClientLogo/Client Logo-04.jpg.jpeg";
import clientLogo5 from "@/assets/ClientLogo/Client Logo-05.jpg.jpeg";
import clientLogo6 from "@/assets/ClientLogo/Client Logo-06.jpg.jpeg";
import clientLogo7 from "@/assets/ClientLogo/Client Logo-07.jpg.jpeg";
import clientLogo8 from "@/assets/ClientLogo/Client Logo-08.jpg.jpeg";
import clientLogo9 from "@/assets/ClientLogo/Client Logo-09.jpg.jpeg";

const clientLogos = [
  { name: "Client 1", logo: clientLogo1 },
  { name: "Client 2", logo: clientLogo2 },
  { name: "Client 3", logo: clientLogo3 },
  { name: "Client 4", logo: clientLogo4 },
  { name: "Client 5", logo: clientLogo5 },
  { name: "Client 6", logo: clientLogo6 },
  { name: "Client 7", logo: clientLogo7 },
  { name: "Client 8", logo: clientLogo8 },
  { name: "Client 9", logo: clientLogo9 },
];

const stats = [
  ["100+", "Projects completed"],
  ["50+", "Happy clients"],
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

        {/* CLIENT LOGOS SECTION */}
        <div className="mt-16">
          <Eyebrow>Our Valued Partners</Eyebrow>
          <div className="mt-8 grid gap-6 grid-cols-3">
            {clientLogos.map((client, i) => (
              <div
                key={i}
                className="grid aspect-[3/2] place-items-center rounded-2xl glass-strong p-3 shadow-luxe"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
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
