import { Flower, QuizQuestion, QuizResult } from './types';

export const FLOWER_DATA: Flower[] = [
  // SPRING (봄)
  {
    id: 'spring-1',
    name: '벚꽃',
    scientificName: 'Prunus serrulata',
    meaning: '정신의 아름다움, 품위, 새로운 시작',
    story: '봄바람이 불면 눈꽃송이처럼 휘날리는 벚꽃길을 걸으며 동아리원들이 가장 처음 야외 소풍을 떠나는 설레는 봄의 시작입니다. 흐드러진 벚꽃 잎 하나를 손에 잡으면 사랑이 이루어진다는 로맨틱한 이야기가 전해져 내려옵니다.',
    imageUrl: 'https://images.unsplash.com/photo-1522383225653-ed1111816951?auto=format&fit=crop&w=600&q=80',
    season: 'spring',
    wateringGuide: '봄철 싹이 돋아날 때 흙 표면이 마르면 물을 흠뻑 주고, 직사광선이 부드럽게 닿는 곳에서 키우세요.',
    likes: 124
  },
  {
    id: 'spring-2',
    name: '튤립',
    scientificName: 'Tulipa',
    meaning: '사랑의 고백, 영원한 애정, 매혹',
    story: '알록달록 무지개 빛깔로 동아리 화단을 정성스럽게 수놓는 튤립은 땅속 구근(알뿌리)의 긴 겨울잠 끝에 피어납니다. 보라색, 노란색, 빨간색 등 다채로운 색감마다 저마다의 수줍은 고백을 담고 자라납니다.',
    imageUrl: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&q=80',
    season: 'spring',
    wateringGuide: '흙이 마를 때 둥근 대가 물을 가득 머금을 수 있도록 듬뿍 줍니다. 습한 고온을 피하는 것이 중요합니다.',
    likes: 98
  },
  {
    id: 'spring-3',
    name: '개나리',
    scientificName: 'Forsythia koreana',
    meaning: '희망, 기대, 깊은 정, 달성',
    story: '온 정원이 연둣빛으로 물들기 전, 병아리보다 노랗고 밝은 기쁨을 몰고 오는 개나리입니다. 척박한 바위틈이나 축축한 흙이 아닌 마른 진흙길 옆에서도 강인한 생명력으로 자라나 세상에 따뜻한 첫 등불을 켜줍니다.',
    imageUrl: 'https://images.unsplash.com/photo-1551848520-22c608149eb4?auto=format&fit=crop&w=600&q=80',
    season: 'spring',
    wateringGuide: '야외 환경에서 빗물만으로도 무던히 잘 자라지만, 마른 가뭄에는 잎이 처지지 않게 아침 일찍 물을 줍니다.',
    likes: 76
  },

  // SUMMER (여름)
  {
    id: 'summer-1',
    name: '해바라기',
    scientificName: 'Helianthus annuus',
    meaning: '기다림, 일편단심, 생명력과 동경',
    story: '뜨거운 태양광선만을 고집하며 정원 꼭대기까지 키를 높이는 여름 정원의 수호신입니다. 동아리원들이 이른 아침 양동이를 메고 정원에 들러 가장 먼저 목을 축여주는 해바라기는 보는 것만으로도 뜨거운 긍정 에너지를 품게 합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80',
    season: 'summer',
    wateringGuide: '몸집이 커 밤낮으로 물을 무척 많이 마십니다. 한낮 폭염을 피해 아침 혹은 늦은 오후 흠뻑 물을 뿌려줍니다.',
    likes: 142
  },
  {
    id: 'summer-2',
    name: '연꽃',
    scientificName: 'Nelumbo nucifera',
    meaning: '순결, 신성, 군자의 고결함, 진흙 속 우아함',
    story: '시끄럽고 탁한 환경 속에서도 흐트러지지 않는 가장 맑고 깨끗한 잎사귀와 연분홍 꽃잎을 피워내는 동양 정원의 정수입니다. 비가 동그랗게 맺혀 굴러가는 연잎 아래 동아리 차회를 열면, 깊고 그윽한 연잎 향이 마음을 쉬게 합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
    season: 'summer',
    wateringGuide: '수생 식물이므로 늘 뿌리가 고인 물과 축축한 진흙층에 푸근히 잠겨있도록 물높이를 상시 관리해 주세요.',
    likes: 115
  },
  {
    id: 'summer-3',
    name: '라벤더',
    scientificName: 'Lavandula angustifolia',
    meaning: '기대, 침묵, 나에게 대답해 주세요',
    story: '지중해의 푸른 바람을 담은 보랏빛 물결과 은은하게 퍼지는 상쾌한 허브 향기가 복잡하고 피로한 현대인의 뇌를 편히 쉬게 해 줍니다. 한여름 줄기들을 모아 정성껏 엮은 뒤, 그늘진 처마 끝에 말려 드라이 아로마 파우치로 만듭니다.',
    imageUrl: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=600&q=80',
    season: 'summer',
    wateringGuide: '과습(물이 지나침)을 매우 싫어합니다. 바람이 잘 통하고 배수가 잘되는 모래 흙에 아주 소량만 관수하세요.',
    likes: 130
  },

  // AUTUMN (가을)
  {
    id: 'autumn-1',
    name: '코스모스',
    scientificName: 'Cosmos bipinnatus',
    meaning: '순정, 조화, 우주, 첫사랑의 기억',
    story: '여릿한 꽃줄기가 높은 푸른 가을바람에 가녀리게 흔들리면서도 결코 부러지지 않는 가을 들녘의 귀여운 낭만입니다. 소박하면서도 완벽한 우주(Cosmos)의 질서와 균형처럼 자연과 사람이 가장 찬란히 어우러지는 순간을 노래합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
    season: 'autumn',
    wateringGuide: '야생화 성질을 지녀 물을 자주 주지 않아도 강하게 자랍니다. 심하게 잎이 생기를 잃어 시들 때만 소량씩 줍니다.',
    likes: 89
  },
  {
    id: 'autumn-2',
    name: '소국/국화',
    scientificName: 'Chrysanthemum morifolium',
    meaning: '고결, 청초, 굳은 절개, 가을 정취',
    story: '온 산야가 오색 단풍으로 물들고 찬바람이 일 때 비로소 진하고 그윽한 고유의 가을 향을 피워 올리는 꽃입니다. 동아리 노을 소풍길 무렵 피어나는 국화를 따서 가마솥 화력에 은근하게 찌고 덖으면 몸을 정화해 주는 따뜻한 가을 차가 완성됩니다.',
    imageUrl: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=600&q=80',
    season: 'autumn',
    wateringGuide: '개화 시기에는 꽃에 물방울이 직접 닿지 않도록 뿌리 부근 흙에 살그머니 집중해 아침에 물을 촉촉이 적십니다.',
    likes: 104
  },
  {
    id: 'autumn-3',
    name: '억새',
    scientificName: 'Miscanthus sinensis',
    meaning: '친근, 명상, 은빛 활력과 가을의 서정',
    story: '비록 현란한 붉은 꽃잎은 없지만 산등성이 전체를 은빛 바다로 가득 채우며 석양 무렵 찬란히 반짝이는 가을의 전령사입니다. 바람의 방향과 물결을 그대로 닮아 순응하면서 흔들리는 억새풀 무리는 우리에게 부드러운 마음을 가르쳐 줍니다.',
    imageUrl: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80',
    season: 'autumn',
    wateringGuide: '화단의 야외 조경수로 아주 적합합니다. 가을 가뭄을 제외하면 별도의 정기적인 급수 관리가 필요 없을 정도입니다.',
    likes: 71
  },

  // WINTER (겨울)
  {
    id: 'winter-1',
    name: '동백꽃',
    scientificName: 'Camellia japonica',
    meaning: '비밀스러운 사랑, 그 누구보다 당신을 사랑합니다',
    story: '두꺼운 백색 눈꽃송이가 온 누리를 차갑게 덮는 한겨울 속에서, 홀로 붉은 피를 머금은 듯 강렬한 붉은 자태를 보이며 혹독한 얼음 추위를 기어코 견뎌내는 한겨울의 강인한 꽃입니다. 동백 무리가 바닥에 통째로 툭 낙화할 때 겨울 정원은 웅장한 침묵을 이룹니다.',
    imageUrl: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=600&q=80',
    season: 'winter',
    wateringGuide: '실내 및 베란다 보관 시 겨울철엔 증산 속도가 느리므로, 손가락 한 마디 깊이의 흙이 완벽히 건조되었을 때 상온의 물을 서서히 공급합니다.',
    likes: 153
  },
  {
    id: 'winter-2',
    name: '설중매/홍매화',
    scientificName: 'Prunus mume',
    meaning: '고결한 우아함, 불굴의 인내, 맑은 향기',
    story: '겨울의 꼬리가 채 가려지기도 전에 혹한 속 아릿한 한기 뚫고 가장 먼저 은결한 향기를 천지에 퍼뜨리며 봄의 숨결을 예보하는 기특한 꽃입니다. 선비들이 겨울 서재에서 매화 등불을 밝혀두고 향기를 벗 삼아 지혜를 나누었듯, 우리에게 고독한 인내를 즐기는 지혜를 줍니다.',
    imageUrl: 'https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?auto=format&fit=crop&w=600&q=80',
    season: 'winter',
    wateringGuide: '추운 겨울 동안에는 건조해지기 쉬우나 얼어있을 가능성도 있으니 따뜻한 낮 시간대를 골라 흙이 적셔질 만큼 적은 양의 미지근한 물을 제공합니다.',
    likes: 119
  },
  {
    id: 'winter-3',
    name: '포인세티아',
    scientificName: 'Euphorbia pulcherrima',
    meaning: '축복, 달아오르는 나의 마음, 크리스마스 정취',
    story: '차가운 입김이 모락모락 불어 나오는 연말 시즌, 초록빛 실내 가득 불꽃처럼 타오르는 다홍빛 잎사귀로 가내에 축제의 설렘과 온기를 불어넣어 줍니다. 붉은 부분은 신기하게도 꽃잎이 아니라 밤길 빛을 한가득 머금기 위해 진화한 포엽(변형된 잎)입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1512413313133-c4c9ccda07f5?auto=format&fit=crop&w=600&q=80',
    season: 'winter',
    wateringGuide: '열대 멕시코 출신이라 찬물이나 한기에 약합니다. 겉흙이 보슬거리게 마르면 볕이 쬔 오전 중 따스한 수돗물을 부드럽게 관수하세요.',
    likes: 132
  }
];

export const DAILY_QUOTES = [
  { id: 1, text: "꽃을 심는 일은, 내일의 아름다움을 굳게 믿는 사랑의 행위입니다.", author: "오드리 헵번" },
  { id: 2, text: "사랑은 우주 속 시들지 않는 단 하나의 정원이며, 우정은 그곳에 심어둔 소박하고 곧은 억새와 같습니다.", author: "꽃바람 지기" },
  { id: 3, text: "꽃들을 더 가깝게 가꾼다는 것은 소란스러운 세상을 떠나 침묵 속 자라나는 조용한 기적들을 마주하는 일입니다.", author: "동아리 생각노트" },
  { id: 4, text: "꽃이 늦게 피어난다고 조급할 필사는 없습니다. 저마다 깊은 흙 속에서 가장 아름다운 순간의 햇볕을 완벽히 기다리고 있기 때문입니다.", author: "가드너 마틴" },
  { id: 5, text: "겨울 동백이 봄날의 벚꽃을 가벼이 시새우지 않듯, 삶의 모든 시절에는 오직 당신만이 피워낼 수 있는 깊은 꽃잎이 숨겨져 있습니다.", author: "봄꽃 지기" }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: "휴일에 마실 차를 고른다면, 어떤 향과 맛을 가장 마시고 싶을까요?",
    options: [
      { text: "아지랑이처럼 아늑하고 은은한 단맛의 덖음 어린잎 녹차", score: { spring: 3, summer: 1, autumn: 1, winter: 0 } },
      { text: "가슴속 바람까지 한순간에 시원하고 개운하게 해 줄 상큼 청량한 페퍼민트티", score: { spring: 1, summer: 3, autumn: 0, winter: 1 } },
      { text: "은은하고 숙성된 구수함과 쓸쓸한 가을 낙엽 내음이 감도는 다크 우디 우롱차", score: { spring: 0, summer: 1, autumn: 3, winter: 1 } },
      { text: "추운 손가락 사이로 구수하고 뜨거운 스팀이 모락모락 올라오는 알싸한 생강 매화차", score: { spring: 1, summer: 0, autumn: 1, winter: 3 } }
    ]
  },
  {
    id: 2,
    text: "정원에 앉아 귀를 기울일 때, 마음에 가장 편안한 소리는 어떤 것인가요?",
    options: [
      { text: "나무 꼭대기에서 맑게 지저귀는 봄 아침 참새와 방울새 노랫소리", score: { spring: 3, summer: 1, autumn: 0, winter: 0 } },
      { text: "소나기가 커다란 초록 연잎 위에 탁탁 둥글게 떨어져 굴러가는 맑은 빗소리", score: { spring: 1, summer: 3, autumn: 1, winter: 0 } },
      { text: "노을길 산들바람에 잘 마른 은빛 억새가 스스스 부딪치며 속삭이는 낙엽 가을 소리", score: { spring: 0, summer: 1, autumn: 3, winter: 1 } },
      { text: "하얗게 입김을 불며 발밑 가득 뽀드득 소리가 조용하게 울려 퍼지는 한겨울 흰 눈길소리", score: { spring: 0, summer: 0, autumn: 1, winter: 3 } }
    ]
  },
  {
    id: 3,
    text: "방에 어울리는 소중한 풍경이나 드로잉 액자를 고른다면?",
    options: [
      { text: "화사하고 파스텔 톤 핑크색 꽃들이 파르르 흩날리는 활기찬 정원 유화", score: { spring: 3, summer: 1, autumn: 0, winter: 1 } },
      { text: "대담하고 선명한 노란 태양빛과 드넓고 힘찬 여름 바다가 숨 쉬는 마티스풍 포스터", score: { spring: 1, summer: 3, autumn: 1, winter: 0 } },
      { text: "차분하고 담백하며, 저물어 가는 빛과 마른 갈대 고요가 스며든 감성 우드 필름 스틸컷", score: { spring: 0, summer: 0, autumn: 3, winter: 1 } },
      { text: "오직 백색 침묵만이 두껍게 존재하고 한 구석 붉은 점 하나가 찍힌 고요한 미니멀 수묵화", score: { spring: 0, summer: 1, autumn: 0, winter: 3 } }
    ]
  },
  {
    id: 4,
    text: "누군가를 소중하게 사랑하고 표현할 때 나의 마음가짐은 어떤 편인가요?",
    options: [
      { text: "봄 햇살처럼 은근하고 부드럽게 스며들어 미소 짓게 만드는 상냥하고 달콤한 애정", score: { spring: 3, summer: 1, autumn: 1, winter: 0 } },
      { text: "한낮 태양처럼 한 치 숨김없이 뜨겁고 한결같으며 환한 웃음을 전부 쏟아붓는 열정", score: { spring: 1, summer: 3, autumn: 0, winter: 1 } },
      { text: "비록 멀리 떨어져 바람에 이리저리 흔들려도 언제까지고 소박하고 순수하게 지켜보는 낭만", score: { spring: 1, summer: 0, autumn: 3, winter: 1 } },
      { text: "세상 소란스러움 모두 잊은 뒤 고요한 혹한 속 침묵하며 은밀히 영원히 지키는 굳센 가치", score: { spring: 0, summer: 1, autumn: 1, winter: 3 } }
    ]
  }
];

export const QUIZ_RESULTS: Record<'spring' | 'summer' | 'autumn' | 'winter', QuizResult> = {
  spring: {
    season: 'spring',
    flowerName: '봄날의 수줍은 수호자, 튤립 (Tulip)',
    flowerMeaning: '사랑의 고백, 영원한 애정',
    imageUrl: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&q=80',
    description: '당신은 부드럽고 다정다감하며, 주위 사람들에게 기분 좋은 설렘과 위안을 선사하는 봄바람을 닮았네요! 싹을 소중하게 틔워 올리는 봄의 튤립처럼, 사람들의 말 한마디를 마음 깊이 경청하고 새로운 출발과 도전을 응원해 주는 타고난 따스함을 가지고 있습니다.'
  },
  summer: {
    season: 'summer',
    flowerName: '여름날의 싱그러운 등불, 해바라기 (Sunflower)',
    flowerMeaning: '기다림, 일편단심과 그리움',
    imageUrl: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80',
    description: '당신은 언제나 건강하고 활짝 웃으며 숭고한 열정을 발산하는 한여름 해바라기와 참 많이 닮아있습니다! 구름 사이로 강력한 태양이 고개를 내밀 때 온몸으로 환호하듯, 주변에 위트 넘치는 넘치는 밝은 에너지를 아낌없이 나누어 주는 멋진 리더이자 활력가입니다.'
  },
  autumn: {
    season: 'autumn',
    flowerName: '가을의 사색적인 지혜, 코스모스 (Cosmos)',
    flowerMeaning: '소박한 순정, 우주의 조화와 명상',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
    description: '당신은 바람에 몸을 자연스럽게 맡기면서도 영혼을 굳건히 지키는 서정적인 가을 코스모스를 담고 있습니다. 소음 가득한 바깥일보다는 한 자락 깊은 음악이나 고즈넉한 북카페 구석에서 세상을 통찰하고 나만의 독립적 예술 감각과 세심한 배려를 꽃피우는 사람입니다.'
  },
  winter: {
    season: 'winter',
    flowerName: '혹한을 녹이는 뜨거운 충정, 동백꽃 (Camellia)',
    flowerMeaning: '진실된 사랑, 비밀스러운 강인함',
    imageUrl: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=600&q=80',
    description: '당신은 주변이 가혹하고 힘겹게 얼어붙어 침체된 상황에서도 한결같이 나의 소중한 신념과 사람들을 끈기 있게 수호하는 겨울의 참기 힘든 동백꽃 캐릭터입니다. 화려하게 떠벌리는 법은 결코 없지만 오직 단단하고 기품 있는 태도로 신뢰를 온전히 지켜내는 든든한 사람입니다.'
  }
};
