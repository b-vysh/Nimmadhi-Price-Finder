export interface PillowItem {
  id: string;
  name: string;
  price: number;
}

export const PILLOW_DATA: PillowItem[] = [
  { id: "mini-super-pillow", name: "MINI SIZE SUPER PILLOW", price: 100 },
  { id: "super-pillow", name: "SUPER PILLOW", price: 150 },
  { id: "fine-pillow", name: "FINE PILLOW", price: 200 },
  { id: "micro-pillow", name: "MICRO PILLOW", price: 350 },
  { id: "memory-soap-neck", name: "MEMORY SOAP & NECK", price: 1000 },
  { id: "latex-soap-neck", name: "LATEX SOAP PILLOW & NECK", price: 1250 },
  { id: "grid-memory-pillow", name: "GRID MEMORY PILLOW", price: 1500 },
  { id: "gel-memory-pillow", name: "GEL MEMORY PILLOW", price: 1750 }
];
