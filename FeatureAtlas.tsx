"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ShieldAlert, Users, Compass, ChevronRight } from "lucide-react";

const features = [
  {
    id: "vault",
    title: "Save My Trip",
    description: "Bookmark hotels, underground bars, and 'Safe Space' restaurants securely.",
    icon: <Compass className="w-8 h-8 text-white" />,
    header: "Live Sync Active",
    hoverData: [
      { spot: "Le Marais Cafe (Safe Space)" },
      { spot: "Hidden Speakeasy" }
    ]
  },
  {
    id: "collab",
    title: "The Collaborator",
    description: "Share trips with friends and edit in real-time. End the 'Who's booking the Airbnb?' debate.",
    icon: <Users className="w-8 h-8 text-white" />,
    header: "Live Sync Active",
    hoverData: [
      { spot: "Booked Airbnb (Confirmed by Alex)" },
      { spot: "Added 2 Restaurants (Jamie)" }
    ]
  },
  {
    id: "harbor",
    title: "LGBTQ Equality Index",
    description: "Curated resources for LGBTQ+ safety, vetted tours, and affirming beaches.",
    icon: <ShieldAlert className="w-8 h-8 text-white" />,
    header: "Excellent Inclusivity",
    hoverData: [
      { spot: "Mexico: Safe in tourist areas. Same-sex marriage is legal nationwide." },
      { spot: "The Equality Index measures the current status of LGBT rights, laws, and freedoms as well as public attitudes towards LGBT people." }
    ]
  }
];

export default function FeatureAtlas() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <section 
      className="py-32 px-6 md:px-12 lg:px-24 relative z-30"
      style={{
        background: "linear-gradient(135deg, #FF0018 0%, #FFA52C 20%, #FFFF41 40%, #008018 60%, #0000F9 80%, #86007D 100%)"
      }}
    >
      <div className="absolute inset-0 bg-black/20 pointer-events-none mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start relative z-10">
        
        {/* Left Side: Headlines and List */}
        <div className="lg:w-1/2 flex flex-col space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white drop-shadow-xl mb-8 tracking-tighter"
          >
            The Feature Atlas
          </motion.h2>
          
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`relative p-6 -ml-6 rounded-2xl cursor-crosshair transition-all duration-300 hover:bg-black/60 bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden group shadow-2xl`}
              >
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-white/10 rounded-2xl shadow-xl backdrop-blur-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center drop-shadow-md">
                      {feature.title}
                      <ChevronRight className="w-5 h-5 ml-2 text-white/50 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-white/80 font-mono text-sm leading-relaxed max-w-sm drop-shadow-md">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Interactive Preview Frame */}
        <div className="lg:w-1/2 h-full min-h-[500px] sticky top-32 lg:top-1/4 rounded-[40px] bg-black/40 backdrop-blur-2xl border border-white/20 p-8 flex items-center justify-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative z-10 w-full drop-shadow-2xl">
            <motion.div
              initial={false}
              animate={{ opacity: hoveredFeature ? 1 : 0.8, scale: hoveredFeature ? 1 : 0.95 }}
              className="w-full"
            >
              {!hoveredFeature ? (
                <div className="text-center py-12 px-6">
                  <h3 className="text-3xl font-black text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] tracking-tight">
                    Hover over a feature<br/>to explore the Atlas overlay.
                  </h3>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-6 border-b border-white/20 pb-4">
                    <div className="w-3 h-3 rounded-full bg-white animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                    <span className="text-sm font-mono text-white font-bold uppercase tracking-widest drop-shadow-md">
                      {features.find(f => f.id === hoveredFeature)?.header}
                    </span>
                  </div>
                  {features.find(f => f.id === hoveredFeature)?.hoverData.map((data, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex justify-start items-center p-6 bg-black/60 backdrop-blur-md rounded-2xl mb-3 border border-white/10"
                    >
                      <span className="font-bold text-white text-lg drop-shadow-md leading-relaxed">{data.spot}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
