import { Emotion, MoodWorld, WorldSlug } from '../types';

export const moodWorlds: MoodWorld[] = [
  {
    slug: 'healing',
    number: '01',
    name: 'Healing',
    tagline: 'For the slow rebuild after the wound.',
    description:
      'Films for the part of you that is quietly putting itself back together — the slow, unglamorous work of becoming whole again.',
    warm: '#e9a06a',
    emotions: [
      { slug: 'self-acceptance', name: 'Self-acceptance', tagline: 'For making peace with who you turned out to be.' },
      { slug: 'heartbreak-recovery', name: 'Heartbreak recovery', tagline: 'For when you are rebuilding after the wound.' },
      { slug: 'forgiveness', name: 'Forgiveness', tagline: 'For learning to put the weight down.' },
      { slug: 'inner-peace', name: 'Inner peace', tagline: 'For the quiet you have been earning.' },
    ],
    still: `
      radial-gradient(ellipse 70% 50% at 78% 18%, rgba(232,162,112,0.55) 0%, transparent 55%),
      radial-gradient(ellipse 90% 60% at 25% 78%, rgba(190,90,55,0.28) 0%, transparent 65%),
      linear-gradient(165deg, #2d1812 0%, #14090a 100%)
    `,
    pageAtmosphere: `
      radial-gradient(ellipse 70% 50% at 85% 8%, rgba(232,162,112,0.32) 0%, transparent 55%),
      radial-gradient(ellipse 90% 60% at 10% 90%, rgba(190,90,55,0.18) 0%, transparent 65%),
      linear-gradient(180deg, transparent 0%, rgba(16,8,4,0.6) 80%)
    `,
  },
  {
    slug: 'loneliness',
    number: '02',
    name: 'Loneliness',
    tagline: 'For when no one seems to see you.',
    description:
      'Films for the silence that lives between you and everyone else — and the strange comfort of knowing that silence is not unique to you.',
    warm: '#7a9bd4',
    emotions: [
      { slug: 'feeling-invisible', name: 'Feeling invisible', tagline: 'For when you have to wave to be remembered.' },
      { slug: 'outsider', name: 'Outsider', tagline: 'For the seat at the back of every room.' },
      { slug: 'emotional-disconnection', name: 'Emotional disconnection', tagline: 'For when you cannot reach yourself either.' },
      { slug: 'misunderstood', name: 'Misunderstood', tagline: 'For the explanation no one waited around for.' },
    ],
    still: `
      radial-gradient(circle 6px at 72% 42%, rgba(220,230,255,0.9) 0%, rgba(180,200,235,0.3) 30%, transparent 75%),
      radial-gradient(circle 30px at 72% 42%, rgba(180,200,235,0.18) 0%, transparent 80%),
      radial-gradient(ellipse 110% 100% at 50% 65%, rgba(40,65,110,0.4) 0%, transparent 75%),
      linear-gradient(180deg, #060b18 0%, #0d1626 100%)
    `,
    pageAtmosphere: `
      radial-gradient(circle 4px at 70% 30%, rgba(220,230,255,0.9) 0%, transparent 80%),
      radial-gradient(ellipse 80% 60% at 50% 50%, rgba(40,65,110,0.35) 0%, transparent 75%),
      linear-gradient(180deg, transparent 0%, rgba(6,11,24,0.6) 80%)
    `,
  },
  {
    slug: 'family-wounds',
    number: '03',
    name: 'Family Wounds',
    tagline: 'For the home that hurt you.',
    description:
      'Films for the things you inherited that you did not ask for — and for slowly deciding which of them you will refuse to pass on.',
    warm: '#a88b62',
    emotions: [
      { slug: 'toxic-parenting', name: 'Toxic parenting', tagline: 'For the parent you had to outgrow alone.' },
      { slug: 'emotional-neglect', name: 'Emotional neglect', tagline: 'For the love that never quite arrived.' },
      { slug: 'generational-pressure', name: 'Generational pressure', tagline: 'For carrying everyone else\u2019s dream.' },
      { slug: 'lost-childhood', name: 'Lost childhood', tagline: 'For the years you spent being an adult too early.' },
    ],
    still: `
      radial-gradient(ellipse 80% 60% at 50% 45%, rgba(170,130,80,0.22) 0%, transparent 70%),
      linear-gradient(180deg, rgba(0,0,0,0.45) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.55) 100%),
      linear-gradient(145deg, #1f1812 0%, #15100a 100%)
    `,
    pageAtmosphere: `
      radial-gradient(ellipse 80% 60% at 50% 30%, rgba(170,130,80,0.20) 0%, transparent 70%),
      linear-gradient(180deg, transparent 0%, rgba(15,10,5,0.6) 80%)
    `,
  },
  {
    slug: 'identity-crisis',
    number: '04',
    name: 'Identity Crisis',
    tagline: 'For when you don\u2019t know who you are anymore.',
    description:
      'Films for the strange in-between, where the version of you that worked stopped working and the new one has not arrived yet.',
    warm: '#9580b8',
    emotions: [
      { slug: 'lost-in-life', name: 'Lost in life', tagline: 'For the path that disappeared mid-walk.' },
      { slug: 'imposter-syndrome', name: 'Imposter syndrome', tagline: 'For the room you keep thinking you snuck into.' },
      { slug: 'not-enough', name: 'Not enough', tagline: 'For the bar nobody told you you were measuring against.' },
      { slug: 'hiding-myself', name: 'Hiding myself', tagline: 'For the version of you only the dark gets to meet.' },
    ],
    still: `
      radial-gradient(ellipse 50% 40% at 22% 32%, rgba(150,128,180,0.35) 0%, transparent 50%),
      radial-gradient(ellipse 55% 45% at 78% 68%, rgba(108,90,140,0.30) 0%, transparent 55%),
      linear-gradient(155deg, #1c1623 0%, #0f0a14 100%)
    `,
    pageAtmosphere: `
      radial-gradient(ellipse 50% 40% at 22% 20%, rgba(150,128,180,0.28) 0%, transparent 55%),
      radial-gradient(ellipse 55% 45% at 78% 80%, rgba(108,90,140,0.22) 0%, transparent 60%),
      linear-gradient(180deg, transparent 0%, rgba(15,10,20,0.6) 80%)
    `,
  },
  {
    slug: 'insecurity-and-bullying',
    number: '05',
    name: 'Insecurity & Bullying',
    tagline: 'For the kid they tried to break.',
    description:
      'Films for the parts of you that grew up under someone else\u2019s contempt — and for the slow, stubborn reclaiming.',
    warm: '#c84545',
    emotions: [
      { slug: 'bullied-for-appearance', name: 'Bullied for appearance', tagline: 'For the body that took the hits before you did.' },
      { slug: 'bullied-for-being-quiet', name: 'Bullied for being quiet', tagline: 'For everyone who mistook your stillness for weakness.' },
      { slug: 'body-image', name: 'Body image', tagline: 'For the mirror that learned to lie back.' },
      { slug: 'social-anxiety', name: 'Social anxiety', tagline: 'For the room that became a stage you never agreed to.' },
    ],
    still: `
      radial-gradient(circle 38% at 50% 30%, rgba(200,70,70,0.40) 0%, rgba(200,70,70,0.10) 35%, transparent 60%),
      radial-gradient(ellipse 100% 50% at 50% 100%, rgba(0,0,0,0.55) 0%, transparent 60%),
      linear-gradient(180deg, #1b0a0a 0%, #0a0303 100%)
    `,
    pageAtmosphere: `
      radial-gradient(circle 30% at 50% 15%, rgba(200,70,70,0.30) 0%, transparent 55%),
      linear-gradient(180deg, transparent 0%, rgba(10,3,3,0.6) 80%)
    `,
  },
  {
    slug: 'purpose-and-ambition',
    number: '06',
    name: 'Purpose & Ambition',
    tagline: 'For the dream that won\u2019t let go.',
    description:
      'Films for the version of you that refuses to settle, and the long climb between knowing what you want and being able to hold it.',
    warm: '#e8aa3c',
    emotions: [
      { slug: 'searching-for-meaning', name: 'Searching for meaning', tagline: 'For the question that hasn\u2019t shut up since you turned twenty.' },
      { slug: 'underdog', name: 'Underdog', tagline: 'For everyone who was counted out at the start.' },
      { slug: 'late-bloomer', name: 'Late bloomer', tagline: 'For arriving on a timeline no one else can see.' },
      { slug: 'big-dreams', name: 'Big dreams', tagline: 'For the size of the thing only you can see.' },
    ],
    still: `
      radial-gradient(ellipse 90% 55% at 50% 105%, rgba(232,170,60,0.50) 0%, transparent 55%),
      radial-gradient(ellipse 45% 32% at 50% 92%, rgba(255,210,100,0.45) 0%, transparent 45%),
      linear-gradient(180deg, #1e1608 0%, #110a04 100%)
    `,
    pageAtmosphere: `
      radial-gradient(ellipse 90% 55% at 50% 110%, rgba(232,170,60,0.32) 0%, transparent 55%),
      linear-gradient(180deg, transparent 0%, rgba(17,10,4,0.6) 80%)
    `,
  },
  {
    slug: 'comeback',
    number: '07',
    name: 'Comeback',
    tagline: 'For the rise after being counted out.',
    description:
      'Films for the second act \u2014 the one that begins the day you decide the ending they wrote for you isn\u2019t the one you\u2019ll accept.',
    warm: '#ee6024',
    emotions: [
      { slug: 'rising-from-failure', name: 'Rising from failure', tagline: 'For the floor you didn\u2019t plan on, and the way back up.' },
      { slug: 'proving-them-wrong', name: 'Proving them wrong', tagline: 'For the silent ones who underestimated you.' },
      { slug: 'reinvention', name: 'Reinvention', tagline: 'For burning the version that didn\u2019t fit.' },
      { slug: 'second-chances', name: 'Second chances', tagline: 'For the door you didn\u2019t expect to open again.' },
    ],
    still: `
      linear-gradient(125deg, transparent 25%, rgba(238,96,36,0.30) 50%, transparent 75%),
      radial-gradient(ellipse 60% 50% at 28% 72%, rgba(210,70,30,0.38) 0%, transparent 55%),
      linear-gradient(160deg, #1c0a04 0%, #100502 100%)
    `,
    pageAtmosphere: `
      radial-gradient(ellipse 60% 50% at 20% 80%, rgba(210,70,30,0.28) 0%, transparent 55%),
      linear-gradient(180deg, transparent 0%, rgba(16,5,2,0.6) 80%)
    `,
  },
  {
    slug: 'love-and-longing',
    number: '08',
    name: 'Love & Longing',
    tagline: 'For the one you can\u2019t stop carrying.',
    description:
      'Films for the kind of love that is older than the relationship that contained it \u2014 longing as its own complete experience.',
    warm: '#c9528a',
    emotions: [
      { slug: 'after-heartbreak', name: 'After heartbreak', tagline: 'For the long silence after the door closed.' },
      { slug: 'unrequited-love', name: 'Unrequited love', tagline: 'For the love that has nowhere to land.' },
      { slug: 'romantic-longing', name: 'Romantic longing', tagline: 'For the ache that arrives without an address.' },
      { slug: 'missed-connections', name: 'Missed connections', tagline: 'For the lives you almost lived together.' },
    ],
    still: `
      radial-gradient(circle 40% at 22% 28%, rgba(225,148,188,0.38) 0%, transparent 50%),
      radial-gradient(circle 35% at 72% 62%, rgba(195,98,148,0.28) 0%, transparent 45%),
      linear-gradient(165deg, #1f0c16 0%, #12060d 100%)
    `,
    pageAtmosphere: `
      radial-gradient(circle 30% at 15% 15%, rgba(225,148,188,0.30) 0%, transparent 55%),
      radial-gradient(circle 25% at 85% 80%, rgba(195,98,148,0.22) 0%, transparent 55%),
      linear-gradient(180deg, transparent 0%, rgba(18,6,13,0.6) 80%)
    `,
  },
  {
    slug: 'grief-and-letting-go',
    number: '09',
    name: 'Grief & Letting Go',
    tagline: 'For the love that had to end.',
    description:
      'Films for the goodbyes you have to keep saying \u2014 to people, to versions of yourself, to lives you thought you were building.',
    warm: '#7a9aa0',
    emotions: [
      { slug: 'loss-of-a-person', name: 'Loss of a person', tagline: 'For the shape they left in the room.' },
      { slug: 'loss-of-a-version-of-you', name: 'Loss of a version of you', tagline: 'For grieving who you were going to be.' },
      { slug: 'moving-on', name: 'Moving on', tagline: 'For the foot you finally lift first.' },
      { slug: 'goodbye', name: 'Goodbye', tagline: 'For the way the last time always finds you.' },
    ],
    still: `
      radial-gradient(ellipse 80% 50% at 50% 48%, rgba(105,148,158,0.28) 0%, transparent 65%),
      linear-gradient(180deg, rgba(70,100,110,0.22) 0%, transparent 30%, transparent 68%, rgba(20,42,52,0.45) 100%),
      linear-gradient(165deg, #0f1719 0%, #06090b 100%)
    `,
    pageAtmosphere: `
      radial-gradient(ellipse 80% 50% at 50% 30%, rgba(105,148,158,0.22) 0%, transparent 65%),
      linear-gradient(180deg, transparent 0%, rgba(6,9,11,0.65) 80%)
    `,
  },
];

export function getWorld(slug: string): MoodWorld | undefined {
  return moodWorlds.find((w: MoodWorld) => w.slug === slug);
}

export function getEmotion(worldSlug: string, emotionSlug: string) {
  const world = getWorld(worldSlug);
  if (!world) return null;
  const emotion = world.emotions.find((e: Emotion) => e.slug === emotionSlug);
  if (!emotion) return null;
  return { world, emotion };
}
