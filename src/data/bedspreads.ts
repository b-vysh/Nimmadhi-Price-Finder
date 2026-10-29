export interface BedSpreadItem {
  id: string;
  category: 'Bed Spread' | '3D Print' | 'Comforter';
  name: string;
  size: string;
  pillowCovers: string;
  disPrice: number; // Discount / Scheme Rate
  actPrice: number; // Actual Showroom / Factory Rate
}

export const BEDSPREAD_DATA: BedSpreadItem[] = [
  // Bed Spread with Pillow Cover
  { id: "bs-60x90-rainbow-1-1", category: "Bed Spread", name: "RAINBOW (1+1)", size: "60X90", pillowCovers: "1 Cover", disPrice: 350, actPrice: 550 },
  { id: "bs-60x90-rainbow-1-2", category: "Bed Spread", name: "RAINBOW (1+2)", size: "60X90", pillowCovers: "2 Covers", disPrice: 400, actPrice: 600 },
  { id: "bs-70x90-rainbow-1-2", category: "Bed Spread", name: "RAINBOW (1+2)", size: "70X90", pillowCovers: "2 Covers", disPrice: 450, actPrice: 650 },
  { id: "bs-70x90-herbal-1-2", category: "Bed Spread", name: "HERBAL (1+2)", size: "70X90", pillowCovers: "2 Covers", disPrice: 300, actPrice: 500 },
  { id: "bs-90x100-strawberry-1-2", category: "Bed Spread", name: "STRAWBERRY (1+2)", size: "90X100", pillowCovers: "2 Covers", disPrice: 1000, actPrice: 1200 },
  { id: "bs-90x100-dreams-1-2", category: "Bed Spread", name: "DREAMS (1+2)", size: "90X100", pillowCovers: "2 Covers", disPrice: 700, actPrice: 900 },

  // 3D/7D Print Bed Spread with Pillow Cover
  { id: "3d-60x90-rainbow-1-1", category: "3D Print", name: "RAINBOW (1+1)", size: "60X90", pillowCovers: "1 Cover", disPrice: 700, actPrice: 800 },
  { id: "3d-70x90-rainbow-1-2", category: "3D Print", name: "RAINBOW (1+2)", size: "70X90", pillowCovers: "2 Covers", disPrice: 800, actPrice: 900 },
  { id: "3d-90x100-rainbow-1-2", category: "3D Print", name: "RAINBOW (1+2)", size: "90X100", pillowCovers: "2 Covers", disPrice: 1000, actPrice: 1100 },

  // Comforter
  { id: "comforter-90x100", category: "Comforter", name: "COMFORTER", size: "90X100", pillowCovers: "-", disPrice: 1300, actPrice: 1500 }
];
