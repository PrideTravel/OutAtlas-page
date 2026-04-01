"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is OutAtlas?",
    answer: "OutAtlas is a free LGBTQ+ travel app designed by and for the queer community. It helps gay, lesbian, bisexual, transgender, and non-binary travelers find safe destinations, queer-friendly hotels, restaurants, bars, tours, pride events, and community resources — all with an Equality and Safety Index score for every destination. OutAtlas covers 85+ curated LGBTQ+-friendly destinations worldwide and is currently in open Android beta."
  },
  {
    question: "Is OutAtlas Free?",
    answer: "Yes, completely. OutAtlas is free to download and use with no credit card, no subscription, and no strings attached. During the current beta, we're accepting up to 50 testers who commit to about 10 minutes of use, 2 to 3 times a week over 1 to 2 weeks."
  },
  {
    question: "What is the LGBTQ+ Equality index?",
    answer: "OutAtlas uses Equaldex to power its Equality and Safety Index scores. Equaldex is a community-verified, collaborative knowledge base that crowdsources LGBTQ+ rights laws and public opinion data from every country and region in the world. Founded in 2014 and maintained by thousands of volunteer editors, Equaldex automatically scores and ranks each destination's Equality Index based on legal protections, social acceptance, and real-world safety data — so you know exactly how welcoming a place is before you book, and whether you can hold your partner's hand without a second thought."
  },
  {
    question: "What destinations does OutAtlas Cover?",
    answer: "OutAtlas covers 85+ curated LGBTQ+-friendly destinations including Amsterdam, Bangkok, Fire Island, Miami, Vancouver, Lisbon, Provincetown, Antwerp, and dozens more — with 1,200+ LGBTQ+-owned or verified hotels, 400+ LGBTQ+ tours, and 500+ events listed across them all. The list is growing every week."
  },
  {
    question: "How do I join OutAtlas Beta?",
    answer: "It takes about 60 seconds: fill out the sign-up form with your email, download OutAtlas from Google Play, and use the app for 10 minutes a few times a week. That's the whole commitment. We're only accepting 50 beta testers in this round, so spots are limited."
  },
  {
    question: "What Booking platforms does OutAtlas connect to?",
    answer: "OutAtlas connects you directly to Google Flights, Expedia, Booking.com, Misterb&b (the leading LGBTQ+ travel booking platform), and Viator. We don't replace these platforms — we curate the best LGBTQ+-friendly options and send you straight there, faster."
  },
  {
    question: "Is OutAtlas available on iPhone?",
    answer: "Not yet. OutAtlas is currently Android only. iOS support is on the roadmap — join the beta now to help shape the app and be first in line when the iPhone version launches."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-midnight px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-900 bg-neutral-950 font-mono text-xs tracking-widest text-neutral-400">
            FAQs
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Everything you want to know<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-700">
               about OutAtlas.
            </span>
          </h2>
          <p className="text-neutral-500 font-mono text-lg mt-4 max-w-lg mx-auto">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <div className="w-full">
          {faqs.map((faq, index) => (
            <motion.div
               key={index}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="border-b border-neutral-800/60 last:border-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-8 flex justify-between items-center text-left focus:outline-none group"
              >
                <div className="text-xl md:text-2xl font-bold text-white mr-6 group-hover:text-pride-violet transition-colors">
                   {faq.question}
                </div>
                <div className="bg-neutral-900 rounded-full p-2 group-hover:bg-neutral-800 transition-colors">
                  <ChevronDown 
                     className={`w-6 h-6 text-pride-violet transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pb-8 text-neutral-400 font-mono text-lg leading-relaxed md:pr-12">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
