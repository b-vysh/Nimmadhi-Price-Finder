import type { MattressModel } from './mattresses';

export const SLIMBED_DATA: MattressModel[] = [
  {
    id: "foam-slimbed",
    name: "FOAM SLIMBED",
    category: "",
    sourcePriceList: "FOAM SLIMBED PRICE LIST",
    sizes: [
      {
        sizeId: "6X3",
        thicknessPrices: [
          { thicknessInches: 1, price: 1000 },
          { thicknessInches: 2, price: 1800 },
          { thicknessInches: 3, price: 2300 }
        ]
      },
      {
        sizeId: "6X4",
        thicknessPrices: [
          { thicknessInches: 1, price: 1200 },
          { thicknessInches: 2, price: 2000 },
          { thicknessInches: 3, price: 2800 }
        ]
      }
    ]
  },
  {
    id: "folding-bed",
    name: "FOLDING BED",
    category: "",
    sourcePriceList: "FOLDING BED PRICE LIST",
    sizes: [
      {
        sizeId: "6X3",
        thicknessPrices: [
          { thicknessInches: 3, price: 3000 }
        ]
      },
      {
        sizeId: "6X4",
        thicknessPrices: [
          { thicknessInches: 3, price: 3750 }
        ]
      }
    ]
  }
];
