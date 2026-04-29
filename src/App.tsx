import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, Menu, X, Play, Instagram, Youtube, Twitter } from 'lucide-react';
import ThreeCan from './components/ThreeCan';
import { FLAVORS, LIFESTYLE_CONTENT } from './constants';
import { cn } from './lib/utils';

export default function App() {
  const [activeFlavor, setActiveFlavor] = useState(FLAVORS[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [location, setLocation] = useState<string | null>(null);

  React.useEffect(() => {
    if ("geolocation" in navigator) {
      const timeout = setTimeout(() => {
        setLocation("London Grid 01");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className="min-h-screen bg-monster-black overflow-hidden bg-grid relative font-sans selection:bg-monster-green selection:text-black">
      {/* Login Modal */}
      <AnimatePresence>
        {showLogin && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowLogin(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-monster-gray border border-white/10 p-12 max-w-md w-full"
            >
              <button 
                onClick={() => setShowLogin(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h2 className="text-4xl mb-8">Army Access</h2>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 mb-2 block">Soldier ID (Email)</label>
                  <input type="text" className="w-full bg-black/40 border border-white/5 p-4 focus:border-monster-green outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 mb-2 block">Passcode</label>
                  <input type="password" className="w-full bg-black/40 border border-white/5 p-4 focus:border-monster-green outline-none transition-colors" />
                </div>
                <button className="w-full bg-monster-green text-black py-4 font-black uppercase text-sm tracking-widest hover:scale-[1.02] transition-transform">
                  Deploy
                </button>
                <p className="text-[10px] text-center text-white/20 uppercase tracking-widest">
                  Not a member? <span className="text-monster-green cursor-pointer">Register now</span>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Geolocation Banner */}
      <AnimatePresence>
        {location && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="fixed top-0 left-0 w-full z-[60] bg-monster-green text-black px-6 py-2 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-4 overflow-hidden"
          >
            <span className="animate-pulse">Live Event Detected: Monster Energy Unleashed</span>
            <span className="opacity-40">|</span>
            <span>Location: {location}</span>
            <span className="opacity-40">|</span>
            <a href="#" className="underline hover:no-underline">Join Stream</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={cn(
        "fixed left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-monster-black/80 backdrop-blur-md border-b border-white/5 transition-all duration-300",
        location ? "top-[32px]" : "top-0"
      )}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-monster-green flex items-center justify-center rounded-sm">
            <span className="text-black font-black text-2xl tracking-tighter">M</span>
          </div>
          <span className="font-display font-black text-2xl tracking-tighter uppercase hidden sm:block">Monster</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-white/60">
          <a href="#" className="hover:text-monster-green transition-colors">Products</a>
          <a href="#" className="hover:text-monster-green transition-colors">Lifestyle</a>
          <a href="#" className="hover:text-monster-green transition-colors">Events</a>
          <button onClick={() => setShowLogin(true)} className="hover:text-monster-green transition-colors cursor-pointer">Army Access</button>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-monster-green text-black px-6 py-2 font-bold uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-transform hidden sm:block">
            Unleash the Beast
          </button>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-monster-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl font-display uppercase italic hover:text-monster-green transition-colors">Products</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl font-display uppercase italic hover:text-monster-green transition-colors">Lifestyle</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl font-display uppercase italic hover:text-monster-green transition-colors">Events</a>
            <a href="#" onClick={() => { setIsMenuOpen(false); setShowLogin(true); }} className="text-4xl font-display uppercase italic hover:text-monster-green transition-colors">Army Access</a>
            <button className="bg-monster-green text-black px-12 py-4 font-black uppercase text-sm tracking-widest mt-8">
              Unleash the Beast
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="text-monster-green font-display font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Global Energy Movement
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 leading-[0.8] mix-blend-difference">
              UNLEASH THE <br />
              <span className="text-monster-green text-glow">BEAST</span>
            </h1>
            <p className="text-white/60 max-w-md text-lg mb-8 leading-relaxed">
              Tearing into a can of the meanest energy drink on the planet. 
              The world's most aggressive athletes, gamers, and artists call 
              this their fuel.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 bg-white text-black px-8 py-4 font-black uppercase text-sm tracking-widest group">
                Find a flavor
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-3 bg-transparent border border-white/20 hover:border-monster-green text-white px-8 py-4 font-black uppercase text-sm tracking-widest group">
                <Play className="w-4 h-4 fill-current" />
                Watch Action
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[600px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            <div className="absolute inset-0 bg-monster-green/5 blur-[120px] rounded-full scale-75" />
            <ThreeCan color={activeFlavor.color} />
            
            {/* Background Text */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 uppercase select-none pointer-events-none">
              Monster
            </div>
          </motion.div>
        </div>

        {/* Floating Social Icons */}
        <div className="absolute right-6 bottom-12 hidden md:flex flex-col gap-6">
          <Twitter className="w-5 h-5 text-white/40 hover:text-monster-green cursor-pointer transition-colors" />
          <Youtube className="w-5 h-5 text-white/40 hover:text-monster-green cursor-pointer transition-colors" />
          <Instagram className="w-5 h-5 text-white/40 hover:text-monster-green cursor-pointer transition-colors" />
          <div className="w-[1px] h-20 bg-white/10 mx-auto" />
          <span className="writing-vertical-lr text-[10px] uppercase tracking-[0.5em] text-white/20 py-2">Follow Us</span>
        </div>
      </section>

      {/* Flavor Explorer */}
      <section className="py-24 px-6 bg-monster-black border-y border-white/5">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-6xl mb-2">Explore Flavors</h2>
              <p className="text-white/40">Find the perfect fuel for your journey.</p>
            </div>
            <div className="flex gap-2">
              {FLAVORS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFlavor(f)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeFlavor.id === f.id ? "scale-150" : "bg-white/20"
                  )}
                  style={{ backgroundColor: activeFlavor.id === f.id ? f.color : undefined }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FLAVORS.map((flavor, idx) => (
              <motion.div
                key={flavor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveFlavor(flavor)}
                className={cn(
                  "group relative p-8 h-[450px] flex flex-col justify-end overflow-hidden cursor-pointer transition-all duration-500",
                  activeFlavor.id === flavor.id ? "bg-white/5" : "bg-monster-gray/50 hover:bg-white/5"
                )}
              >
                <div 
                  className="absolute top-0 right-0 w-full h-full transition-opacity duration-700 opacity-20 group-hover:opacity-40 pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at top right, ${flavor.color}22, transparent)` 
                  }}
                />
                
                <div className="relative z-10">
                  <span 
                    className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block"
                    style={{ color: flavor.color }}
                  >
                    Flavor {idx + 1}
                  </span>
                  <h3 className="text-3xl mb-4 group-hover:text-glow transition-all">
                    {flavor.name}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6 group-hover:text-white/60 transition-colors">
                    {flavor.description}
                  </p>
                  <div className="w-10 h-[2px] bg-white/20 group-hover:w-full transition-all duration-500" style={{ backgroundColor: flavor.color }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Bento */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl mb-4">The Lifestyle</h2>
            <p className="text-white/40 max-w-2xl mx-auto italic">
              "It's not just a drink, it's a way of life."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[900px] md:h-[600px]">
            {LIFESTYLE_CONTENT.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "relative group overflow-hidden bg-monster-gray rounded-sm cursor-pointer",
                  idx === 0 ? "md:col-span-8" : idx === 1 ? "md:col-span-4" : idx === 2 ? "md:col-span-4" : "md:col-span-8"
                )}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 p-0 group-hover:translate-x-2 transition-transform">
                  <span className="text-monster-green text-[10px] font-bold uppercase tracking-[0.4em] mb-2 block">
                    {item.category}
                  </span>
                  <h4 className="text-3xl font-display uppercase italic">{item.title}</h4>
                </div>
                <div className="absolute top-6 right-6 w-12 h-12 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monster Army Member Area */}
      <section className="py-24 px-6 bg-monster-green text-black">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl mb-8 font-black">Monster Army</h2>
            <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto leading-tight italic">
              Join the elite squad. Get exclusive access to athlete drops, event VIPs, 
              and the rarest flavors before they hit the streets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email to deploy"
                className="bg-black/10 border-b-2 border-black/40 px-6 py-4 text-black placeholder:text-black/40 focus:outline-none focus:border-black transition-colors w-full sm:w-80"
              />
              <button className="bg-black text-monster-green px-12 py-4 font-black uppercase text-sm tracking-[0.2em] hover:scale-105 active:scale-95 transition-transform">
                Join the Core
              </button>
            </div>
            <p className="mt-8 text-xs font-bold uppercase tracking-widest opacity-60">
              By joining, you agree to unleash the beast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-monster-black py-16 px-6 border-t border-white/5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-monster-green flex items-center justify-center rounded-sm">
                  <span className="text-black font-black text-xl tracking-tighter">M</span>
                </div>
                <span className="font-display font-black text-xl tracking-tighter uppercase">Monster Energy</span>
              </div>
              <p className="text-white/40 max-w-sm mb-8 text-sm">
                Monster Energy is more than an energy drink, it is a lifestyle in a can. 
                Belong to something bigger. Unleash the beast within.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:border-monster-green transition-colors cursor-pointer group">
                   <Instagram className="w-4 h-4 group-hover:text-monster-green" />
                </div>
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:border-monster-green transition-colors cursor-pointer group">
                   <Youtube className="w-4 h-4 group-hover:text-monster-green" />
                </div>
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:border-monster-green transition-colors cursor-pointer group">
                   <Twitter className="w-4 h-4 group-hover:text-monster-green" />
                </div>
              </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-6">Products</h4>
            <ul className="space-y-4 text-sm text-white/40 font-bold uppercase">
              <li className="hover:text-monster-green transition-colors cursor-pointer">Monster Energy</li>
              <li className="hover:text-monster-green transition-colors cursor-pointer">Rehab Monster</li>
              <li className="hover:text-monster-green transition-colors cursor-pointer">Java Monster</li>
              <li className="hover:text-monster-green transition-colors cursor-pointer">Juice Monster</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-white/40 font-bold uppercase">
              <li className="hover:text-monster-green transition-colors cursor-pointer">Contact Us</li>
              <li className="hover:text-monster-green transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-monster-green transition-colors cursor-pointer">Terms of Use</li>
              <li className="hover:text-monster-green transition-colors cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-[10px] font-bold uppercase tracking-widest">
           <span>© 2026 Monster Energy Company. All rights reserved.</span>
           <div className="flex gap-8">
              <span>Privacy</span>
              <span>Accessibility</span>
              <span>Global Presence</span>
           </div>
        </div>
      </footer>
    </div>
  );
}
