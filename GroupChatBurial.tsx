"use client";

import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";

export default function GroupChatBurial() {
  return (
    <section className="bg-midnight relative overflow-hidden flex flex-col items-center pt-32 pb-48 px-6">
      
      {/* Background visual flair */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pride-violet/10 rounded-[100%] blur-[120px] pointer-events-none" />

      {/* Layer 1: The Messy Group Chat (Background) */}
      <div className="w-full max-w-5xl flex flex-col items-center relative z-10 pb-[400px]">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="text-center flex flex-col items-center"
        >
          <div className="font-mono text-pride-violet text-sm tracking-widest uppercase border-b border-pride-violet pb-2 mb-6">
             The Old Way
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white tracking-tighter max-w-2xl px-4">
            Stop searching for that one screenshot from three months ago.
          </h2>
        </motion.div>
        
        <div className="relative w-full max-w-lg h-96 opacity-60">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute top-0 left-0 lg:-left-20 bg-neutral-800 text-neutral-300 p-5 rounded-3xl rounded-tl-sm shadow-xl tilt-left border border-neutral-700"
          >
            "Wait, who actually booked the Airbnb?"
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-28 right-0 lg:-right-20 bg-pride-violet text-white p-5 rounded-3xl rounded-tr-sm shadow-xl tilt-right"
          >
            "Here is the code, don't lose it this time!"
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-52 left-10 lg:-left-10 bg-neutral-800 text-neutral-300 p-5 rounded-3xl rounded-tl-sm shadow-xl border border-neutral-700"
          >
            *Sends 4 consecutive screenshots of Yelp reviews*
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-10 right-10 lg:-right-10 bg-pride-teal text-white p-5 rounded-3xl rounded-br-sm shadow-xl tilt-right"
          >
            "Are we still doing the boat tour on Friday?"
          </motion.div>
        </div>
      </div>

      {/* Layer 2: The Shared Board Sliding Up Over The Chat */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 1, type: "spring", bounce: 0.2 }}
        className="w-full max-w-5xl z-20 -mt-[400px] flex justify-center px-4"
      >
        <div className="w-full bg-[#0a0a0a] border border-neutral-700 shadow-2xl drop-shadow-[0_0_80px_rgba(139,92,246,0.3)] rounded-[40px] p-6 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pride-violet/10 via-midnight to-pride-teal/5 pointer-events-none" />
          
          <h3 className="text-3xl lg:text-5xl font-black mb-12 text-white tracking-tighter relative z-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            Hong Kong Trip 
            <span className="text-neutral-500 font-mono text-base lg:text-xl font-normal tracking-wide border border-neutral-800 bg-neutral-900 rounded-full px-4 py-1.5 align-middle">
               Shared Board
            </span>
          </h3>
          
          <div className="w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Item 1 */}
            <div className="flex flex-col sm:flex-row sm:items-center p-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md hover:border-pride-orange/50 transition-colors group">
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-pride-orange/10 items-center justify-center text-pride-orange mr-4 shrink-0 font-bold text-xs tracking-widest">EVT</div>
              <div className="flex-1 mb-2 sm:mb-0">
                <div className="text-white font-bold text-lg leading-tight">Floatilla Hong Kong</div>
                <div className="text-neutral-500 font-mono text-xs mt-1">Saved by DL • EVENT</div>
              </div>
              <Bookmark className="w-5 h-5 text-neutral-600 sm:ml-auto opacity-50 group-hover:opacity-100" />
            </div>

            {/* Item 2 */}
            <div className="flex flex-col sm:flex-row sm:items-center p-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md hover:border-pride-violet/50 transition-colors group">
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-pride-violet/10 items-center justify-center text-pride-violet mr-4 shrink-0 font-bold text-xs tracking-widest">NGL</div>
              <div className="flex-1 mb-2 sm:mb-0">
                <div className="text-white font-bold text-lg leading-tight">Bar 7</div>
                <div className="text-neutral-500 font-mono text-xs mt-1">Saved by TM • NIGHTLIFE</div>
              </div>
              <Bookmark className="w-5 h-5 text-neutral-600 sm:ml-auto opacity-50 group-hover:opacity-100" />
            </div>

            {/* Item 3 */}
            <div className="flex flex-col sm:flex-row sm:items-center p-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md hover:border-pride-teal/50 transition-colors group">
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-pride-teal/10 items-center justify-center text-pride-teal mr-4 shrink-0 font-bold text-xs tracking-widest">BCH</div>
              <div className="flex-1 mb-2 sm:mb-0">
                <div className="text-white font-bold text-lg leading-tight">Middle Bay Beach</div>
                <div className="text-neutral-500 font-mono text-xs mt-1">Saved by TM • BEACH</div>
              </div>
              <Bookmark className="w-5 h-5 text-neutral-600 sm:ml-auto opacity-50 group-hover:opacity-100" />
            </div>

            {/* Item 4 */}
            <div className="flex flex-col sm:flex-row sm:items-center p-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md hover:border-white/50 transition-colors group">
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-neutral-800 items-center justify-center text-white mr-4 shrink-0 font-bold text-xs tracking-widest">TR</div>
              <div className="flex-1 mb-2 sm:mb-0">
                <div className="text-white font-bold text-lg leading-tight">Queer Art & Culture Walk</div>
                <div className="text-neutral-500 font-mono text-xs mt-1">Group Vote • TOURS</div>
              </div>
              <Bookmark className="w-5 h-5 text-neutral-600 sm:ml-auto opacity-50 group-hover:opacity-100" />
            </div>

            {/* Item 5 */}
            <div className="flex flex-col sm:flex-row sm:items-center p-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md hover:border-pride-orange/50 transition-colors group">
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-pride-orange/10 items-center justify-center text-pride-orange mr-4 shrink-0 font-bold text-xs tracking-widest">STR</div>
              <div className="flex-1 mb-2 sm:mb-0">
                <div className="text-white font-bold text-lg leading-tight">Addicted</div>
                <div className="text-neutral-500 font-mono text-xs mt-1">Saved • STORE</div>
              </div>
              <Bookmark className="w-5 h-5 text-neutral-600 sm:ml-auto opacity-50 group-hover:opacity-100" />
            </div>

            {/* Item 6 */}
            <div className="flex flex-col sm:flex-row sm:items-center p-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md hover:border-pride-violet/50 transition-colors group">
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-pride-violet/10 items-center justify-center text-pride-violet mr-4 shrink-0 font-bold text-xs tracking-widest">HTL</div>
              <div className="flex-1 mb-2 sm:mb-0">
                <div className="text-white font-bold text-lg leading-tight">The Murray, Hong Kong</div>
                <div className="text-neutral-500 font-mono text-xs mt-1">Accommodation • HOTEL</div>
              </div>
              <Bookmark className="w-5 h-5 text-neutral-600 sm:ml-auto opacity-50 group-hover:opacity-100" />
            </div>

            {/* Item 7 */}
            <div className="flex flex-col sm:flex-row sm:items-center p-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md hover:border-pride-teal/50 transition-colors md:col-span-2 md:max-w-md md:justify-self-center lg:col-span-1 lg:max-w-none w-full group">
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-pride-teal/10 items-center justify-center text-pride-teal mr-4 shrink-0 font-bold text-xs tracking-widest">DINE</div>
              <div className="flex-1 mb-2 sm:mb-0">
                <div className="text-white font-bold text-lg leading-tight">Queenz Restaurant</div>
                <div className="text-neutral-500 font-mono text-xs mt-1">Saved • DINING</div>
              </div>
              <Bookmark className="w-5 h-5 text-neutral-600 sm:ml-auto opacity-50 group-hover:opacity-100" />
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
