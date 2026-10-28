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
          { thicknessInches: 1, price: role === 'factory' ? 1350 : 1150 },
          { thicknessInches: 2, price: role === 'factory' ? 2200 : 2000 },
          { thicknessInches: 3, price: role === 'factory' ? 2700 : 2500 }
        ]
      },
      {
        sizeId: "6X4", // 72X48
        thicknessPrices: [
          { thicknessInches: 1, price: role === 'factory' ? 1700 : 1500 },
          { thicknessInches: 2, price: role === 'factory' ? 2700 : 2500 },
          { thicknessInches: 3, price: role === 'factory' ? 3200 : 3000 }
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
