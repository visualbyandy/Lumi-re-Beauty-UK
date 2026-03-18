import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Truck, ShieldCheck, RefreshCcw, HelpCircle } from 'lucide-react';

export const AboutPage = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    className="max-w-4xl mx-auto py-20 px-4"
  >
    <h2 className="text-4xl font-serif mb-8 text-center">Our Story</h2>
    <div className="aspect-video mb-12 rounded-3xl overflow-hidden">
      <img 
        src="https://cdn.pixabay.com/photo/2026/03/16/21/22/21-22-52-519__340.jpg" 
        alt="Lumière Laboratory" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
      <p>
        Founded in the heart of London in 2020, <strong>LUMIÈRE</strong> was born from a simple yet powerful vision: 
        to bridge the gap between advanced dermatological science and the luxury beauty ritual.
      </p>
      <p>
        We believe that beauty is not just about appearance, but about the health and vitality of your skin. 
        Our team of experts travels the globe to source the most potent botanical extracts and combine them 
        with cutting-edge scientific breakthroughs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div className="text-center">
          <div className="text-3xl font-serif text-accent mb-2">100%</div>
          <p className="text-sm font-bold uppercase tracking-widest">Cruelty Free</p>
        </div>
        <div className="text-center">
          <div className="text-3xl font-serif text-accent mb-2">Science</div>
          <p className="text-sm font-bold uppercase tracking-widest">Backed Results</p>
        </div>
        <div className="text-center">
          <div className="text-3xl font-serif text-accent mb-2">Global</div>
          <p className="text-sm font-bold uppercase tracking-widest">Sourcing</p>
        </div>
      </div>
      <p>
        Today, Lumière is proud to be a leader in clean, high-performance beauty, serving thousands of 
        customers across the UK and beyond. Every product in our collection is a testament to our 
        commitment to quality, transparency, and elegance.
      </p>
    </div>
  </motion.div>
);

export const ContactPage = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    className="max-w-6xl mx-auto py-20 px-4"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-4xl font-serif mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-12">
          Have a question about our products or your order? Our beauty experts are here to help. 
          Fill out the form or reach us through our contact details.
        </p>
        
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gray-100 rounded-full"><Mail className="w-6 h-6 text-accent" /></div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest">Email Us</h4>
              <p className="text-gray-600">concierge@lumierebeauty.uk</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gray-100 rounded-full"><Phone className="w-6 h-6 text-accent" /></div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest">Call Us</h4>
              <p className="text-gray-600">+44 (0) 20 7946 0123</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gray-100 rounded-full"><MapPin className="w-6 h-6 text-accent" /></div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest">Visit Our Boutique</h4>
              <p className="text-gray-600">123 Mayfair Lane, London, W1K 4QX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f3f2ee] p-8 md:p-12 rounded-3xl">
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest">First Name</label>
              <input type="text" className="w-full p-3 bg-white rounded-xl border-none focus:ring-1 focus:ring-accent/30" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest">Last Name</label>
              <input type="text" className="w-full p-3 bg-white rounded-xl border-none focus:ring-1 focus:ring-accent/30" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest">Email Address</label>
            <input type="email" className="w-full p-3 bg-white rounded-xl border-none focus:ring-1 focus:ring-accent/30" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest">Message</label>
            <textarea rows={5} className="w-full p-3 bg-white rounded-xl border-none focus:ring-1 focus:ring-accent/30"></textarea>
          </div>
          <button className="w-full bg-ink text-black py-4 rounded-full font-medium hover:bg-ink/90 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </motion.div>
);

export const ShippingPage = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    className="max-w-4xl mx-auto py-20 px-4"
  >
    <h2 className="text-4xl font-serif mb-12 text-center">Shipping & Returns</h2>
    
    <div className="space-y-16">
      <section>
        <div className="flex items-center gap-4 mb-6">
          <Truck className="w-8 h-8 text-accent" />
          <h3 className="text-2xl font-serif">Delivery Options</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-100 rounded-2xl">
            <h4 className="font-bold mb-2">Standard Delivery</h4>
            <p className="text-sm text-gray-600 mb-4">3-5 Working Days</p>
            <p className="font-serif text-accent">£4.95 (FREE over £50)</p>
          </div>
          <div className="p-6 border border-gray-100 rounded-2xl">
            <h4 className="font-bold mb-2">Express Delivery</h4>
            <p className="text-sm text-gray-600 mb-4">Next Working Day</p>
            <p className="font-serif text-accent">£8.50</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-6">
          <RefreshCcw className="w-8 h-8 text-accent" />
          <h3 className="text-2xl font-serif">Returns Policy</h3>
        </div>
        <div className="prose prose-sm text-gray-600 space-y-4">
          <p>
            We want you to be completely satisfied with your Lumière purchase. If for any reason you are not, 
            we offer a <strong>30-day return policy</strong> for all unused and unopened products.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Products must be in their original packaging with seals intact.</li>
            <li>Returns are processed within 5-7 working days of receipt.</li>
            <li>Refunds will be issued to the original payment method.</li>
            <li>For hygiene reasons, opened beauty products cannot be returned unless faulty.</li>
          </ul>
        </div>
      </section>

      <section className="bg-[#f3f2ee] p-8 rounded-3xl flex items-center gap-6">
        <ShieldCheck className="w-12 h-12 text-accent flex-shrink-0" />
        <div>
          <h4 className="font-bold mb-1">Safe & Secure</h4>
          <p className="text-sm text-gray-600">All our shipments are fully insured and tracked for your peace of mind.</p>
        </div>
      </section>
    </div>
  </motion.div>
);

export const FAQPage = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    className="max-w-3xl mx-auto py-20 px-4"
  >
    <h2 className="text-4xl font-serif mb-4 text-center">Frequently Asked Questions</h2>
    <p className="text-gray-500 text-center mb-16">Everything you need to know about Lumière products and services.</p>
    
    <div className="space-y-6">
      {[
        {
          q: "Are your products suitable for sensitive skin?",
          a: "Yes, the majority of our products are formulated with sensitive skin in mind. However, we always recommend checking the full ingredient list and performing a patch test before full application."
        },
        {
          q: "Do you test on animals?",
          a: "Absolutely not. Lumière is 100% cruelty-free. We do not test our finished products or ingredients on animals, nor do we work with suppliers who do."
        },
        {
          q: "How can I track my order?",
          a: "Once your order is dispatched, you will receive an email with a tracking number and a link to our courier's website where you can monitor your delivery."
        },
        {
          q: "Can I change my delivery address after ordering?",
          a: "We process orders quickly, but if you contact our concierge team within 1 hour of placing your order, we will do our best to update your details."
        },
        {
          q: "Are your packagings recyclable?",
          a: "Sustainability is at our core. 95% of our packaging is recyclable, and we are working towards 100% by the end of 2026. Please check the symbols on each product for specific disposal instructions."
        }
      ].map((item, i) => (
        <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <div className="flex gap-4">
            <HelpCircle className="w-6 h-6 text-accent flex-shrink-0" />
            <div>
              <h4 className="font-bold mb-2">{item.q}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);
