import type { MattressModel } from './mattresses';

export const getTopperData = (role: 'scheme' | 'factory'): MattressModel[] => [
  {
    id: "memory-topper",
    name: "MEMORY TOPPER",
    category: "",
    sourcePriceList: "TOPPER PRICE LIST",
    sizes: [
      {
        sizeId: "6X3", // 72X36
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 5000 : 4750 }]
      },
      {
        sizeId: "6.25X3", // 75X36
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 5500 : 5000 }]
      },
      {
        sizeId: "6X4", // 72X48
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 7250 : 6750 }]
      },
      {
        sizeId: "6.25X4", // 75X48
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 7500 : 7000 }]
      },
      {
        sizeId: "6.25X5", // 75X60
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 8500 : 8000 }]
      },
      {
        sizeId: "6.5X5", // 78X60
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 8750 : 8250 }]
      },
      {
        sizeId: "6.25X6", // 75X72
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 9500 : 9000 }]
      },
      {
        sizeId: "6.5X6", // 78X72
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 10000 : 9500 }]
      }
    ]
  },
  {
    id: "latex-topper",
    name: "LATEX TOPPER",
    category: "",
    sourcePriceList: "TOPPER PRICE LIST",
    sizes: [
      {
        sizeId: "6X3", // 72X36
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 6000 : 5500 }]
      },
      {
        sizeId: "6.25X3", // 75X36
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 6250 : 5750 }]
      },
      {
        sizeId: "6X4", // 72X48
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 7750 : 7250 }]
      },
      {
        sizeId: "6.25X4", // 75X48
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 8000 : 7500 }]
      },
      {
        sizeId: "6.25X5", // 75X60
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 9000 : 8500 }]
      },
      {
        sizeId: "6.5X5", // 78X60
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 9250 : 8750 }]
      },
      {
        sizeId: "6.25X6", // 75X72
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 10500 : 10000 }]
      },
      {
        sizeId: "6.5X6", // 78X72
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 11000 : 10500 }]
      }
    ]
  },
  {
    id: "pu-topper",
    name: "PU TOPPER",
    category: "",
    sourcePriceList: "TOPPER PRICE LIST",
    sizes: [
      {
        sizeId: "6X3", // 72X36
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 3850 : 3350 }]
      },
      {
        sizeId: "6.25X3", // 75X36
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 4000 : 3500 }]
      },
      {
        sizeId: "6X4", // 72X48
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 4600 : 4100 }]
      },
      {
        sizeId: "6.25X4", // 75X48
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 4750 : 4250 }]
      },
      {
        sizeId: "6.25X5", // 75X60
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 5500 : 5000 }]
      },
      {
        sizeId: "6.5X5", // 78X60
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 5700 : 5200 }]
      },
      {
        sizeId: "6.25X6", // 75X72
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 6500 : 6000 }]
      },
      {
        sizeId: "6.5X6", // 78X72
        thicknessPrices: [{ thicknessInches: 2, price: role === 'factory' ? 6700 : 6200 }]
      }
    ]
  }
];

// Default export for backward compatibility
export const TOPPER_DATA: MattressModel[] = getTopperData('scheme');
