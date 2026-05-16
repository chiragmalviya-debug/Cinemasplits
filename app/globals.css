@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #0a0908;
  --bg-deep: #05040a;
  --ink: #f5f0e8;
  --ink-muted: #8a8378;
  --ink-faint: #4d4842;
  --line: rgba(245, 240, 232, 0.07);
  --line-strong: rgba(245, 240, 232, 0.16);
  --accent: #13edff;
  --accent-dim: #0aa4b8;
  --accent-glow: rgba(19, 237, 255, 0.18);
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-serif: 'Instrument Serif', Georgia, serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-sans);
  font-weight: 400;
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: -0.005em;
  position: relative;
}

/* film grain — fixed across the viewport */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='280'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.9  0 0 0 0 0.82  0 0 0 0.55 0'/></filter><rect width='280' height='280' filter='url(%23n)'/></svg>");
  opacity: 0.06;
  pointer-events: none;
  z-index: 100;
  mix-blend-mode: overlay;
}

/* vignette */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.5) 100%);
  pointer-events: none;
  z-index: 99;
}

/* drifting ambient brand-cyan glow */
.glow {
  position: fixed;
  width: 70vw;
  height: 70vw;
  max-width: 1100px;
  max-height: 1100px;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.55;
  pointer-events: none;
  z-index: 0;
  animation: drift 45s ease-in-out infinite;
}
.glow.cyan {
  top: -25vh;
  left: -20vw;
  background: radial-gradient(circle, rgba(19, 237, 255, 0.10) 0%, transparent 65%);
}
.glow.amber {
  top: 50vh;
  left: 55vw;
  background: radial-gradient(circle, rgba(217, 149, 100, 0.10) 0%, transparent 65%);
  animation-delay: -22s;
  animation-duration: 55s;
}
.glow.rose {
  top: 130vh;
  left: -10vw;
  background: radial-gradient(circle, rgba(201, 82, 138, 0.09) 0%, transparent 65%);
  animation-delay: -10s;
  animation-duration: 65s;
}

@keyframes drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%      { transform: translate(25vw, 15vh) scale(1.1); }
  66%      { transform: translate(-12vw, 30vh) scale(0.95); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.55; transform: scale(0.8); }
}

em {
  font-style: italic;
}
