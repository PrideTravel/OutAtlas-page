"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function BetaSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-[60vh] bg-midnight flex items-center justify-center p-6 md:p-12 overflow-hidden">
      
      {/* Background glow for submitted state */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pride-violet/10 rounded-full blur-[100px] pointer-events-none"
          />
        )}
      </AnimatePresence>

      <motion.div 
        animate={submitted ? { y: -20, opacity: 0.8, scale: 1.05 } : { y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl mx-auto text-center relative z-10"
      >
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                Ready for Takeoff.
              </h2>
              <p className="text-neutral-400 font-mono text-lg">
                Travel without the friction. Join the Beta Flight today.
              </p>
              
              <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto mt-12 flex items-center group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-full px-8 py-5 pr-32 outline-none focus:border-pride-violet focus:ring-1 focus:ring-pride-violet transition-all text-lg font-mono placeholder-neutral-600 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                />
                <button
                  type="submit"
                  disabled={!email}
                  className="absolute right-2 top-2 bottom-2 bg-white text-midnight font-bold px-6 py-2 rounded-full flex items-center space-x-2 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 group-focus-within:bg-pride-violet group-focus-within:text-white"
                >
                  <span>Join</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-neutral-900/40 border border-pride-violet/30 p-12 rounded-4xl backdrop-blur-md flex flex-col items-center justify-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
              >
                <CheckCircle2 className="w-16 h-16 text-pride-violet" />
              </motion.div>
              <h3 className="text-3xl font-black text-white">You're on the manifest.</h3>
              <p className="text-neutral-400 font-mono text-lg">
                We'll notify {email} when the engines spin up.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
