import { Film, FilmIndex } from '../types';

// Per-film atmospheric "poster" compositions — tuned to each film's emotional fingerprint.
// Visual placeholders until TMDB integration lands.

const heartbreakRecovery: Film[] = [
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    director: 'Michel Gondry',
    year: 2004,
    runtime: 108,
    genre: 'Drama \u00b7 Sci-fi',
    why:
      'It understands that the impulse to erase someone you loved is just grief in another costume. You don\u2019t want to forget them. You want to stop hurting. The film makes you sit with the unbearable truth that the hurt was part of what made the love real \u2014 and that erasing the pain would also erase the proof that you ever mattered to each other.',
    after: 'You\u2019ll stop wishing you could undo them.',
    posterStill: `
      radial-gradient(ellipse 80% 60% at 90% 100%, rgba(217,120,64,0.55) 0%, transparent 55%),
      linear-gradient(155deg, #1a3a5e 0%, #4a7090 40%, #1c2a3a 100%)
    `,
  },
  {
    title: 'Her',
    director: 'Spike Jonze',
    year: 2013,
    runtime: 126,
    genre: 'Drama \u00b7 Romance',
    why:
      'Heartbreak as identity dissolution. Theodore can\u2019t tell where he ends and the loss begins, so he falls for something that has no body and no past and could never leave the way she did. The film is gentle with him \u2014 it lets him fall, lets him love again, lets him be left again. By the end you understand that healing isn\u2019t replacing someone. It\u2019s learning to be a person without them.',
    after: 'You\u2019ll feel less ashamed of how slowly you\u2019re moving on.',
    posterStill: `
      radial-gradient(ellipse 70% 50% at 50% 30%, rgba(245,160,112,0.4) 0%, transparent 60%),
      linear-gradient(160deg, #2a0e08 0%, #c84830 65%, #f5a070 100%)
    `,
  },
  {
    title: 'Past Lives',
    director: 'Celine Song',
    year: 2023,
    runtime: 105,
    genre: 'Drama \u00b7 Romance',
    why:
      'For the kind of heartbreak that isn\u2019t a breakup \u2014 it\u2019s a person you\u2019ll always wonder about. Nora and Hae Sung never get to be wrong for each other. The film grants what most heartbreak narratives refuse to: that some loves are simply located in lives you didn\u2019t get to live, and that\u2019s not tragedy. It\u2019s just arithmetic. The film makes you stop blaming yourself for choices that were never quite choices.',
    after: 'You\u2019ll stop punishing yourself for the timing.',
    posterStill: `
      radial-gradient(circle 60px at 78% 65%, rgba(232,180,90,0.7) 0%, transparent 70%),
      linear-gradient(180deg, #0a1424 0%, #1c2a48 60%, #0a1424 100%)
    `,
  },
  {
    title: 'The Worst Person in the World',
    director: 'Joachim Trier',
    year: 2021,
    runtime: 128,
    genre: 'Drama \u00b7 Romance',
    why:
      'The unspoken loneliness of being the one who leaves. Julie keeps walking out of relationships and the film never quite forgives her, never quite condemns her \u2014 it just watches with painful steadiness. If you\u2019re carrying guilt for ending something you should have stayed in, or staying in something you should have ended, this film looks at you without judgement and lets you sit there.',
    after: 'You\u2019ll be kinder to the version of you who walked away.',
    posterStill: `
      radial-gradient(ellipse 80% 50% at 50% 100%, rgba(212,184,80,0.4) 0%, transparent 55%),
      linear-gradient(150deg, #1c2a48 0%, #4a6588 55%, #2a3858 100%)
    `,
  },
  {
    title: '(500) Days of Summer',
    director: 'Marc Webb',
    year: 2009,
    runtime: 95,
    genre: 'Drama \u00b7 Romance',
    why:
      'About the gap between who you thought she was and who she actually was. The relationship\u2019s failure isn\u2019t really about Summer \u2014 it\u2019s about Tom\u2019s unwillingness to see her clearly while she\u2019s in front of him. The reason this film helps with heartbreak is that it eventually makes Tom see, and the seeing is the healing. You leave it more honest about your own relationship than when you arrived.',
    after: 'You\u2019ll stop romanticising the version that hurt you.',
    posterStill: `linear-gradient(165deg, #1a2840 0%, #6080a8 50%, #b0c0d8 100%)`,
  },
  {
    title: 'Lost in Translation',
    director: 'Sofia Coppola',
    year: 2003,
    runtime: 102,
    genre: 'Drama \u00b7 Romance',
    why:
      'Heartbreak doesn\u2019t always shout. Sometimes it just makes the world feel slightly muted, slightly far away \u2014 like you\u2019re watching your own life through glass. This film lives inside that muted-ness, and quietly insists that even there, connection still happens. A brief, impossible friendship in a foreign city. Two people who recognise each other for a few days. The film doesn\u2019t fix anything. It just sits with you, and somehow that\u2019s the help.',
    after: 'You\u2019ll remember connection still exists, even in the muted version of you.',
    posterStill: `
      radial-gradient(ellipse 60% 45% at 35% 35%, rgba(232,112,156,0.55) 0%, transparent 60%),
      radial-gradient(circle 80px at 80% 70%, rgba(255,180,200,0.4) 0%, transparent 70%),
      linear-gradient(165deg, #1a0a16 0%, #6a1a48 60%, #1a0a16 100%)
    `,
  },
];

export const films: FilmIndex = {
  'healing/heartbreak-recovery': heartbreakRecovery,
};

export function getFilms(worldSlug: string, emotionSlug: string): Film[] {
  return films[`${worldSlug}/${emotionSlug}`] ?? [];
}
