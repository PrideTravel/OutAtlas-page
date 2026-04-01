"use client";

import { motion } from "framer-motion";
import { Globe, Heart, CheckCircle2, HandHeart, Sparkles, MapPin } from "lucide-react";

export default function MissionStats() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-midnight relative overflow-hidden">
      
      {/* Background blur accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-pride-orange/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center">
        
        {/* Top Text Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl text-center space-y-8"
        >
          <div className="text-4xl hover:scale-110 transition-transform">🏳️‍🌈</div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white px-2 tracking-tighter">
            Made for us.<br className="md:hidden" /> By us.
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-mono leading-relaxed mt-8 max-w-3xl mx-auto">
            Travel should feel like freedom, not a research project. OutAtlas exists because the LGBTQ+ community deserves a travel tool that actually gets us: where we feel safe, where we're celebrated, and how we actually plan trips (hint: it involves a group chat that goes nowhere for three weeks).
          </p>
          <p className="text-lg md:text-xl text-neutral-400 font-mono leading-relaxed mt-4 max-w-3xl mx-auto">
            Whether you're heading to WorldPride Amsterdam, Fire Island for Bear Week, or just exploring a new city with your partner, OutAtlas is your guide.
          </p>
        </motion.div>

        {/* Info Banner - Removed card borders */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="mt-16 flex flex-col md:flex-row items-center gap-6 max-w-3xl text-center md:text-left"
        >
          <div className="bg-pride-teal/10 p-4 rounded-full">
             <CheckCircle2 className="w-8 h-8 text-pride-teal" />
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-relaxed">
              Every destination includes an LGBTQ+ Equality and Safety Index, powered by <span className="text-pride-teal underline underline-offset-4 pointer-events-none">Equaldex</span>.
            </p>
            <p className="text-neutral-400 font-mono text-sm mt-2">
              No more guessing whether a city is safe to hold your partner's hand.
            </p>
          </div>
        </motion.div>

        {/* Grid Stats - Removed grid borders */}
        <div className="w-full mt-32">
          <h3 className="text-center text-3xl font-black mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pride-violet to-pride-orange">
            Join the Beta and Help Us Build This 🏳️‍🌈
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 divide-y md:divide-y-0 md:divide-x divide-neutral-900/50">
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="flex flex-col items-center text-center group py-8 lg:py-0"
            >
               <Globe className="w-10 h-10 text-pride-orange mb-6 group-hover:scale-110 transition-transform" />
               <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">85+</div>
               <div className="text-sm font-mono text-neutral-400 max-w-[200px]">Curated LGBTQ+ destinations around the world</div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="flex flex-col items-center text-center group py-8 lg:py-0"
            >
               <Sparkles className="w-10 h-10 text-pride-violet mb-6 group-hover:scale-110 transition-transform" />
               <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">100%</div>
               <div className="text-sm font-mono text-neutral-400 max-w-[200px]">Free to beta test. No credit card, no strings attached.</div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="flex flex-col items-center text-center group py-8 lg:py-0"
            >
               <MapPin className="w-10 h-10 text-pride-teal mb-6 group-hover:scale-110 transition-transform" />
               <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">400+</div>
               <div className="text-sm font-mono text-neutral-400 max-w-[200px]">LGBTQ+ Tours already inside the app</div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="flex flex-col items-center text-center group py-8 lg:py-0"
            >
               <Heart className="w-10 h-10 text-neutral-300 mb-6 group-hover:scale-110 transition-transform" />
               <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">1,2k+</div>
               <div className="text-sm font-mono text-neutral-400 max-w-[200px]">LGBTQ+-Owned or Verified Hotels &amp; 500+ Events Listed</div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
