export interface BedSpreadItem {
  id: string;
  category: 'Bed Spread' | '7D Print' | 'Comforter';
  name: string;
  size: string;
  pillowCovers: string;
  price: number;
}

export const BEDSPREAD_DATA: BedSpreadItem[] = [
  // Bed Spread with Pillow Cover
  { id: "bs-60x90-rainbow-1-1", category: "Bed Spread", name: "RAINBOW (1+1)", size: "60X90", pillowCovers: "1 Cover", price: 350 },
  { id: "bs-60x90-rainbow-1-2", category: "Bed Spread", name: "RAINBOW (1+2)", size: "60X90", pillowCovers: "2 Covers", price: 400 },
  { id: "bs-70x90-rainbow-1-2", category: "Bed Spread", name: "RAINBOW (1+2)", size: "70X90", pillowCovers: "2 Covers", price: 450 },
  { id: "bs-70x90-herbal-1-2", category: "Bed Spread", name: "HERBAL (1+2)", size: "70X90", pillowCovers: "2 Covers", price: 300 },
  { id: "bs-90x100-dreams-1-2", category: "Bed Spread", name: "DREAMS (1+2)", size: "90X100", pillowCovers: "2 Covers", price: 700 },
  { id: "bs-90x100-strawberry-1-2", category: "Bed Spread", name: "STRAWBERRY (1+2)", size: "90X100", pillowCovers: "2 Covers", price: 1000 },

  // 7D Print Bed Spread with Pillow Cover
  { id: "7d-60x90-rainbow-1-1", category: "7D Print", name: "RAINBOW (1+1)", size: "60X90", pillowCovers: "1 Cover", price: 500 },
  { id: "7d-70x90-rainbow-1-2", category: "7D Print", name: "RAINBOW (1+2)", size: "70X90", pillowCovers: "2 Covers", price: 600 },
  { id: "7d-90x100-rainbow-1-2", category: "7D Print", name: "RAINBOW (1+2)", size: "90X100", pillowCovers: "2 Covers", price: 750 },

  // Comforter
  { id: "comforter-90x100", category: "Comforter", name: "COMFORTER", size: "90X100", pillowCovers: "-", price: 1300 }
];
