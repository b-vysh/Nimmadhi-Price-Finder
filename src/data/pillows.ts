export interface PillowItem {
  id: string;
  name: string;
  disPrice: number; // Discount / Scheme Rate
  actPrice: number; // Actual Showroom / Factory Rate
}

export const PILLOW_DATA: PillowItem[] = [
  { id: "mini-super-pillow", name: "MINI SIZE SUPER PILLOW", disPrice: 100, actPrice: 150 },
  { id: "super-pillow", name: "SUPER PILLOW", disPrice: 150, actPrice: 200 },
  { id: "fine-pillow", name: "FINE PILLOW", disPrice: 200, actPrice: 250 },
  { id: "micro-pillow", name: "MICRO PILLOW", disPrice: 350, actPrice: 400 },
  { id: "memory-soap-neck", name: "MEMORY SOAP & NECK", disPrice: 1000, actPrice: 1250 },
  { id: "latex-soap-neck", name: "LATEX SOAP PILLOW & NECK", disPrice: 1250, actPrice: 1750 },
  { id: "grid-memory-pillow", name: "GRID MEMORY PILLOW", disPrice: 1500, actPrice: 1750 },
  { id: "gel-memory-pillow", name: "GEL MEMORY PILLOW", disPrice: 1750, actPrice: 2000 }
];
