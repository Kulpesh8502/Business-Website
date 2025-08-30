/*
Business-Website-React.jsx
Single-file React component (default export) for a modern, responsive business website.

How to use:
1. Create a new React app (Vite is recommended):
   npm create vite@latest my-business-site -- --template react
   cd my-business-site
2. Install Tailwind CSS (follow Tailwind docs). Quick steps:
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   // then add Tailwind directives to src/index.css:
   // @tailwind base; @tailwind components; @tailwind utilities;
   // configure content paths in tailwind.config.js
3. Replace src/App.jsx with the contents below. Ensure src/main.jsx imports './index.css'.
4. Run: npm install && npm run dev

Notes:
- This is a single-file layout that includes all UI sections: Navbar, Hero, Services, About, Testimonials, CTA, Contact, Footer.
- The contact form uses a `mailto:` fallback — replace with your API/backend if you want server-side processing.
- Replace placeholder text, images (unsplash URLs), and brand colors as needed.
*/

import React from "react";

const Nav = () => (
  <nav className="bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold">B</div>
        <div>
          <a href="#" className="font-semibold text-gray-800">BrightBiz</a>
          <div className="text-xs text-gray-500">Consulting & Solutions</div>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 text-gray-700">
        <a href="#services" className="hover:text-indigo-600">Services</a>
        <a href="#about" className="hover:text-indigo-600">About</a>
        <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
        <a href="#contact" className="hover:text-indigo-600">Contact</a>
        <a href="#" className="ml-2 px-4 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-700">Get Started</a>
      </div>

      <div className="md:hidden">
        <MobileMenu />
      </div>
    </div>
  </nav>
);

const MobileMenu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-4 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
          <a href="#services" className="block px-4 py-2 hover:bg-gray-50">Services</a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-50">About</a>
          <a href="#testimonials" className="block px-4 py-2 hover:bg-gray-50">Testimonials</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-50">Contact</a>
        </div>
      )}
    </div>
  );
};

const Hero = () => (
  <header className="bg-gradient-to-br from-indigo-50 to-white">
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Grow smarter. Move faster.</h1>
        <p className="mt-6 text-gray-600 max-w-2xl">We help small and medium businesses scale with data-driven marketing, product strategy, and engineering solutions — without the agency overhead.</p>

        <div className="mt-8 flex gap-4">
          <a href="#contact" className="px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700">Book a Free Call</a>
          <a href="#services" className="px-6 py-3 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">Our Services</a>
        </div>

        <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
          <div>Trusted by</div>
          <div className="flex items-center gap-4">
            <img src="https://via.placeholder.com/100x34?text=Client+1" alt="client"/>
            <img src="https://via.placeholder.com/100x34?text=Client+2" alt="client"/>
            <img src="https://via.placeholder.com/100x34?text=Client+3" alt="client"/>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6f7b113d6c9f1f1b0c8a7f6a9b5ebf9a" alt="office" className="w-full h-72 object-cover" />
        </div>
      </div>
    </div>
  </header>
);

const ServiceCard = ({ title, desc, icon }) => (
  <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
    <div className="w-12 h-12 rounded-md bg-indigo-50 flex items-center justify-center">{icon}</div>
    <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{desc}</p>
  </div>
);

const Services = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Services</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Design, build and scale. Choose the service that fits your business stage.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          title="Digital Strategy"
          desc="Growth plans backed by market research, pricing models and KPIs so you hit goals faster."
          icon={<svg xmlns=\"http://www.w3.org/2000/svg\" className=\"h-5 w-5 text-indigo-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M9 17v-6a2 2 0 012-2h6\"/></svg>}
        />
        <ServiceCard
          title="Product & UX"
          desc="Design-led product discovery, prototypes and iterative UX testing that increases conversion."
          icon={<svg xmlns=\"http://www.w3.org/2000/svg\" className=\"h-5 w-5 text-indigo-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M3 7h18M3 12h18M3 17h18\"/></svg>}
        />
        <ServiceCard
          title="Engineering"
          desc="Full-stack implementation, integrations and automation to make your product resilient and fast."
          icon={<svg xmlns=\"http://www.w3.org/2000/svg\" className=\"h-5 w-5 text-indigo-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M12 8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z\"/></svg>}
        />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl font-bold">About BrightBiz</h2>
        <p className="mt-4 text-gray-600">We are a team of product strategists, designers and engineers who partner with founders and growth teams. Our focus: measurable outcomes — revenue, retention and product-market fit.</p>

        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
          <li>✅ 200+ projects delivered</li>
          <li>✅ Global clients across 4 continents</li>
          <li>✅ Cross-functional teams</li>
          <li>✅ Transparent pricing and delivery</li>
        </ul>
      </div>
      <div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7bb7c2a2ddf6f7b3b9fbb7f0c8c2a7e2" alt="team" className="w-full h-80 object-cover" />
        </div>
      </div>
    </div>
  </section>
);

const Testimonial = ({ quote, name, role }) => (
  <div className="p-6 bg-white rounded-2xl shadow-sm">
    <p className="text-gray-700">“{quote}”</p>
    <div className="mt-4 text-sm text-gray-500">— {name}, <span className="text-gray-400">{role}</span></div>
  </div>
);

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-indigo-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold">What clients say</h2>
        <p className="mt-2 text-gray-600">Real feedback from partners we’ve worked with.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Testimonial quote="They helped us double our conversion in 6 months." name="Anjali S." role="Head of Growth" />
        <Testimonial quote="Quick, pragmatic and truly product-minded." name="Ravi K." role="Founder" />
        <Testimonial quote="Reliable team — shipped several successful features." name="Maya P." role="Product Manager" />
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-16">
    <div className="max-w-4xl mx-auto px-6 text-center bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-3xl py-12 shadow-lg">
      <h3 className="text-2xl font-bold">Ready to grow your business?</h3>
      <p className="mt-3">Schedule a free 30-minute consultation and we’ll put together a growth checklist for your business.</p>
      <a href="#contact" className="mt-6 inline-block px-8 py-3 rounded-md bg-white text-indigo-600 font-semibold">Book a Call</a>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-bold">Get in touch</h2>
        <p className="mt-4 text-gray-600">Tell us a bit about your project — we typically respond within 1 business day.</p>

        <div className="mt-6 space-y-3 text-gray-700">
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v.5L10 10 2 5.5V5z"/></svg>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-gray-500">hello@brightbiz.example</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h.5l1 4 4-1V9H15a2 2 0 002-2V5a2 2 0 00-2-2H5z" clipRule="evenodd"/></svg>
            <div>
              <div className="font-semibold">Phone</div>
              <div className="text-sm text-gray-500">+91 98765 43210</div>
            </div>
          </div>
        </div>

      </div>

      <form className="bg-white p-6 rounded-2xl shadow-sm" action="mailto:hello@brightbiz.example" method="post" encType="text/plain">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Name</span>
          <input type="text" name="name" required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2" />
        </label>

        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Email</span>
          <input type="email" name="email" required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2" />
        </label>

        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Message</span>
          <textarea name="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-3 py-2" />
        </label>

        <div className="mt-4">
          <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold">Send Message</button>
        </div>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white border-t">
    <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold">B</div>
          <div>
            <div className="font-semibold">BrightBiz</div>
            <div className="text-sm text-gray-500">Consulting & Solutions</div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600 max-w-sm">We partner with businesses to design and build products that scale. Let's do something great together.</p>
      </div>

      <div className="mt-6 md:mt-0 grid grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
            <li><a href="#careers" className="hover:text-indigo-600">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Legal</h4>
          <ul className="mt-3 text-sm text-gray-600 space-y-2">
            <li><a href="#" className="hover:text-indigo-600">Privacy</a></li>
            <li><a href="#" className="hover:text-indigo-600">Terms</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t py-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} BrightBiz — All rights reserved.</div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
