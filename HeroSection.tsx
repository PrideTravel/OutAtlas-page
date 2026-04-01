"use client";

import { motion } from "framer-motion";

interface HeroSectionProps {
  heroMediaUrl?: string;
}

export default function HeroSection({ heroMediaUrl }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Background radial gradient accent */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-pride-violet/10 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Aligned Copy */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white"
          >
            Planning<br />
            shouldn't be<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pride-violet via-pride-orange to-pride-teal inline-block py-1">
              the hardest part
            </span><br />
            of your trip.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-mono text-foreground/70 mt-8 max-w-lg text-lg leading-relaxed"
          >
            Move your plans out of the group chat and into the world. OutAtlas is the first LGBTQ+ travel ecosystem that turns "where should we go?" into "we're here."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-12"
          >
            <button className="neon-glow group relative inline-flex items-center justify-center px-10 py-5 bg-white text-midnight font-bold tracking-wide rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 text-xl">
              <span className="relative z-10">Join the Beta Flight</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pride-violet/20 to-pride-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Right Floating Media */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-5 relative w-full flex flex-col items-center justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="relative w-full max-w-[400px] aspect-[9/19] drop-shadow-[0_0_80px_rgba(139,92,246,0.2)]"
          >
            {heroMediaUrl && heroMediaUrl.endsWith('.webm') ? (
               <video 
                 src={heroMediaUrl} 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-contain drop-shadow-2xl mix-blend-screen"
               />
            ) : heroMediaUrl ? (
              <img src={heroMediaUrl} alt="OutAtlas Interface" className="w-full h-full object-contain drop-shadow-2xl" />
            ) : null}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 lg:mt-12 flex items-center space-x-3 font-mono text-sm lg:text-base tracking-widest text-[#3DDC84]"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#3DDC84] animate-pulse drop-shadow-[0_0_10px_rgba(61,220,132,0.8)]" />
            <span className="font-bold">ANDROID BETA &middot; NOW OPEN</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
