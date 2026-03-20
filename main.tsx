/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { Camera, ChevronRight, Instagram, Mail, Menu, ShoppingBag, Twitter, X } from 'lucide-react';
import { useState, useRef } from 'react';
import { PHOTOS } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('work');
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <div className="min-h-screen bg-robinhood-black text-white selection:bg-robinhood-green selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-robinhood-green rounded-full flex items-center justify-center">
              <Camera className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">GARCHA</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            <button 
              onClick={() => setActiveTab('work')}
              className={`transition-colors ${activeTab === 'work' ? 'text-robinhood-green' : 'text-white/60 hover:text-white'}`}
            >
              Work
            </button>
            <button 
              onClick={() => setActiveTab('store')}
              className={`transition-colors flex items-center gap-2 ${activeTab === 'store' ? 'text-robinhood-green' : 'text-white/60 hover:text-white'}`}
            >
              Store <span className="text-[10px] bg-robinhood-green text-white px-1.5 py-0.5 rounded-full">NEW</span>
            </button>
            <a href="#about" className="text-white/60 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a>
            <button className="bg-white text-black px-6 py-2.5 rounded-full hover:bg-robinhood-green hover:text-white transition-all active:scale-95">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-8 text-2xl font-bold">
            <button onClick={() => { setActiveTab('work'); setIsMenuOpen(false); }}>Work</button>
            <button onClick={() => { setActiveTab('store'); setIsMenuOpen(false); }}>Store</button>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <button className="bg-robinhood-green text-white px-8 py-4 rounded-full text-lg">
              Hire Me
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <header ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ opacity, scale, y }}
          className="text-center z-10 px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-robinhood-green/10 text-robinhood-green rounded-full text-sm font-bold mb-6"
          >
            PHOTOGRAPHY PORTFOLIO
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8"
          >
            Invest in <br />
            <span className="text-robinhood-green italic">Memories.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl mx-auto text-white/50 text-lg md:text-xl mb-10 leading-relaxed"
          >
            Capturing the world through a lens of precision and emotion. 
            Professional photography for brands, people, and places.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => setActiveTab('work')}
              className="w-full sm:w-auto bg-robinhood-green text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-robinhood-green/20 transition-all active:scale-95"
            >
              View Portfolio
            </button>
            <button 
              onClick={() => setActiveTab('store')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 font-bold text-lg hover:text-robinhood-green transition-colors group"
            >
              Visit Store <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-0 pointer-events-none opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-robinhood-green blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 blur-[150px] rounded-full animate-pulse delay-700" />
        </div>
      </header>

      {/* Stats Section */}
      <section className="bg-white/5 border-y border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-display font-bold text-robinhood-green mb-2">500+</div>
              <div className="text-white/40 text-sm uppercase tracking-widest font-bold">Photos Taken</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-display font-bold text-robinhood-green mb-2">120+</div>
              <div className="text-white/40 text-sm uppercase tracking-widest font-bold">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-display font-bold text-robinhood-green mb-2">15</div>
              <div className="text-white/40 text-sm uppercase tracking-widest font-bold">Countries Visited</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-display font-bold text-robinhood-green mb-2">24/7</div>
              <div className="text-white/40 text-sm uppercase tracking-widest font-bold">Creative Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="min-h-screen">
        {activeTab === 'work' ? (
          /* Portfolio Grid */
          <section id="work" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div>
                  <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4">Selected Works</h2>
                  <p className="text-white/50 text-xl max-w-md">A curated collection of my best moments captured across the globe.</p>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-2 rounded-full border border-white/10 font-bold hover:border-robinhood-green transition-colors">All</button>
                  <button className="px-6 py-2 rounded-full border border-white/10 font-bold hover:border-robinhood-green transition-colors">Nature</button>
                  <button className="px-6 py-2 rounded-full border border-white/10 font-bold hover:border-robinhood-green transition-colors">Street</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PHOTOS.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white/5 mb-4">
                      <img 
                        src={photo.url} 
                        alt={photo.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white text-black px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                          View Details
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg">{photo.title}</h3>
                        <p className="text-white/40 text-sm">{photo.category}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-robinhood-green group-hover:border-robinhood-green transition-all">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          /* Store Section */
          <section id="store" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div>
                  <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-robinhood-green">Print Store</h2>
                  <p className="text-white/50 text-xl max-w-md">Bring a piece of the world into your home with high-quality gallery prints.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                  <ShoppingBag className="text-robinhood-green" />
                  <span className="font-bold">Free worldwide shipping on orders over $150</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {PHOTOS.map((photo, index) => (
                  <motion.div
                    key={`store-${photo.id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 rounded-[2.5rem] p-6 border border-white/5 hover:border-robinhood-green/50 transition-all group"
                  >
                    <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                      <img 
                        src={photo.url} 
                        alt={photo.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-display font-bold mb-1">{photo.title}</h3>
                        <p className="text-white/40 text-sm uppercase tracking-widest font-bold">{photo.category}</p>
                      </div>
                      <div className="text-2xl font-display font-bold text-robinhood-green">
                        ${photo.price}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <button className="w-full bg-robinhood-green text-white py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-robinhood-green/20 transition-all active:scale-[0.98]">
                        Add to Cart
                      </button>
                      <button className="w-full bg-white/5 text-white py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                        Print Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* About Section */}
      <section id="about" className="py-32 bg-white/5 border-y border-white/10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-black p-12 rounded-[2.5rem] shadow-sm border border-white/10 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8">The Artist Behind <br />The Lens</h2>
                <p className="text-white/60 text-xl leading-relaxed mb-8">
                  Based in the heart of the Pacific Northwest, I've spent the last decade exploring the intersection of light and storytelling. My work is inspired by the raw beauty of nature and the quiet moments of urban life.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {['Portrait', 'Landscape', 'Commercial', 'Street', 'Event'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/10 rounded-full text-sm font-bold text-white/80">{skill}</span>
                ))}
              </div>
            </div>
            <div className="md:col-span-4 bg-robinhood-green p-12 rounded-[2.5rem] text-white flex flex-col justify-between">
              <div className="text-6xl font-display font-bold mb-4">10y</div>
              <p className="font-bold text-xl leading-tight">Years of professional experience in digital and film photography.</p>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/80 text-sm uppercase tracking-widest font-bold mb-4">Equipped with</p>
                <p className="font-bold">Sony A7R IV + Leica M11</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-24 text-center relative">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter mb-8">
              Ready to <span className="text-robinhood-green">capture?</span>
            </h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto mb-12">
              Let's collaborate on your next project. Whether it's a brand campaign or a personal session, I'm here to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-robinhood-green text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-xl hover:shadow-robinhood-green/20 transition-all active:scale-95">
                Get in Touch
              </button>
              <a href="mailto:hello@garcha.com" className="text-white font-bold text-xl flex items-center gap-2 hover:text-robinhood-green transition-colors">
                <Mail className="w-6 h-6" /> hello@garcha.com
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-robinhood-green/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-robinhood-green rounded-full flex items-center justify-center">
              <Camera className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">GARCHA</span>
          </div>
          
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="text-white/60 hover:text-robinhood-green transition-colors">Instagram</a>
            <a href="#" className="text-white/60 hover:text-robinhood-green transition-colors">Twitter</a>
            <a href="#" className="text-white/60 hover:text-robinhood-green transition-colors">Unsplash</a>
            <a href="#" className="text-white/60 hover:text-robinhood-green transition-colors">LinkedIn</a>
          </div>

          <div className="text-white/20 text-sm">
            © 2026 Garcha Photography. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
