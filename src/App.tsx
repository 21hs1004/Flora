import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flower2, 
  Leaf, 
  Users, 
  Sparkles, 
  Compass, 
  PenTool, 
  ArrowRight,
  Sun,
  CloudSun,
  Instagram,
  Heart,
  Club
} from 'lucide-react';
import DailyQuote from './components/DailyQuote';
import CompanionQuiz from './components/CompanionQuiz';
import Guestbook from './components/Guestbook';
import FlowerGrid from './components/FlowerGrid';

type MainSection = 'garden' | 'quiz' | 'guestbook';
type SeasonType = 'spring' | 'summer' | 'autumn' | 'winter';

export default function App() {
  const [activeSection, setActiveSection] = useState<MainSection>('garden');
  const [activeSeason, setActiveSeason] = useState<SeasonType>('spring');

  return (
    <div className="min-h-screen bg-cream-50 text-stone-800 font-sans selection:bg-sage-200 flex flex-col relative overflow-hidden" id="applet-body">
      {/* Delicate Dot Pattern & Natural header block layout matching the design */}
      <div className="absolute inset-0 dot-pattern pointer-events-none z-0" />
      <div className="absolute top-0 inset-x-0 h-1.5 bg-linear-to-r from-sage-400 via-blush-100 to-cream-300 z-10" />

      {/* HEADER SECTION */}
      <header className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 relative z-10" id="app-header">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-sage-100 pb-5">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3" id="brand-logo">
            <div className="w-11 h-11 rounded-2xl bg-sage-400 text-white flex items-center justify-center shadow-xs">
              <Flower2 className="stroke-[1.8] animate-spin" style={{ animationDuration: '20s' }} size={24} />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-800 block">
                꽃바람 동아리
              </span>
              <span className="text-[10px] tracking-widest text-sage-500 uppercase font-bold block">
                Warm Gardening Club
              </span>
            </div>
          </div>

          {/* Social Stats & Meta Info */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-semibold text-stone-500" id="header-stats">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-sage-50 rounded-full border border-sage-100">
              <Users size={13} className="text-sage-400" />
              <span>활동 인원 <strong className="text-sage-600">48명</strong></span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-blush-50 rounded-full border border-blush-105">
              <Heart size={13} className="text-blush-400 fill-current" />
              <span>화단 누적 물주기 <strong className="text-blush-500">1,420회</strong></span>
            </span>
            <span className="flex items-center gap-1 text-xs text-stone-400 bg-stone-100 px-3 py-1.5 rounded-full font-medium">
              <span>활동 기수: 8기</span>
            </span>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8 text-center" id="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-1 bg-sage-100 text-sage-600 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight">
            <Leaf size={12} className="fill-current animate-bounce" />
            <span>도심 속에 가꾸는 나만의 작은 쉼터</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-stone-800 leading-tight sm:leading-tight tracking-tight">
            바람이 불어오면,<br className="sm:hidden" /> 우리는 꽃을 피웁니다 🌿
          </h2>

          <p className="font-sans text-sm sm:text-base text-stone-500 max-w-2xl mx-auto leading-relaxed font-medium">
            '꽃바람' 정원은 복잡한 도심 소음을 잊고, 흙을 만지며 자연의 느린 리듬에 맞춰 한 송이 꽃씨를 기르는 어여쁜 동아리입니다. 
            사계절 자연의 아득한 색채와 기운을 마음속에 분양해보세요.
          </p>
        </motion.div>
      </section>

      {/* DAILY REMINDER INSPIRATION */}
      <DailyQuote />

      {/* MAIN NAVIGATION PORTAL */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 pb-20 flex-1 flex flex-col gap-10" id="main-content">
        
        {/* Core Task Navigator */}
        <div className="flex justify-center" id="portal-tabs">
          <div className="flex bg-stone-100 p-1.5 rounded-2xl border border-stone-200 shadow-sm gap-1 w-full max-w-md">
            
            <button
              onClick={() => setActiveSection('garden')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSection === 'garden' 
                  ? 'bg-white text-sage-600 shadow-xs' 
                  : 'text-stone-500 hover:text-stone-700'
              }`}
              id="tab-garden"
            >
              <Compass size={15} />
              <span>꽃밭 산책</span>
            </button>

            <button
              onClick={() => setActiveSection('quiz')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSection === 'quiz' 
                  ? 'bg-white text-sage-600 shadow-xs' 
                  : 'text-stone-500 hover:text-stone-700'
              }`}
              id="tab-quiz"
            >
              <Sparkles size={15} />
              <span>반려꽃 매칭</span>
            </button>

            <button
              onClick={() => setActiveSection('guestbook')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSection === 'guestbook' 
                  ? 'bg-white text-sage-600 shadow-xs' 
                  : 'text-stone-500 hover:text-stone-700'
              }`}
              id="tab-guestbook"
            >
              <PenTool size={15} />
              <span>화단 방명록</span>
            </button>

          </div>
        </div>

        {/* COMPONENT RENDERER WITH TRANSITIONS */}
        <div className="relative z-10 flex-1">
          <AnimatePresence mode="wait">
            {activeSection === 'garden' && (
              <motion.div
                key="garden"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Seasonal Local Navigator Sub-tabs */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-stone-100 pb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-stone-700 flex items-center gap-1.5">
                      <span>계절별 동아리 꽃밭</span>
                      <span className="text-xs text-stone-400 font-bold font-sans">
                        (아래 카드를 터치해 스토리를 확인하세요)
                      </span>
                    </h3>
                  </div>

                  {/* Season Nav Bar */}
                  <div className="flex gap-2 bg-white p-1.5 rounded-full border border-stone-200 shadow-3xs" id="season-selector">
                    {(['spring', 'summer', 'autumn', 'winter'] as SeasonType[]).map((seas) => (
                      <button
                        key={seas}
                        onClick={() => setActiveSeason(seas)}
                        className={`season-tab px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                          activeSeason === seas
                            ? 'bg-sage-400 text-white -translate-y-[2px] shadow-sm'
                            : 'text-stone-400 hover:text-stone-700 border border-transparent'
                        }`}
                        id={`btn-season-${seas}`}
                      >
                        {seas === 'spring' ? '🌸 봄' : seas === 'summer' ? '🌻 여름' : seas === 'autumn' ? '🍁 가을' : '❄️ 겨울'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Seasonal explanation header cards */}
                <div className="bg-sage-50/50 rounded-2xl p-4 sm:p-5 border border-sage-100 flex items-center gap-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans shadow-3xs">
                  <div className="p-3 bg-white rounded-xl shadow-3xs text-sage-500 shrink-0">
                    <CloudSun size={18} />
                  </div>
                  <div>
                    {activeSeason === 'spring' && "봄날 아지랑이가 수줍게 기지개 켜면, 벚꽃과 무지개 튤립이 고유의 희망과 설렘 가득한 고백을 정원에 수놓습니다. 가드너의 분주한 봄맞이가 시작됩니다."}
                    {activeSeason === 'summer' && "한낮 시끄러운 소나기 아래 피어나는 연꽃과 하늘 높은 곳으로 뻗어 나가는 해바라기 물결은, 동아리 정원에 여름의 끈기 있고 활기찬 생명력을 가득 채웁니다."}
                    {activeSeason === 'autumn' && "선선한 가을소풍 날씨 아래 억새 무리가 낭만 있게 춤추고, 깊어지는 은결 국화 차회에서 함께 책을 읽으며 한 편의 문장에 마음을 물들이는 사색의 시절입니다."}
                    {activeSeason === 'winter' && "눈부신 하얀 폭설을 기어코 이겨내 웅장한 핏빛 붉은 자태를 터뜨리는 한겨울 동백과 설중매는 가혹한 시절에도 소중한 사랑을 수호하는 강인함을 느끼게 합니다."}
                  </div>
                </div>

                {/* Animated Flower grid rendering */}
                <FlowerGrid season={activeSeason} />
              </motion.div>
            )}

            {activeSection === 'quiz' && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <CompanionQuiz />
              </motion.div>
            )}

            {activeSection === 'guestbook' && (
              <motion.div
                key="guestbook"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <Guestbook />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </main>

      {/* COMPACT FOOTER */}
      <footer className="mt-auto bg-stone-100 border-t border-stone-200/60 py-10 text-center text-xs text-stone-500 space-y-3">
        <div className="flex justify-center gap-6 text-stone-400">
          <a href="#" className="hover:text-sage-500 flex items-center gap-1.5 font-semibold transition-colors">
            <Instagram size={14} />
            <span>@kkotbaram_garden</span>
          </a>
          <span className="text-stone-300">|</span>
          <span className="flex items-center gap-1.5 font-semibold">
            <Club size={13} className="text-sage-400" />
            <span>오프라인 화단: 늘초록빛 온실 정원</span>
          </span>
        </div>
        <p className="tracking-tight max-w-md mx-auto leading-relaxed">
          © 2026 꽃가꾸기 동아리 꽃바람. All rights reserved.<br />
          사랑하는 사람들과 흙을 조율하고 식물을 천천히 다루는 일 속에서 일상의 평온을 회복합니다.
        </p>
      </footer>
    </div>
  );
}
