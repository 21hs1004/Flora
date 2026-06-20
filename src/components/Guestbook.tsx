import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PlusCircle, Flower2, Calendar, User, Trash2 } from 'lucide-react';
import { GuestbookEntry } from '../types';

const PRESET_FLOWERS = [
  { char: '🌸', name: '벚꽃' },
  { char: '🌻', name: '해바라기' },
  { char: '🌷', name: '튤립' },
  { char: '🌺', name: '동백꽃' },
  { char: '🌼', name: '국화' },
  { char: '🌱', name: '새싹' }
];

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [chosenFlower, setChosenFlower] = useState('🌸');
  const [error, setError] = useState('');

  // Load guestbook from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('kkotbaram_guestbook');
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading guestbook', e);
      }
    } else {
      // Seed initial messages for decoration
      const initial: GuestbookEntry[] = [
        {
          id: 'seed-1',
          author: '숲길지기',
          content: '꽃바람 정원에 오신 모든 분을 환영합니다! 꽃 한 송이 물 주시듯, 고운 목소리 가득 꽃밭 방명록에 씨앗을 심어주세요.',
          chosenFlower: '🌱',
          timestamp: '2026-06-20'
        },
        {
          id: 'seed-2',
          author: '단아꽃',
          content: '봄날의 튤립이랑 장마철 해바라기 물 가꾸며 일주일을 보내요. 가을 소쿠리에 따뜻한 국화 마실 소풍도 무척 기다려지네요 💛',
          chosenFlower: '🌷',
          timestamp: '2026-06-19'
        }
      ];
      setEntries(initial);
      localStorage.setItem('kkotbaram_guestbook', JSON.stringify(initial));
    }
  }, []);

  const saveEntries = (newEntries: GuestbookEntry[]) => {
    setEntries(newEntries);
    localStorage.setItem('kkotbaram_guestbook', JSON.stringify(newEntries));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!author.trim()) {
      setError('어여쁜 가드너 닉네임을 써주세요.');
      return;
    }
    if (!content.trim()) {
      setError('따뜻한 마음에 관한 꽃바람 문장을 작성해 주세요.');
      return;
    }

    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const newEntry: GuestbookEntry = {
      id: `entry-${Date.now()}`,
      author: author.trim(),
      content: content.trim(),
      chosenFlower,
      timestamp: formattedDate
    };

    const updated = [newEntry, ...entries];
    saveEntries(updated);

    // Reset fields
    setAuthor('');
    setContent('');
    setChosenFlower('🌸');
  };

  const handleDelete = (id: string) => {
    const filt = entries.filter(e => e.id !== id);
    saveEntries(filt);
  };

  return (
    <div className="max-w-4xl mx-auto my-12 px-4" id="guestbook-section">
      <div className="text-center space-y-2 mb-10">
        <h3 className="font-serif text-3xl font-bold text-stone-800 flex items-center justify-center gap-2">
          <Flower2 className="text-sage-400 stroke-[1.8]" />
          <span>온라인 화단 방명록</span>
        </h3>
        <p className="text-sm text-stone-500 max-w-sm mx-auto">
          정원에 다녀가신 고운 흔적을 한 알의 꽃송이와 편지로 곱게 심어 정원을 함께 가꿔주세요.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Write Form */}
        <div className="lg:col-span-5 bento-card rounded-3xl p-6 space-y-4">
          <h4 className="font-serif text-lg font-bold text-stone-700 flex items-center gap-1.5 border-b border-stone-50 pb-2">
            🌱 꽃씨앗 한 알 심기
          </h4>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs text-stone-500 font-bold block">닉네임 / 가드너 성함</label>
              <div className="relative">
                <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-300" />
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="예: 들꽃향기"
                  maxLength={12}
                  className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-stone-100 bg-stone-50 focus:bg-white focus:border-sage-400 focus:outline-hidden transition-all text-stone-700 font-medium"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-stone-500 font-bold block">함께 심을 동아리 꽃송이</label>
              <div className="grid grid-cols-6 gap-1.5 bg-stone-50 p-1.5 rounded-xl border border-stone-100">
                {PRESET_FLOWERS.map((fl) => (
                  <button
                    key={fl.char}
                    type="button"
                    onClick={() => setChosenFlower(fl.char)}
                    title={fl.name}
                    className={`h-9 flex items-center justify-center text-lg rounded-lg transition-all cursor-pointer ${
                      chosenFlower === fl.char
                        ? 'bg-white shadow-xs border border-sage-200 scale-110'
                        : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    {fl.char}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-stone-500 font-bold block">전하고 싶은 정원 쪽지</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="꽃바람 동아리에 전할 따뜻한 덕담이나 정원의 한 풍경을 채워주세요..."
                maxLength={100}
                rows={3}
                className="w-full text-xs sm:text-sm p-4 rounded-xl border border-stone-100 bg-stone-50 focus:bg-white focus:border-sage-400 focus:outline-hidden transition-all text-stone-700 font-medium resize-none leading-relaxed"
              />
            </div>

            {error && (
              <p className="text-xs text-rose-500 font-semibold pl-1 animate-pulse" id="alert-error">
                ⚠️ {error}
              </p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-sage-500 hover:bg-sage-600 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              id="btn-submit-guestbook"
            >
              <PlusCircle size={16} />
              <span>꽃 심기 (등록하기)</span>
            </motion.button>
          </form>
        </div>

        {/* List View */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex justify-between items-center px-2">
            <span className="text-xs text-stone-400 font-bold">
              현재 활짝 피어난 소중한 꽃봉오리: {entries.length}개
            </span>
          </div>

          <div className="max-h-[380px] overflow-y-auto pr-1 space-y-3 scrollbar" id="guestbook-list-container">
            <AnimatePresence initial={false}>
              {entries.length === 0 ? (
                <div className="text-center py-10 bg-stone-50/50 rounded-2xl border border-dashed border-stone-100 text-stone-400 text-xs sm:text-sm font-medium">
                  아직 피어난 가을 씨앗 쪽지가 없습니다. 첫 꽃씨를 가꿔보세요!
                </div>
              ) : (
                entries.map((entry) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                    className="p-4 bento-card rounded-2xl flex gap-3.5 relative hover:border-sage-200 transition-all group"
                    id={`entry-card-${entry.id}`}
                  >
                    <div className="w-11 h-11 bg-sage-50 rounded-full flex items-center justify-center text-xl shrink-0 shadow-inner">
                      {entry.chosenFlower}
                    </div>

                    <div className="flex-1 space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-stone-700 flex items-center gap-1">
                          {entry.author}
                          <span className="text-[10px] text-sage-400 font-bold bg-sage-50 px-1.5 py-0.5 rounded-md">
                            가드너
                          </span>
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-stone-400 font-medium flex items-center gap-0.5">
                            <Calendar size={11} />
                            {entry.timestamp}
                          </span>

                          <button
                            onClick={() => handleDelete(entry.id)}
                            className="text-stone-300 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-all cursor-pointer p-0.5"
                            title="삭제하기"
                            id={`btn-delete-${entry.id}`}
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                        {entry.content}
                      </p>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
