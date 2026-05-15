import React from "react";

const whatsappNumber = "+12267934465"; // change your number here

const openWhatsApp = () => {
  window.open(`https://wa.me/${whatsappNumber}`, "_blank");
};

const services = [
  {
    title: "Wedding Photography",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",
  },
  {
    title: "Pre-Wedding Shoot",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200",
  },
  {
    title: "Birthday Photography",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200",
  },
  {
    title: "Baby Photoshoot",
    image: "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?w=1200",
  },
  {
    title: "Fashion Portfolio",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200",
  },
  {
    title: "Event Coverage",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200",
  },
];

const packages = [
  {
    title: "Wedding Package",
    price: "₹25,000",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200",
    points: ["Full day coverage", "Edited photos", "Online gallery"],
  },
  {
    title: "Pre-Wedding Package",
    price: "₹15,000",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1200",
    points: ["Outdoor shoot", "Reels included", "Premium editing"],
  },
  {
    title: "Event Package",
    price: "₹10,000",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200",
    points: ["Birthday / party", "Candid photos", "Fast delivery"],
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=900",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900",
  "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?w=900",
];

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Best photography team. They captured our wedding beautifully.",
  },
  {
    name: "Priya Verma",
    text: "Our pre-wedding photoshoot was premium and very professional.",
  },
  {
    name: "Amit Kumar",
    text: "Amazing quality, fast delivery and very polite team.",
  },
];

const faqs = [
  {
    q: "How can I book a photoshoot?",
    a: "You can click the WhatsApp button and send us your requirement.",
  },
  {
    q: "Do you provide wedding albums?",
    a: "Yes, premium wedding albums are available with selected packages.",
  },
  {
    q: "Do you shoot outside city?",
    a: "Yes, we cover outstation weddings and pre-wedding shoots.",
  },
  {
    q: "How much time does delivery take?",
    a: "Usually edited photos are delivered within 7 to 15 working days.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#2b1609]">
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#2b1609]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="text-2xl font-black text-[#ffd08a]">
            Royal Studio
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-white lg:flex">
            <a href="#home" className="hover:text-[#ffd08a]">
              Home
            </a>
            <a href="#services" className="hover:text-[#ffd08a]">
              Services
            </a>
            <a href="#why" className="hover:text-[#ffd08a]">
              Why Us
            </a>
            <a href="#packages" className="hover:text-[#ffd08a]">
              Packages
            </a>
            <a href="#gallery" className="hover:text-[#ffd08a]">
              Gallery
            </a>
            <a href="#faqs" className="hover:text-[#ffd08a]">
              FAQs
            </a>
            <a href="#contact" className="hover:text-[#ffd08a]">
              Contact
            </a>
          </nav>

          <button
            onClick={openWhatsApp}
            className="rounded-full bg-linear-to-r from-[#c47a24] to-[#ffd08a] px-5 py-3 text-sm font-black text-[#2b1609] shadow-lg shadow-[#c47a24]/30 transition hover:-translate-y-1"
          >
            Book Now
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-5 pt-24 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#2b1609]/65 via-[#2b1609]/60 to-[#2b1609]/85" />

        <div className="relative z-10 mx-auto max-w-5xl text-white">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#ffd08a] md:text-base">
            Premium Photo Studio
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl lg:text-8xl">
            Capture Your Best Moments With Us
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 md:text-xl">
            Wedding photography, pre-wedding shoots, baby photoshoots, events,
            fashion portfolios and cinematic photography services.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={openWhatsApp}
              className="rounded-full bg-linear-to-r from-[#c47a24] to-[#ffd08a] px-8 py-4 font-black text-[#2b1609] shadow-2xl shadow-[#c47a24]/30 transition hover:-translate-y-1"
            >
              Book Shoot on WhatsApp
            </button>

            <a
              href="#gallery"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#2b1609]"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Our Services"
            title="Photography Services"
            text="Choose the perfect shoot experience for your special occasion."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <div
                key={index}
                onClick={openWhatsApp}
                className="group relative h-80 cursor-pointer overflow-hidden rounded-4xl shadow-2xl shadow-[#2b1609]/15"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="text-2xl font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    Click to enquire on WhatsApp
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="bg-[#f6eadb] px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Why Choose Us"
            title="Premium Quality, Creative Vision"
            text="Professional photography with beautiful editing and timely delivery."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <WhyCard
              icon="📸"
              title="Professional Team"
              text="Experienced photographers for every type of shoot."
            />
            <WhyCard
              icon="🎬"
              title="Cinematic Quality"
              text="Premium photos, reels, videos and creative edits."
            />
            <WhyCard
              icon="💰"
              title="Best Packages"
              text="Affordable photography packages for every budget."
            />
            <WhyCard
              icon="⚡"
              title="Fast Delivery"
              text="Quick delivery with professional editing."
            />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Popular Packages"
            title="Choose Your Photoshoot Package"
            text="Premium packages for weddings, events and personal shoots."
          />

          <div className="grid gap-7 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-4xl bg-white shadow-2xl shadow-[#2b1609]/10 transition hover:-translate-y-2"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-7">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black text-[#3c2112]">
                      {pkg.title}
                    </h3>
                    <span className="rounded-full bg-[#fff1d6] px-4 py-2 text-sm font-black text-[#a15c18]">
                      {pkg.price}
                    </span>
                  </div>

                  <ul className="mb-6 space-y-3 text-[#73513d]">
                    {pkg.points.map((point, i) => (
                      <li key={i}>✓ {point}</li>
                    ))}
                  </ul>

                  <button
                    onClick={openWhatsApp}
                    className="w-full rounded-full bg-linear-to-r from-[#c47a24] to-[#ffd08a] px-6 py-4 font-black text-[#2b1609] shadow-lg shadow-[#c47a24]/25 transition hover:-translate-y-1"
                  >
                    Get Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="bg-[#f6eadb] px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Our Work"
            title="Photo Gallery"
            text="Explore our latest photography work and creative shoots."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img, index) => (
              <div
                key={index}
                className="group h-80 overflow-hidden rounded-4xl shadow-xl shadow-[#2b1609]/10"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={openWhatsApp}
              className="rounded-full bg-linear-to-r from-[#c47a24] to-[#ffd08a] px-8 py-4 font-black text-[#2b1609] shadow-xl shadow-[#c47a24]/25 transition hover:-translate-y-1"
            >
              Book Your Shoot
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Testimonials"
            title="What Our Clients Say"
            text="Happy clients, beautiful memories and premium shoot experiences."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-4xl bg-white p-8 shadow-xl shadow-[#2b1609]/10"
              >
                <p className="text-lg leading-8 text-[#5c3c28]">
                  “{item.text}”
                </p>
                <h4 className="mt-6 font-black text-[#3c2112]">
                  — {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-[#f6eadb] px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            label="FAQs"
            title="Frequently Asked Questions"
            text="Everything you need to know before booking your photoshoot."
          />

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-7 shadow-lg shadow-[#2b1609]/10"
              >
                <h3 className="text-xl font-black text-[#3c2112]">{faq.q}</h3>
                <p className="mt-3 leading-7 text-[#73513d]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="relative bg-cover bg-center px-5 py-24 text-center text-white lg:px-8"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-[#2b1609]/85" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <h2 className="text-4xl font-black md:text-6xl">
            Book Your Dream Photoshoot
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Contact us now for weddings, pre-weddings, birthdays, events,
            portfolios and studio photoshoots.
          </p>

          <button
            onClick={openWhatsApp}
            className="mt-8 rounded-full bg-linear-to-r from-[#c47a24] to-[#ffd08a] px-9 py-4 font-black text-[#2b1609] shadow-xl shadow-[#c47a24]/30 transition hover:-translate-y-1"
          >
            Get Details on WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2b1609] px-5 py-7 text-center text-white">
        <p>© 2026 Royal Studio. All Rights Reserved.</p>
      </footer>

      {/* Floating WhatsApp */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] px-6 py-4 font-black text-white shadow-2xl shadow-green-500/30 transition hover:-translate-y-1"
      >
        WhatsApp
      </button>
    </div>
  );
}

function SectionTitle({ label, title, text }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-[#c47a24]">
        {label}
      </p>

      <h2 className="text-4xl font-black text-[#3c2112] md:text-6xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-[#73513d]">{text}</p>
    </div>
  );
}

function WhyCard({ icon, title, text }) {
  return (
    <div className="rounded-4xl bg-white p-8 text-center shadow-xl shadow-[#2b1609]/10 transition hover:-translate-y-2">
      <div className="mb-5 text-5xl">{icon}</div>
      <h3 className="text-xl font-black text-[#3c2112]">{title}</h3>
      <p className="mt-3 leading-7 text-[#73513d]">{text}</p>
    </div>
  );
}
