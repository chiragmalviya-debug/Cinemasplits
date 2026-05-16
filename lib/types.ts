// Cinemasplit data model

export type WorldSlug =
  | 'healing'
  | 'loneliness'
  | 'family-wounds'
  | 'identity-crisis'
  | 'insecurity-and-bullying'
  | 'purpose-and-ambition'
  | 'comeback'
  | 'love-and-longing'
  | 'grief-and-letting-go';

export interface Emotion {
  slug: string;
  name: string;
  tagline: string; // short evocative line for emotion page
}

export interface MoodWorld {
  slug: WorldSlug;
  number: string;       // "01"
  name: string;         // "Healing"
  tagline: string;      // "For the slow rebuild after the wound."
  description: string;  // longer description for the world page
  emotions: Emotion[];
  /** CSS background composition for the world's atmospheric "film still" */
  still: string;
  /** Page-level atmospheric bleed when you enter this world */
  pageAtmosphere: string;
  /** World-specific accent for in-world emphasis (warm tone unique to the world) */
  warm: string;
}

export interface Film {
  title: string;
  director: string;
  year: number;
  runtime: number; // minutes
  genre: string;
  /** Cinemasplit's curation reasoning — why this film for this emotion */
  why: string;
  /** What the viewer may feel after watching */
  after: string;
  /** CSS background for the editorial "poster" placeholder */
  posterStill: string;
}

/** key = `${worldSlug}/${emotionSlug}` */
export type FilmIndex = Record<string, Film[]>;
