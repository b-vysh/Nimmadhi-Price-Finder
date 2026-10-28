import type { MattressModel } from './mattresses';

export const getProtectorData = (role: 'scheme' | 'factory'): MattressModel[] => [
  {
    id: "water-proof-protector",
    name: "WATER PROOF PROTECTOR (12\" PRO)",
    category: "",
    sourcePriceList: "PROTECTOR PRICE LIST",
    sizes: [
      {
        sizeId: "6X3", // 72X36
        thicknessPrices: [{ thicknessInches: 12, price: role === 'factory' ? 800 : 600 }]
      },
      {
        sizeId: "6.25X3", // 75X36
        thicknessPrices: [{ thicknessInches: 12, price: role === 'factory' ? 900 : 700 }]
      },
      {
        sizeId: "6X4", // 72X48
        thicknessPrices: [{ thicknessInches: 12, price: role === 'factory' ? 1000 : 800 }]
      },
      {
        sizeId: "6.25X4", // 75X48
        thicknessPrices: [{ thicknessInches: 12, price: role === 'factory' ? 1100 : 900 }]
      },
      {
        sizeId: "6.25X5", // 75X60
        thicknessPrices: [{ thicknessInches: 12, price: role === 'factory' ? 1200 : 1000 }]
      },
      {
        sizeId: "6.25X6", // 75X72
        thicknessPrices: [{ thicknessInches: 12, price: role === 'factory' ? 1300 : 1100 }]
      },
      {
        sizeId: "6.5X6", // 78X72
        thicknessPrices: [{ thicknessInches: 12, price: role === 'factory' ? 1400 : 1200 }]
      }
    ]
  }
];
