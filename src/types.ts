export type Language = 'en' | 'am';

export interface BlogPost {
  id: string;
  title: Record<Language, string>;
  content: Record<Language, string>;
  date: string;
  imageUrl?: string;
  category: Record<Language, string>;
}

export interface Course {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  price: string;
  duration: Record<Language, string>;
  level: Record<Language, string>;
  highlights: Record<Language, string[]>;
}

export interface Video {
  id: string;
  title: Record<Language, string>;
  youtubeId: string;
}

export interface TranslationStrings {
  [key: string]: Record<Language, string>;
}
