"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "Step One",
    title: "Search any destination",
    description: "Open OutAtlas and search by city, region, or country to explore 85+ curated LGBTQ+-friendly destinations. Each destination highlights the local queer scene, what it's known for, and what kind of traveler it fits best.",
    tags: ["🇳🇱 Amsterdam", "🇹🇭 Bangkok", "🇺🇸 Fire Island", "+ 82 more"],
    img: "https://outatlas.com/wp-content/uploads/2026/03/1.png"
  },
  {
    step: "Step Two",
    title: "See how welcoming a destination really is",
    description: 'OutAtlas gives you real context — powered by Equaldex data. Each destination includes a plain-language read on what the queer experience is actually like. Think: "Safe but discreet," "Openly welcoming," or "Growing queer community."',
    tags: ["🏘️ The Castro, SF", "🏘️ West Village, NYC", "🏘️ Shinjuku, Tokyo"],
    img: "https://outatlas.com/wp-content/uploads/2026/03/4.png"
  },
  {
    step: "Step Three",
    title: "Discover the full queer scene",
    description: "Every destination surfaces curated LGBTQ+-owned and verified venues across hotels, restaurants, bars, tours, and pride events. All filtered for the community. No more guessing which ones are actually queer-friendly.",
    tags: ["🏨 Hotels", "🍹 Bars", "🎒 Tours", "🍽️ Restaurants"],
    img: "https://outatlas.com/wp-content/uploads/2026/03/2.png"
  },
  {
    step: "Step Four",
    title: "Save spots and plan with your crew",
    description: "Bookmark hotels you love. Save restaurants that look perfect. Build your trip itinerary piece by piece. When ready, invite your travel crew directly in the app. Everyone gets access to the same plan, can add suggestions, vote on spots, and drop comments.",
    tags: ["🔖 Bookmarks", "👥 Invite crew", "💬 Comments"],
    img: "https://outatlas.com/wp-content/uploads/2026/04/Untitled-design.png"
  },
  {
    step: "Step Five",
    title: "Book through platforms you already trust",
    description: "OutAtlas doesn't ask you to abandon the booking platforms you already use. When you're ready, we tap you straight through to Google Flights, Expedia, Booking.com, Misterb&b, or Viator. Curated LGBTQ+-friendly options, one tap to book.",
    tags: ["✈️ Google Flights", "🏨 Expedia", "🏳️‍🌈 Misterb&b"],
    img: "https://outatlas.com/wp-content/uploads/2026/03/5.png"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-black px-6 md:px-12 lg:px-24">
      
      {/* Intro block matching the Group Chat Chaos image provided */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 mb-40">
        <div className="lg:w-1/2 flex flex-col items-start text-left z-10 space-y-6">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="font-mono text-white text-sm tracking-widest uppercase border-b border-pride-violet pb-2"
          >
             See How It Works
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter"
          >
            From "where should we go?"<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-700">
               to booked, in minutes.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 font-mono text-lg max-w-xl leading-relaxed"
          >
            OutAtlas was built for the way queer travelers actually plan trips — not how a generic travel app thinks we do.
          </motion.p>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
           whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="lg:w-1/2 relative w-full flex justify-center drop-shadow-2xl"
        >
           <img 
              src="https://outatlas.com/wp-content/uploads/2026/03/Group-Chat-Chaos-16-Messages-2-weekls-Phone-Wallpaper.png" 
              alt="Group Chat Chaos vs OutAtlas" 
              className="max-h-[700px] w-auto object-contain rounded-[40px]"
           />
        </motion.div>
      </div>

      {/* Narrative Steps List */}
      <div className="max-w-7xl mx-auto space-y-40">
        {steps.map((item, idx) => {
           const isEven = idx % 2 !== 0; // reverse order visually
           return (
             <div key={idx} className={`flex flex-col gap-12 lg:gap-24 lg:flex-row items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                
                {/* Step Text Side */}
                <motion.div 
                   initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.6 }}
                   className="lg:w-1/2 space-y-6"
                >
                   <div className="font-mono text-neutral-500 font-bold tracking-widest uppercase">
                     {item.step}
                   </div>
                   <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                     {item.title}
                   </h3>
                   <p className="text-lg text-neutral-400 font-mono leading-relaxed max-w-lg">
                     {item.description}
                   </p>
                   {/* Tags / Pills - Softened look */}
                   <div className="flex flex-wrap gap-3 mt-8">
                     {item.tags.map((tag, t_idx) => (
                       <div key={t_idx} className="bg-neutral-900/50 backdrop-blur-sm rounded-full px-5 py-2.5 font-mono text-sm text-neutral-300">
                         {tag}
                       </div>
                     ))}
                   </div>
                </motion.div>

                {/* Step Image Side */}
                <motion.div 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8, delay: 0.1 }}
                   className="lg:w-1/2 relative w-full flex justify-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                   <img 
                     src={item.img} 
                     alt={item.title} 
                     className="max-h-[600px] w-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
                   />
                </motion.div>
             </div>
           )
        })}
      </div>
    </section>
  );
}
