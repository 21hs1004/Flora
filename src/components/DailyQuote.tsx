import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Quote } from 'lucide-react';
import { DAILY_QUOTES } from '../data';

export default function DailyQuote() {
  const [index, setIndex] = useState(0);

  const handleNextQuote = () => {
    setIndex((prevIndex) => (prevIndex + 1) % DAILY_QUOTES.length);
  };

  const currentQuote = DAILY_QUOTES[index];

  return (
    <div className="bento-card bg-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden max-w-4xl mx-auto my-8">
      {/* Decorative leaf motifs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-sage-50 rounded-full blur-3xl opacity-40 -translate-x-10 -translate-y-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-blush-100 rounded-full blur-3xl opacity-30 translate-x-10 translate-y-10 pointer-events-none" />

      <div className="flex-1 flex gap-4 items-start relative z-10 w-full" id="quote-container">
        <div className="p-3 bg-sage-200 text-sage-600 rounded-2xl hidden sm:block h-fit">
          <Quote size={20} className="stroke-[2.5]" />
        </div>
        
        <div className="flex-1 min-h-[90px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="space-y-2"
              id={`quote-message-${currentQuote.id}`}
            >
              <p className="font-serif text-lg md:text-xl text-stone-700 leading-relaxed italic">
                "{currentQuote.text}"
              </p>
              <p className="text-sm font-sans tracking-tight text-sage-500 font-medium pl-2">
                — {currentQuote.author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleNextQuote}
        className="relative z-10 flex items-center justify-center gap-2 px-5 py-3 bg-sage-400 hover:bg-sage-500 text-white rounded-2xl text-sm font-medium transition-colors shadow-sm duration-200 cursor-pointer w-full md:w-auto"
        id="btn-next-quote"
      >
        <Sparkles size={16} />
        <span>오늘의 꽃 한마디 가꾸기</span>
      </motion.button>
    </div>
  );
}
