import type { MattressModel } from './mattresses';

export const getSlimbedData = (role: 'scheme' | 'factory'): MattressModel[] => [
  {
    id: "foam-slimbed",
    name: "FOAM SLIMBED",
    category: "",
    sourcePriceList: "FOAM SLIMBED PRICE LIST",
    sizes: [
      {
        sizeId: "6X3", // 72X36
        thicknessPrices: [
          { thicknessInches: 1, price: role === 'factory' ? 1350 : 1000 },
          { thicknessInches: 2, price: role === 'factory' ? 2200 : 1800 },
          { thicknessInches: 3, price: role === 'factory' ? 2700 : 2300 }
        ]
      },
      {
        sizeId: "6X4", // 72X48
        thicknessPrices: [
          { thicknessInches: 1, price: role === 'factory' ? 1700 : 1200 },
          { thicknessInches: 2, price: role === 'factory' ? 2700 : 2000 },
          { thicknessInches: 3, price: role === 'factory' ? 3200 : 2800 }
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
        sizeId: "6X3", // 72X36
        thicknessPrices: [
          { thicknessInches: 3, price: role === 'factory' ? 3500 : 3000 }
        ]
      },
      {
        sizeId: "6X4", // 72X48
        thicknessPrices: [
          { thicknessInches: 3, price: role === 'factory' ? 3950 : 3750 }
        ]
      }
    ]
  }
];
