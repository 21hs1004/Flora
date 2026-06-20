import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplets, Heart, Sparkles, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Flower } from '../types';
import { FLOWER_DATA } from '../data';

interface FlowerGridProps {
  season: 'spring' | 'summer' | 'autumn' | 'winter';
}

export default function FlowerGrid({ season }: FlowerGridProps) {
  // Store watering counts in state (initially from local static data or localstorage)
  const [likesMap, setLikesMap] = useState<Record<string, number>>({});
  const [activeDetailId, setActiveDetailId] = useState<string | null>(null);
  const [splashId, setSplashId] = useState<string | null>(null);

  useEffect(() => {
    // Load persisted water counts
    const saved = localStorage.getItem('kkotbaram_water_likes');
    if (saved) {
      try {
        setLikesMap(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading likes', e);
      }
    } else {
      // Default from FLOWER_DATA
      const initial: Record<string, number> = {};
      FLOWER_DATA.forEach((fl) => {
        initial[fl.id] = fl.likes;
      });
      setLikesMap(initial);
      localStorage.setItem('kkotbaram_water_likes', JSON.stringify(initial));
    }
  }, []);

  const handleWaterClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering card toggle detail
    
    // Set splash animation target
    setSplashId(id);
    setTimeout(() => setSplashId(null), 850);

    const updatedLikes = {
      ...likesMap,
      [id]: (likesMap[id] || 0) + 1
    };
    setLikesMap(updatedLikes);
    localStorage.setItem('kkotbaram_water_likes', JSON.stringify(updatedLikes));
  };

  const toggleDetail = (id: string) => {
    setActiveDetailId((prev) => (prev === id ? null : id));
  };

  const currentFlowers = FLOWER_DATA.filter((fl) => fl.season === season);

  return (
    <div className="space-y-8" id="flower-grid-wrapper">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" id="flower-cards-grid">
        {currentFlowers.map((flower) => {
          const currentLikes = likesMap[flower.id] || flower.likes;
          const isDetailOpen = activeDetailId === flower.id;
          const isSplashing = splashId === flower.id;

          return (
            <motion.div
              key={flower.id}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 180, damping: 15 }}
              className="bento-card rounded-3xl overflow-hidden cursor-pointer select-none relative flex flex-col h-full"
              onClick={() => toggleDetail(flower.id)}
              id={`flower-card-${flower.id}`}
            >
              {/* Card Photo Container */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-stone-100">
                <img
                  src={flower.imageUrl}
                  alt={flower.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Wet splash animations overlay */}
                <AnimatePresence>
                  {isSplashing && (
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: [0.8, 1.4, 0.9], opacity: [0, 0.9, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-sage-400/20 flex flex-col items-center justify-center pointer-events-none z-20"
                    >
                      <motion.div
                        animate={{ y: [20, -40], scale: [0.7, 1.3] }}
                        className="text-sage-500 font-extrabold flex flex-col items-center"
                      >
                        <Droplets size={44} className="fill-current animate-bounce" />
                        <span className="text-xs bg-white/70 backdrop-blur-xs text-sage-600 px-2 py-0.5 rounded-full font-bold mt-1">
                          수분 보충! 💧
                        </span>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Season corner badge */}
                <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-md text-stone-700 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-xs">
                  {season === 'spring' ? '🌸 봄의 꽃밭' : season === 'summer' ? '🌻 여름 연두' : season === 'autumn' ? '🍁 갈빛 억새' : '❄️ 설중 정원'}
                </span>

                {/* Detail indicator floating badge */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDetail(flower.id);
                  }}
                  className="absolute bottom-4 right-4 bg-stone-900/60 hover:bg-stone-900/80 backdrop-blur-md text-white p-2 rounded-full shadow-md z-10 cursor-pointer transition-colors"
                >
                  {isDetailOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>

              {/* Card Main Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-800">
                      {flower.name}
                    </h4>
                    <span className="font-mono text-[10px] text-stone-400 italic">
                      {flower.scientificName}
                    </span>
                  </div>
                  <p className="text-xs text-sage-500 font-semibold">
                    꽃말 : <span className="text-stone-600 font-medium font-serif italic">"{flower.meaning}"</span>
                  </p>
                </div>

                {/* Interactive Tool Buttons */}
                <div className="flex items-center justify-between pt-2 border-t border-stone-50">
                  <span className="text-[11px] text-stone-400 font-bold flex items-center gap-1">
                    <BookOpen size={13} className="text-stone-300" />
                    <span>이야기 보기</span>
                  </span>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => handleWaterClick(flower.id, e)}
                    className="flex items-center gap-1 bg-sage-50 hover:bg-sage-100 text-sage-600 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    id={`btn-water-${flower.id}`}
                  >
                    <Droplets size={13} className="fill-current text-blue-400" />
                    <span>물주기</span>
                    <span className="bg-sage-200/50 px-1.5 py-0.5 rounded-md text-[10px] text-sage-700 min-w-[20px] text-center font-mono">
                      {currentLikes}
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Drop-down Accordion Storytelling Detailed Section */}
              <AnimatePresence>
                {isDetailOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden bg-sage-50/40 border-t border-sage-50"
                  >
                    <div className="p-5 space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans cursor-default" onClick={(e) => e.stopPropagation()}>
                      {/* Interactive storytelling */}
                      <div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-3xs space-y-1.5">
                        <span className="font-serif text-sage-500 text-xs font-bold flex items-center gap-1">
                          <Sparkles size={12} />
                          <span>꽃가꾸기 동아리 스토리</span>
                        </span>
                        <p>{flower.story}</p>
                      </div>

                      {/* Plant Companion Care Tips */}
                      <div className="p-3 bg-cream-100 rounded-2xl border border-cream-200">
                        <p className="font-serif text-[11px] text-stone-500 font-bold mb-1">
                          👩‍🌾 반려 화분 가꾸기 가이드
                        </p>
                        <p className="text-xs leading-normal">{flower.wateringGuide}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
