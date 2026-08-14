// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep obsidian background
        bgPrimary: '#09090b',   // zinc-950
        bgSurface: '#121215',   // custom container background
        borderSubtle: '#27272a',// zinc-800
        accentCyan: '#22d3ee',  // cyan-400 for links/metrics
        accentEmerald: '#34d399'// emerald-400 for status badges
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Body typography
        mono: ['JetBrains Mono', 'monospace'], // Math/Code/Metrics typography
      },
    },
  },
  plugins: [],
};