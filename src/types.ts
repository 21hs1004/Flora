export interface Flower {
  id: string;
  name: string;
  scientificName: string;
  meaning: string;
  story: string;
  imageUrl: string;
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  wateringGuide: string;
  likes: number;
}

export interface GuestbookEntry {
  id: string;
  author: string;
  content: string;
  chosenFlower: string;
  timestamp: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    text: string;
    score: Record<'spring' | 'summer' | 'autumn' | 'winter', number>;
  }[];
}

export interface QuizResult {
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  flowerName: string;
  flowerMeaning: string;
  imageUrl: string;
  description: string;
}
