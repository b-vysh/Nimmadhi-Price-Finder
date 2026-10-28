export interface ComboOffer {
  id: string;
  name: string;
  price: number;
  regularPrice: number;
  breakdown: string;
  items: string[];
}

export const COMBO_DATA: ComboOffer[] = [
  {
    id: "combo-399",
    name: "RS. 399/- COMBO",
    price: 399,
    regularPrice: 500,
    breakdown: "300/- Super Pillows + 200/- Pillow Cover = 500/-",
    items: ["Super Pillow (2 Nos)", "Pillow Cover"]
  },
  {
    id: "bedroom-refresh-599",
    name: "BEDROOM REFRESH COMBO RS. 599/-",
    price: 599,
    regularPrice: 750,
    breakdown: "300/- Super Pillows + 450/- Rainbow = 750/-",
    items: ["Super Pillow (2 Nos)", "70X90 Rainbow Bed Spread (1+2)"]
  },
  {
    id: "combo-799-rainbow",
    name: "RS. 799/- COMBO (FINE PILLOW & RAINBOW)",
    price: 799,
    regularPrice: 850,
    breakdown: "400/- Pillows + 450/- Rainbow = 850/-",
    items: ["Fine Pillow (2 Nos)", "70X90 Rainbow Bed Spread (1+2)"]
  },
  {
    id: "combo-799-micro",
    name: "RS. 799/- COMBO (MICRO PILLOW & COVER)",
    price: 799,
    regularPrice: 900,
    breakdown: "700/- Micro Pillows + 200/- Pillow Cover = 900/-",
    items: ["Micro Pillow (2 Nos)", "Pillow Cover"]
  },
  {
    id: "family-combo-999",
    name: "FAMILY COMBO RS. 999/-",
    price: 999,
    regularPrice: 1100,
    breakdown: "700/- Micro Pillows + 400/- Fine Pillows = 1100/-",
    items: ["Micro Pillow (2 Nos)", "Fine Pillow (2 Nos)"]
  },
  {
    id: "combo-1000",
    name: "RS. 1000/- COMBO (3D PRINT RAINBOW)",
    price: 1000,
    regularPrice: 1200,
    breakdown: "600/- x 2 Bedsheets = 1200/-",
    items: ["3D Print 60X90 Rainbow (1+2) - 2 Nos"]
  },
  {
    id: "combo-1200",
    name: "RS. 1200/- COMBO (4 MICRO PILLOWS)",
    price: 1200,
    regularPrice: 1400,
    breakdown: "350/- x 4 Micro Pillows = 1400/-",
    items: ["Micro Pillow (4 Nos)"]
  },
  {
    id: "combo-1250",
    name: "RS. 1250/- COMBO (PROTECTOR & PILLOWS)",
    price: 1250,
    regularPrice: 1700,
    breakdown: "1000/- Protector + 700/- Micro Pillows = 1700/-",
    items: ["75X60X12 PRO Waterproof Protector", "Micro Pillow (2 Nos)"]
  }
];
