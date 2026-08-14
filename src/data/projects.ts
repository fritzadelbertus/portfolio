// src/data/projects.ts
export interface Project {
  title: string;
  description: string;
  category: 'Quant' | 'Systems' | 'AI';
  tags: string[];
  metrics?: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "Golden Sundae: Automated Gold Trading Engine",
    description: "Low-capital quantitative trading system for XAUUSD incorporating real-time in-memory simulation, persistent state recovery, and multi-indicator risk filters.",
    category: "Quant",
    tags: ["MQL5", "MetaTrader 5", "Algorithmic Trading", "State Machines", "ATR Volatility"],
    metrics: "Profit Factor: 2.08 | Max Drawdown: < $500 USD (2025-2026)",
    slug: "golden-sundae"
  },
  {
    title: "OWL: Post-Quantum Digital Signature Protocol",
    description: "A GMW-FS based digital signature protocol using lattice-based cryptographic group action.",
    category: "Mathematics",
    tags: ["C", "Python", "Cryptography", "Algebra", "Benchmarking"],
    slug: "owl"
  },
  {
    title: "CryptoLab: A Custom Arch Linux Environment",
    description: "Customized Arch Linux development environment using Hyprland, Neovim, and shell scripting to automate research workflows.",
    category: "Systems",
    tags: ["Arch Linux", "Hyprland", "Neovim", "Shell Scripting"],
    slug: "cryptolab"
  },
  {
    title: "2048",
    description: "The classical 2048 game implemented in Miliastra Wonderland.",
    category: "Game Dev",
    tags: ["Miliastra Wonderland"],
    slug: "2048-game"
  },
  {
    title: "Chroma Clash",
    description: "A competitive 4 player color guessing game.",
    category: "Game Dev",
    tags: ["Miliastra Wonderland"],
    slug: "chroma-clash"
  },
  {
    title: "#AroundTheGlobe",
    description: "A life goal to travel a distance of 40075 km.",
    category: "Others",
    tags: ["Running"],
    slug: "around-the-globe"
  },
];