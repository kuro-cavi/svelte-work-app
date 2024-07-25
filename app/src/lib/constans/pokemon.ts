export const GENERATION_1 = 1; // Red and Green
export const GENERATION_2 = 2; // Gold and Silver
export const GENERATION_3 = 3; // Ruby and Sapphire
export const GENERATION_4 = 4; // Diamond and Pearl
export const GENERATION_5 = 5; // Black and White
export const GENERATION_6 = 6; // X and Y
export const GENERATION_7 = 7; // Sun and Moon
export const GENERATION_8 = 8; // Sword and Shield
export const GENERATION_9 = 9; // Scarlet and Violet

export const GENERATIONS = [
  GENERATION_1,
  GENERATION_2,
  GENERATION_3,
  GENERATION_4,
  GENERATION_5,
  GENERATION_6,
  GENERATION_7,
  GENERATION_8,
  GENERATION_9
] as const;
export type GenerationsType = typeof GENERATIONS[number]

export const POKEDEX = {
  [GENERATION_1]: { start: 1,   end: 151 },
  [GENERATION_2]: { start: 152, end: 251 },
  [GENERATION_3]: { start: 252, end: 386 },
  [GENERATION_4]: { start: 387, end: 493 },
  [GENERATION_5]: { start: 494, end: 649 },
  [GENERATION_6]: { start: 650, end: 721 },
  [GENERATION_7]: { start: 722, end: 809 },
  [GENERATION_8]: { start: 810, end: 905 },
  [GENERATION_9]: { start: 906, end: 1025 }
} as const;
export type PokedexType = typeof POKEDEX[keyof typeof POKEDEX]
