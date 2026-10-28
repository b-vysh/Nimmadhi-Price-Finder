import type { MattressModel } from './mattresses';

export const PROTECTOR_DATA: MattressModel[] = [
  {
    id: "water-proof-protector",
    name: "WATER PROOF PROTECTOR (12\" PRO)",
    category: "",
    sourcePriceList: "PROTECTOR PRICE LIST",
    sizes: [
      {
        sizeId: "6X3",
        thicknessPrices: [{ thicknessInches: 12, price: 600 }]
      },
      {
        sizeId: "6.25X3",
        thicknessPrices: [{ thicknessInches: 12, price: 700 }]
      },
      {
        sizeId: "6X4",
        thicknessPrices: [{ thicknessInches: 12, price: 800 }]
      },
      {
        sizeId: "6.25X4",
        thicknessPrices: [{ thicknessInches: 12, price: 900 }]
      },
      {
        sizeId: "6.25X5",
        thicknessPrices: [{ thicknessInches: 12, price: 1000 }]
      },
      {
        sizeId: "6.25X6",
        thicknessPrices: [{ thicknessInches: 12, price: 1100 }]
      },
      {
        sizeId: "6.5X6",
        thicknessPrices: [{ thicknessInches: 12, price: 1200 }]
      }
    ]
  }
];
