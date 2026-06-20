import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, RefreshCw, Sparkles, Heart, ChevronRight } from 'lucide-react';
import { QUIZ_QUESTIONS, QUIZ_RESULTS } from '../data';
import { QuizResult } from '../types';

export default function CompanionQuiz() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<'spring' | 'summer' | 'autumn' | 'winter', number>>({
    spring: 0,
    summer: 0,
    autumn: 0,
    winter: 0,
  });
  const [result, setResult] = useState<QuizResult | null>(null);
  const [showSecretGuide, setShowSecretGuide] = useState(false);

  const startQuiz = () => {
    setStarted(true);
    setCurrentStep(0);
    setScores({ spring: 0, summer: 0, autumn: 0, winter: 0 });
    setResult(null);
    setShowSecretGuide(false);
  };

  const handleSelectOption = (score: Record<'spring' | 'summer' | 'autumn' | 'winter', number>) => {
    // Add score to running totals
    const nextScores = { ...scores };
    Object.keys(score).forEach((key) => {
      const season = key as 'spring' | 'summer' | 'autumn' | 'winter';
      nextScores[season] = (nextScores[season] || 0) + score[season];
    });
    setScores(nextScores);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Calculate final result
      let highestSeason: 'spring' | 'summer' | 'autumn' | 'winter' = 'spring';
      let maxScore = -1;

      (Object.keys(nextScores) as ('spring' | 'summer' | 'autumn' | 'winter')[]).forEach((season) => {
        if (nextScores[season] > maxScore) {
          maxScore = nextScores[season];
          highestSeason = season;
        }
      });

      setResult(QUIZ_RESULTS[highestSeason]);
    }
  };

  const restartQuiz = () => {
    startQuiz();
  };

  return (
    <div className="bento-card rounded-3xl p-6 sm:p-10 max-w-2xl mx-auto my-12 relative overflow-hidden" id="companion-quiz-card">
      {/* Visual background leaf badges */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-sage-50 rounded-full blur-2xl opacity-40 pointer-events-none translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-blush-50 rounded-full blur-2xl opacity-40 pointer-events-none -translate-x-12 translate-y-12" />

      {!started && !result ? (
        <div className="text-center py-6 relative z-10 space-y-6" id="quiz-start-view">
          <div className="mx-auto w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 shadow-inner">
            <Leaf size={32} className="animate-pulse" />
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-800 tracking-tight">
              나만의 계절 반려꽃 찾기 🌿
            </h3>
            <p className="text-stone-500 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
              사소한 선호와 숨어있는 마인드를 자극하는 가벼운 가드닝 마음 문답을 통해, 당신의 내면과 어울리는 찰떡궁합 계절 꽃을 찾아드려요.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startQuiz}
            className="px-8 py-4 bg-sage-500 hover:bg-sage-600 text-white rounded-2xl font-serif font-bold text-lg cursor-pointer transition-colors shadow-md shadow-sage-200"
            id="btn-quiz-start"
          >
            모종 심기 (테스트 시작)
          </motion.button>
        </div>
      ) : started && !result ? (
        <div className="relative z-10" id="quiz-question-view">
          {/* Progress bar */}
          <div className="flex justify-between items-center text-xs text-stone-400 font-medium mb-3">
            <span>나의 정원 지수 측정 중...</span>
            <span>{currentStep + 1} / {QUIZ_QUESTIONS.length}</span>
          </div>
          <div className="w-full h-2 bg-sage-50 rounded-full overflow-hidden mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-sage-400 rounded-full"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
              id={`quiz-step-${currentStep}`}
            >
              <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-800 leading-snug">
                Q{currentStep + 1}. {QUIZ_QUESTIONS[currentStep].text}
              </h4>

              <div className="grid grid-cols-1 gap-3 sm:gap-4 mt-4">
                {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.01, x: 4 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => handleSelectOption(option.score)}
                    className="w-full text-left p-4 rounded-2xl border-2 border-stone-100 bg-stone-50 hover:bg-sage-50 hover:border-sage-300 transition-all text-sm text-stone-700 font-medium cursor-pointer flex justify-between items-center"
                    id={`quiz-option-${currentStep}-${idx}`}
                  >
                    <span className="leading-relaxed">{option.text}</span>
                    <ChevronRight size={16} className="text-stone-300 shrink-0" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div className="relative z-10 py-2 text-center space-y-6" id="quiz-result-view">
          <div className="inline-block bg-blush-100 text-blush-500 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-2">
            🍀 나의 가드닝 매칭 결과
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="space-y-4"
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-800">
              {result?.flowerName}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-sage-500 font-semibold tracking-wide">
              대표 꽃말 : {result?.flowerMeaning}
            </p>
          </motion.div>

          <div className="relative w-full max-w-sm mx-auto h-48 sm:h-56 rounded-3xl overflow-hidden shadow-md my-4 border-4 border-stone-50">
            <img
              src={result?.imageUrl}
              alt={result?.flowerName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 via-stone-900/10 to-transparent flex items-end justify-center p-4">
              <span className="text-white text-xs font-serif font-medium bg-black/30 backdrop-blur-xs px-3 py-1 rounded-full">
                자연 친화적 마음맞춤
              </span>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed bg-sage-50/50 p-5 rounded-2xl border border-sage-100 text-left">
              {result?.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowSecretGuide(!showSecretGuide)}
              className="w-full sm:w-auto px-5 py-3 border-2 border-sage-200 hover:border-sage-400 text-sage-600 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
              id="btn-toggle-guide"
            >
              <Sparkles size={16} />
              <span>{showSecretGuide ? '가꾸기 팁 숨기기' : '동아리 가드닝 꿀팁'}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={restartQuiz}
              className="w-full sm:w-auto px-5 py-3 bg-sage-400 hover:bg-sage-500 text-white rounded-xl text-sm font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              id="btn-quiz-retry"
            >
              <RefreshCw size={15} />
              <span>화단 다듬기 (다시 하기)</span>
            </motion.button>
          </div>

          <AnimatePresence>
            {showSecretGuide && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden max-w-md mx-auto"
                id="secret-guide-container"
              >
                <div className="bg-cream-100 text-left p-5 rounded-2xl border border-cream-200 mt-4 text-xs sm:text-sm text-stone-600 space-y-2">
                  <h5 className="font-serif font-bold text-sage-600 text-base flex items-center gap-1.5">
                    🌱 조그만 정성 꿀팁
                  </h5>
                  <p className="leading-relaxed">
                    봄과 여름의 반려꽃은 직사광선을 사랑합니다. 햇볕이 가장 넉넉해 꽃잎 끝이 갈색으로 마르지 않는 베란다 앞이나 발코니 창가에 반려분을 입주시켜 일주일 한 번 흙놀이가 마를 때까지 틈틈빛 샤워를 선물하세요!
                  </p>
                  <p className="leading-relaxed pt-1 border-t border-cream-200">
                    가을과 겨울의 반려꽃은 조용하고 소박한 한기를 즐깁니다. 급수량이 너무 많아 뿌리가 무르지 않도록 통풍에 절대 주의하시고, 오전에 미지근한 이슬물을 흙 표면에 솔솔 뿌리는 것만으로 겨울철 수분 가꾸기는 충분합니다.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
