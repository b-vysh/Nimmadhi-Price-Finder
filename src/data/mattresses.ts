export interface SizeFeet {
  width: string;
  length: string;
}

export interface SizeInches {
  width: number;
  length: number;
}

export interface SizeMetric {
  width: number;
  length: number;
}

export interface MattressSize {
  id: string;
  feetDisplay: string;
  inchesDisplay: string;
  metricDisplay: string;
}

export interface ThicknessPrice {
  thicknessInches: number;
  price: number;
}

export interface MattressModel {
  id: string;
  name: string;
  category: string;
  sourcePriceList: string;
  sizes: {
    sizeId: string;
    thicknessPrices: ThicknessPrice[];
  }[];
}

export const STANDARD_SIZES: Record<string, MattressSize> = {
  "6X2.5": {
    "id": "6X2.5",
    "feetDisplay": "6X2.5",
    "inchesDisplay": "72X30",
    "metricDisplay": "1829X762"
  },
  "6X3": {
    "id": "6X3",
    "feetDisplay": "6X3",
    "inchesDisplay": "72X36",
    "metricDisplay": "1829X915"
  },
  "6X4": {
    "id": "6X4",
    "feetDisplay": "6X4",
    "inchesDisplay": "72X48",
    "metricDisplay": "1829X1219"
  },
  "6.25X2.5": {
    "id": "6.25X2.5",
    "feetDisplay": "6.25X2.5",
    "inchesDisplay": "75X30",
    "metricDisplay": "1905X762"
  },
  "6.25X3": {
    "id": "6.25X3",
    "feetDisplay": "6.25X3",
    "inchesDisplay": "75X36",
    "metricDisplay": "1905X915"
  },
  "6.25X4": {
    "id": "6.25X4",
    "feetDisplay": "6.25X4",
    "inchesDisplay": "75X48",
    "metricDisplay": "1905X1219"
  },
  "6.25X5": {
    "id": "6.25X5",
    "feetDisplay": "6.25X5",
    "inchesDisplay": "75X60",
    "metricDisplay": "1905X1524"
  },
  "6.25X6": {
    "id": "6.25X6",
    "feetDisplay": "6.25X6",
    "inchesDisplay": "75X72",
    "metricDisplay": "1905X1829"
  },
  "6.5X6": {
    "id": "6.5X6",
    "feetDisplay": "6.5X6",
    "inchesDisplay": "78X72",
    "metricDisplay": "1905X1829"
  },
  "6X3.5": {
    "id": "6X3.5",
    "feetDisplay": "6X3.5",
    "inchesDisplay": "72X42",
    "metricDisplay": "1829X1067"
  },
  "6.25X3.5": {
    "id": "6.25X3.5",
    "feetDisplay": "6.25X3.5",
    "inchesDisplay": "75X42",
    "metricDisplay": "1905X1067"
  },
  "6.5X3": {
    "id": "6.5X3",
    "feetDisplay": "6.5X3",
    "inchesDisplay": "78X36",
    "metricDisplay": "1981X915"
  },
  "6.5X4": {
    "id": "6.5X4",
    "feetDisplay": "6.5X4",
    "inchesDisplay": "78X48",
    "metricDisplay": "1981X1219"
  },
  "6.5X5": {
    "id": "6.5X5",
    "feetDisplay": "6.5X5",
    "inchesDisplay": "78X60",
    "metricDisplay": "1981X1524"
  },
  "6X3.67": {
    "id": "6X3.67",
    "feetDisplay": "6X3.67",
    "inchesDisplay": "72X44",
    "metricDisplay": "1829X1118"
  },
  "6X5": {
    "id": "6X5",
    "feetDisplay": "6X5",
    "inchesDisplay": "72X60",
    "metricDisplay": "1829X1524"
  },
  "6X6": {
    "id": "6X6",
    "feetDisplay": "6X6",
    "inchesDisplay": "72X72",
    "metricDisplay": "1829X1829"
  },
  "6.25X3.67": {
    "id": "6.25X3.67",
    "feetDisplay": "6.25X3.67",
    "inchesDisplay": "75X44",
    "metricDisplay": "1905X1118"
  },
  "6.5X2.5": {
    "id": "6.5X2.5",
    "feetDisplay": "6.5X2.5",
    "inchesDisplay": "78X30",
    "metricDisplay": "1981X762"
  },
  "6.5X3.5": {
    "id": "6.5X3.5",
    "feetDisplay": "6.5X3.5",
    "inchesDisplay": "78X42",
    "metricDisplay": "1981X1067"
  },
  "6.5X3.67": {
    "id": "6.5X3.67",
    "feetDisplay": "6.5X3.67",
    "inchesDisplay": "78X44",
    "metricDisplay": "1981X1118"
  },
  "7X5": {
    "id": "7X5",
    "feetDisplay": "7X5",
    "inchesDisplay": "84X60",
    "metricDisplay": "2134X1524"
  },
  "7X6": {
    "id": "7X6",
    "feetDisplay": "7X6",
    "inchesDisplay": "84X72",
    "metricDisplay": "2134X1829"
  }
};

export const MATTRESS_DATA: MattressModel[] = [
  {
    "id": "100s-coir-foam",
    "name": "NIM 100S COIR",
    "category": "",
    "sourcePriceList": "100'S COIR / FOAM",
    "sizes": [
      {
        "sizeId": "6X2.5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 8753
          },
          {
            "thicknessInches": 5,
            "price": 9004
          }
        ]
      },
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 9576
          },
          {
            "thicknessInches": 5,
            "price": 9940
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 11396
          },
          {
            "thicknessInches": 5,
            "price": 11627
          }
        ]
      },
      {
        "sizeId": "6.25X2.5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 9259
          },
          {
            "thicknessInches": 5,
            "price": 9741
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 9780
          },
          {
            "thicknessInches": 5,
            "price": 10315
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 11896
          },
          {
            "thicknessInches": 5,
            "price": 12566
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 13704
          },
          {
            "thicknessInches": 5,
            "price": 15196
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 16954
          },
          {
            "thicknessInches": 5,
            "price": 18235
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 17632
          },
          {
            "thicknessInches": 5,
            "price": 18963
          }
        ]
      }
    ]
  },
  {
    "id": "smart-joy-single",
    "name": "NIM SMART D/JOY",
      "category": "",
    "sourcePriceList": "SMART-COIR-ECONOMY",
    "sizes": [
      {
        "sizeId": "6X2.5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 10058
          },
          {
            "thicknessInches": 5,
            "price": 11070
          }
        ]
      },
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 11047
          },
          {
            "thicknessInches": 5,
            "price": 12237
          }
        ]
      },
      {
        "sizeId": "6X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 12510
          },
          {
            "thicknessInches": 5,
            "price": 14375
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 13587
          },
          {
            "thicknessInches": 5,
            "price": 14963
          }
        ]
      },
      {
        "sizeId": "6.25X2.5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 10706
          },
          {
            "thicknessInches": 5,
            "price": 11657
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 11290
          },
          {
            "thicknessInches": 5,
            "price": 12582
          }
        ]
      },
      {
        "sizeId": "6.25X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 12883
          },
          {
            "thicknessInches": 5,
            "price": 14835
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 13960
          },
          {
            "thicknessInches": 5,
            "price": 15423
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 16298
          },
          {
            "thicknessInches": 5,
            "price": 18249
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 19999
          },
          {
            "thicknessInches": 5,
            "price": 23056
          }
        ]
      },
      {
        "sizeId": "6.5X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 12367
          },
          {
            "thicknessInches": 5,
            "price": 13772
          }
        ]
      },
      {
        "sizeId": "6.5X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 14949
          },
          {
            "thicknessInches": 5,
            "price": 16886
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 17331
          },
          {
            "thicknessInches": 5,
            "price": 19985
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 21950
          },
          {
            "thicknessInches": 5,
            "price": 25307
          }
        ]
      }
    ]
  },
  {
    "id": "smart-joy-double",
    "name": "NIM SMART S/JOY",
      "category": "",
    "sourcePriceList": "SMART-COIR-ECONOMY",
    "sizes": [
      {
        "sizeId": "6X2.5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 12573
          },
          {
            "thicknessInches": 5,
            "price": 13837
          }
        ]
      },
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 12958
          },
          {
            "thicknessInches": 5,
            "price": 14355
          }
        ]
      },
      {
        "sizeId": "6X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 14675
          },
          {
            "thicknessInches": 5,
            "price": 16862
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 15937
          },
          {
            "thicknessInches": 5,
            "price": 17552
          }
        ]
      },
      {
        "sizeId": "6.25X2.5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 12418
          },
          {
            "thicknessInches": 5,
            "price": 13304
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 13243
          },
          {
            "thicknessInches": 5,
            "price": 14758
          }
        ]
      },
      {
        "sizeId": "6.25X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 15112
          },
          {
            "thicknessInches": 5,
            "price": 17402
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 16375
          },
          {
            "thicknessInches": 5,
            "price": 18091
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 19118
          },
          {
            "thicknessInches": 5,
            "price": 21406
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 23459
          },
          {
            "thicknessInches": 5,
            "price": 27045
          }
        ]
      },
      {
        "sizeId": "6.5X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 14507
          },
          {
            "thicknessInches": 5,
            "price": 16156
          }
        ]
      },
      {
        "sizeId": "6.5X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 17536
          },
          {
            "thicknessInches": 5,
            "price": 19809
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 20330
          },
          {
            "thicknessInches": 5,
            "price": 23443
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 25747
          },
          {
            "thicknessInches": 5,
            "price": 29686
          }
        ]
      }
    ]
  },
  {
    "id": "100d-anbu-double",
    "name": "100D D/ANBU",
      "category": "",
    "sourcePriceList": "100D HIGH END",
    "sizes": [
      {
        "sizeId": "6X2.5",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 14287
          },
          {
            "thicknessInches": 6,
            "price": 15377
          }
        ]
      },
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 16287
          },
          {
            "thicknessInches": 6,
            "price": 17496
          }
        ]
      },
      {
        "sizeId": "6X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 18274
          },
          {
            "thicknessInches": 6,
            "price": 19617
          }
        ]
      },
      {
        "sizeId": "6X3.67",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 19777
          },
          {
            "thicknessInches": 6,
            "price": 20562
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 21097
          },
          {
            "thicknessInches": 6,
            "price": 22273
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 26038
          },
          {
            "thicknessInches": 6,
            "price": 27126
          }
        ]
      },
      {
        "sizeId": "6X6",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 30025
          },
          {
            "thicknessInches": 6,
            "price": 31366
          }
        ]
      },
      {
        "sizeId": "6.25X2.5",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 14536
          },
          {
            "thicknessInches": 6,
            "price": 15657
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 16588
          },
          {
            "thicknessInches": 6,
            "price": 17841
          }
        ]
      },
      {
        "sizeId": "6.25X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 18627
          },
          {
            "thicknessInches": 6,
            "price": 20012
          }
        ]
      },
      {
        "sizeId": "6.25X3.67",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 20143
          },
          {
            "thicknessInches": 6,
            "price": 20970
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 21503
          },
          {
            "thicknessInches": 6,
            "price": 22413
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 26536
          },
          {
            "thicknessInches": 6,
            "price": 27688
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 30626
          },
          {
            "thicknessInches": 6,
            "price": 32043
          }
        ]
      },
      {
        "sizeId": "6.5X2.5",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 14954
          },
          {
            "thicknessInches": 6,
            "price": 16092
          }
        ]
      },
      {
        "sizeId": "6.5X3",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 17071
          },
          {
            "thicknessInches": 6,
            "price": 18352
          }
        ]
      },
      {
        "sizeId": "6.5X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 19202
          },
          {
            "thicknessInches": 6,
            "price": 20625
          }
        ]
      },
      {
        "sizeId": "6.5X3.67",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 20744
          },
          {
            "thicknessInches": 6,
            "price": 21609
          }
        ]
      },
      {
        "sizeId": "6.5X4",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 22156
          },
          {
            "thicknessInches": 6,
            "price": 23116
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 27359
          },
          {
            "thicknessInches": 6,
            "price": 28556
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 5,
            "price": 31607
          },
          {
            "thicknessInches": 6,
            "price": 33077
          }
        ]
      }
    ]
  },
  {
    "id": "prakasam-bonnell",
    "name": "NIM PRAKASAM BONNELL",
    "category": "",
    "sourcePriceList": "PRAKASAM BONNELL",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 10815
          }
        ]
      },
      {
        "sizeId": "6X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 12619
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 14421
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 18026
          }
        ]
      },
      {
        "sizeId": "6X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 21632
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 11267
          }
        ]
      },
      {
        "sizeId": "6.25X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 13148
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 15022
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 18778
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 22533
          }
        ]
      },
      {
        "sizeId": "6.5X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 11718
          }
        ]
      },
      {
        "sizeId": "6.5X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 13670
          }
        ]
      },
      {
        "sizeId": "6.5X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 15623
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 19529
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 23434
          }
        ]
      },
      {
        "sizeId": "7X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 21031
          }
        ]
      },
      {
        "sizeId": "7X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 25238
          }
        ]
      }
    ]
  },
  {
    "id": "prakasam-pocket",
    "name": "NIM PRAKASAM POCKET",
      "category": "",
    "sourcePriceList": "PRAKASAM POCKET",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 14400
          }
        ]
      },
      {
        "sizeId": "6X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 16800
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 19200
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 24000
          }
        ]
      },
      {
        "sizeId": "6X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 28800
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 15000
          }
        ]
      },
      {
        "sizeId": "6.25X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 17504
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 20000
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 25000
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 30000
          }
        ]
      },
      {
        "sizeId": "6.5X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 15600
          }
        ]
      },
      {
        "sizeId": "6.5X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 18200
          }
        ]
      },
      {
        "sizeId": "6.5X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 20800
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 26000
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 31200
          }
        ]
      },
      {
        "sizeId": "7X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 28000
          }
        ]
      },
      {
        "sizeId": "7X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 33600
          }
        ]
      }
    ]
  },
  {
    "id": "magizhchi-std",
    "name": "NIM MAG BONNELL",
      "category": "",
    "sourcePriceList": "MAGIZHCHI BONNELL",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 16144
          },
          {
            "thicknessInches": 8,
            "price": 21529
          },
          {
            "thicknessInches": 10,
            "price": 26914
          }
        ]
      },
      {
        "sizeId": "6X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 17608
          },
          {
            "thicknessInches": 8,
            "price": 23478
          },
          {
            "thicknessInches": 10,
            "price": 29346
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 19032
          },
          {
            "thicknessInches": 8,
            "price": 25372
          },
          {
            "thicknessInches": 10,
            "price": 31725
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 21124
          },
          {
            "thicknessInches": 8,
            "price": 28170
          },
          {
            "thicknessInches": 10,
            "price": 35202
          }
        ]
      },
      {
        "sizeId": "6X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 25346
          },
          {
            "thicknessInches": 8,
            "price": 33803
          },
          {
            "thicknessInches": 10,
            "price": 42247
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 16575
          },
          {
            "thicknessInches": 8,
            "price": 22104
          },
          {
            "thicknessInches": 10,
            "price": 27633
          }
        ]
      },
      {
        "sizeId": "6.25X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 18614
          },
          {
            "thicknessInches": 8,
            "price": 24823
          },
          {
            "thicknessInches": 10,
            "price": 31032
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 19478
          },
          {
            "thicknessInches": 8,
            "price": 25973
          },
          {
            "thicknessInches": 10,
            "price": 32457
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 22000
          },
          {
            "thicknessInches": 8,
            "price": 29346
          },
          {
            "thicknessInches": 10,
            "price": 36680
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 26405
          },
          {
            "thicknessInches": 8,
            "price": 35202
          },
          {
            "thicknessInches": 10,
            "price": 44013
          }
        ]
      },
      {
        "sizeId": "6.5X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 16954
          },
          {
            "thicknessInches": 8,
            "price": 22601
          },
          {
            "thicknessInches": 10,
            "price": 28247
          }
        ]
      },
      {
        "sizeId": "6.5X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 18353
          },
          {
            "thicknessInches": 8,
            "price": 24470
          },
          {
            "thicknessInches": 10,
            "price": 30601
          }
        ]
      },
      {
        "sizeId": "6.5X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 19855
          },
          {
            "thicknessInches": 8,
            "price": 26470
          },
          {
            "thicknessInches": 10,
            "price": 33084
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 22889
          },
          {
            "thicknessInches": 8,
            "price": 30510
          },
          {
            "thicknessInches": 10,
            "price": 38143
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 27464
          },
          {
            "thicknessInches": 8,
            "price": 36614
          },
          {
            "thicknessInches": 10,
            "price": 45777
          }
        ]
      },
      {
        "sizeId": "7X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 26131
          },
          {
            "thicknessInches": 8,
            "price": 34836
          },
          {
            "thicknessInches": 10,
            "price": 43542
          }
        ]
      },
      {
        "sizeId": "7X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 31346
          },
          {
            "thicknessInches": 8,
            "price": 41803
          },
          {
            "thicknessInches": 10,
            "price": 52247
          }
        ]
      }
    ]
  },
  {
    "id": "magizhchi-pillow",
    "name": "NIM MAG BONNELL ET",
      "category": "",
    "sourcePriceList": "MAGIZHCHI BONNELL",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 19393
          },
          {
            "thicknessInches": 8,
            "price": 25859
          },
          {
            "thicknessInches": 10,
            "price": 32322
          }
        ]
      },
      {
        "sizeId": "6X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 21338
          },
          {
            "thicknessInches": 8,
            "price": 28446
          },
          {
            "thicknessInches": 10,
            "price": 35567
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 22980
          },
          {
            "thicknessInches": 8,
            "price": 30631
          },
          {
            "thicknessInches": 10,
            "price": 38295
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 27335
          },
          {
            "thicknessInches": 8,
            "price": 36452
          },
          {
            "thicknessInches": 10,
            "price": 45567
          }
        ]
      },
      {
        "sizeId": "6X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 32803
          },
          {
            "thicknessInches": 8,
            "price": 43737
          },
          {
            "thicknessInches": 10,
            "price": 54684
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 19899
          },
          {
            "thicknessInches": 8,
            "price": 26528
          },
          {
            "thicknessInches": 10,
            "price": 33155
          }
        ]
      },
      {
        "sizeId": "6.25X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 22639
          },
          {
            "thicknessInches": 8,
            "price": 30189
          },
          {
            "thicknessInches": 10,
            "price": 37740
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 23560
          },
          {
            "thicknessInches": 8,
            "price": 31414
          },
          {
            "thicknessInches": 10,
            "price": 39267
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 28472
          },
          {
            "thicknessInches": 8,
            "price": 37966
          },
          {
            "thicknessInches": 10,
            "price": 47462
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 34166
          },
          {
            "thicknessInches": 8,
            "price": 45567
          },
          {
            "thicknessInches": 10,
            "price": 56956
          }
        ]
      },
      {
        "sizeId": "6.5X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 20366
          },
          {
            "thicknessInches": 8,
            "price": 27159
          },
          {
            "thicknessInches": 10,
            "price": 33952
          }
        ]
      },
      {
        "sizeId": "6.5X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 22474
          },
          {
            "thicknessInches": 8,
            "price": 29974
          },
          {
            "thicknessInches": 10,
            "price": 37462
          }
        ]
      },
      {
        "sizeId": "6.5X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 24115
          },
          {
            "thicknessInches": 8,
            "price": 32146
          },
          {
            "thicknessInches": 10,
            "price": 40188
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 29621
          },
          {
            "thicknessInches": 8,
            "price": 39494
          },
          {
            "thicknessInches": 10,
            "price": 49355
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 35543
          },
          {
            "thicknessInches": 8,
            "price": 47386
          },
          {
            "thicknessInches": 10,
            "price": 59229
          }
        ]
      },
      {
        "sizeId": "7X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 33813
          },
          {
            "thicknessInches": 8,
            "price": 45075
          },
          {
            "thicknessInches": 10,
            "price": 56351
          }
        ]
      },
      {
        "sizeId": "7X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 40567
          },
          {
            "thicknessInches": 8,
            "price": 54091
          },
          {
            "thicknessInches": 10,
            "price": 67613
          }
        ]
      }
    ]
  },
  {
    "id": "magizhchi-euro",
    "name": "NIM MAG BONNELL PT",
      "category": "",
    "sourcePriceList": "MAGIZHCHI BONNELL",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 19993
          },
          {
            "thicknessInches": 8,
            "price": 26659
          },
          {
            "thicknessInches": 10,
            "price": 33322
          }
        ]
      },
      {
        "sizeId": "6X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 21998
          },
          {
            "thicknessInches": 8,
            "price": 29326
          },
          {
            "thicknessInches": 10,
            "price": 36666
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 23691
          },
          {
            "thicknessInches": 8,
            "price": 31577
          },
          {
            "thicknessInches": 10,
            "price": 39480
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 28181
          },
          {
            "thicknessInches": 8,
            "price": 37580
          },
          {
            "thicknessInches": 10,
            "price": 46976
          }
        ]
      },
      {
        "sizeId": "6X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 33817
          },
          {
            "thicknessInches": 8,
            "price": 45090
          },
          {
            "thicknessInches": 10,
            "price": 56375
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 20514
          },
          {
            "thicknessInches": 8,
            "price": 27348
          },
          {
            "thicknessInches": 10,
            "price": 34181
          }
        ]
      },
      {
        "sizeId": "6.25X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 23339
          },
          {
            "thicknessInches": 8,
            "price": 31122
          },
          {
            "thicknessInches": 10,
            "price": 38906
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 24289
          },
          {
            "thicknessInches": 8,
            "price": 32385
          },
          {
            "thicknessInches": 10,
            "price": 40482
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 29352
          },
          {
            "thicknessInches": 8,
            "price": 39141
          },
          {
            "thicknessInches": 10,
            "price": 48930
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 35223
          },
          {
            "thicknessInches": 8,
            "price": 46976
          },
          {
            "thicknessInches": 10,
            "price": 58717
          }
        ]
      },
      {
        "sizeId": "6.5X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 20996
          },
          {
            "thicknessInches": 8,
            "price": 27999
          },
          {
            "thicknessInches": 10,
            "price": 35002
          }
        ]
      },
      {
        "sizeId": "6.5X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 23169
          },
          {
            "thicknessInches": 8,
            "price": 30901
          },
          {
            "thicknessInches": 10,
            "price": 38621
          }
        ]
      },
      {
        "sizeId": "6.5X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 24861
          },
          {
            "thicknessInches": 8,
            "price": 33141
          },
          {
            "thicknessInches": 10,
            "price": 41432
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 30536
          },
          {
            "thicknessInches": 8,
            "price": 40715
          },
          {
            "thicknessInches": 10,
            "price": 50882
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 36642
          },
          {
            "thicknessInches": 8,
            "price": 48852
          },
          {
            "thicknessInches": 10,
            "price": 61062
          }
        ]
      },
      {
        "sizeId": "7X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 34859
          },
          {
            "thicknessInches": 8,
            "price": 46470
          },
          {
            "thicknessInches": 10,
            "price": 58093
          }
        ]
      },
      {
        "sizeId": "7X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 41822
          },
          {
            "thicknessInches": 8,
            "price": 55764
          },
          {
            "thicknessInches": 10,
            "price": 69704
          }
        ]
      }
    ]
  },
  {
    "id": "inimai-std",
    "name": "NIM INIMAI POCKTED",
      "category": "",
    "sourcePriceList": "INIMAI POCKETED",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 18964
          },
          {
            "thicknessInches": 8,
            "price": 24091
          },
          {
            "thicknessInches": 10,
            "price": 29911
          }
        ]
      },
      {
        "sizeId": "6X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 22234
          },
          {
            "thicknessInches": 8,
            "price": 28105
          },
          {
            "thicknessInches": 10,
            "price": 34899
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 25504
          },
          {
            "thicknessInches": 8,
            "price": 32121
          },
          {
            "thicknessInches": 10,
            "price": 39886
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 32071
          },
          {
            "thicknessInches": 8,
            "price": 40151
          },
          {
            "thicknessInches": 10,
            "price": 49861
          }
        ]
      },
      {
        "sizeId": "6X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 38599
          },
          {
            "thicknessInches": 8,
            "price": 48182
          },
          {
            "thicknessInches": 10,
            "price": 59823
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 19785
          },
          {
            "thicknessInches": 8,
            "price": 25100
          },
          {
            "thicknessInches": 10,
            "price": 31161
          }
        ]
      },
      {
        "sizeId": "6.25X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 23194
          },
          {
            "thicknessInches": 8,
            "price": 29280
          },
          {
            "thicknessInches": 10,
            "price": 36363
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 26603
          },
          {
            "thicknessInches": 8,
            "price": 33460
          },
          {
            "thicknessInches": 10,
            "price": 41543
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 33421
          },
          {
            "thicknessInches": 8,
            "price": 41831
          },
          {
            "thicknessInches": 10,
            "price": 51932
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 40240
          },
          {
            "thicknessInches": 8,
            "price": 50188
          },
          {
            "thicknessInches": 10,
            "price": 62322
          }
        ]
      },
      {
        "sizeId": "6.5X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 20593
          },
          {
            "thicknessInches": 8,
            "price": 26099
          },
          {
            "thicknessInches": 10,
            "price": 32411
          }
        ]
      },
      {
        "sizeId": "6.5X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 24141
          },
          {
            "thicknessInches": 8,
            "price": 30454
          },
          {
            "thicknessInches": 10,
            "price": 37802
          }
        ]
      },
      {
        "sizeId": "6.5X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 27689
          },
          {
            "thicknessInches": 8,
            "price": 34797
          },
          {
            "thicknessInches": 10,
            "price": 43184
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 34785
          },
          {
            "thicknessInches": 8,
            "price": 43497
          },
          {
            "thicknessInches": 10,
            "price": 54015
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 41868
          },
          {
            "thicknessInches": 8,
            "price": 52196
          },
          {
            "thicknessInches": 10,
            "price": 64810
          }
        ]
      },
      {
        "sizeId": "7X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 39835
          },
          {
            "thicknessInches": 8,
            "price": 49658
          },
          {
            "thicknessInches": 10,
            "price": 61654
          }
        ]
      },
      {
        "sizeId": "7X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 47802
          },
          {
            "thicknessInches": 8,
            "price": 59583
          },
          {
            "thicknessInches": 10,
            "price": 73988
          }
        ]
      }
    ]
  },
  {
    "id": "inimai-mem",
    "name": "NIM INIMAI POCKTED MEMORY ET",
      "category": "",
    "sourcePriceList": "INIMAI POCKETED",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 21591
          },
          {
            "thicknessInches": 8,
            "price": 27248
          },
          {
            "thicknessInches": 10,
            "price": 34962
          }
        ]
      },
      {
        "sizeId": "6X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 25189
          },
          {
            "thicknessInches": 8,
            "price": 31793
          },
          {
            "thicknessInches": 10,
            "price": 40782
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 28787
          },
          {
            "thicknessInches": 8,
            "price": 36325
          },
          {
            "thicknessInches": 10,
            "price": 46615
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 35984
          },
          {
            "thicknessInches": 8,
            "price": 45416
          },
          {
            "thicknessInches": 10,
            "price": 58269
          }
        ]
      },
      {
        "sizeId": "6X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 43182
          },
          {
            "thicknessInches": 8,
            "price": 54494
          },
          {
            "thicknessInches": 10,
            "price": 69924
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 22488
          },
          {
            "thicknessInches": 8,
            "price": 28383
          },
          {
            "thicknessInches": 10,
            "price": 36414
          }
        ]
      },
      {
        "sizeId": "6.25X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 26238
          },
          {
            "thicknessInches": 8,
            "price": 33119
          },
          {
            "thicknessInches": 10,
            "price": 42500
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 29987
          },
          {
            "thicknessInches": 8,
            "price": 37841
          },
          {
            "thicknessInches": 10,
            "price": 48560
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 37474
          },
          {
            "thicknessInches": 8,
            "price": 47311
          },
          {
            "thicknessInches": 10,
            "price": 60694
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 44974
          },
          {
            "thicknessInches": 8,
            "price": 56766
          },
          {
            "thicknessInches": 10,
            "price": 72827
          }
        ]
      },
      {
        "sizeId": "6.5X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 23383
          },
          {
            "thicknessInches": 8,
            "price": 29520
          },
          {
            "thicknessInches": 10,
            "price": 37877
          }
        ]
      },
      {
        "sizeId": "6.5X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 27285
          },
          {
            "thicknessInches": 8,
            "price": 34431
          },
          {
            "thicknessInches": 10,
            "price": 44178
          }
        ]
      },
      {
        "sizeId": "6.5X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 31186
          },
          {
            "thicknessInches": 8,
            "price": 39355
          },
          {
            "thicknessInches": 10,
            "price": 50492
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 38976
          },
          {
            "thicknessInches": 8,
            "price": 49192
          },
          {
            "thicknessInches": 10,
            "price": 63118
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 46780
          },
          {
            "thicknessInches": 8,
            "price": 59039
          },
          {
            "thicknessInches": 10,
            "price": 75744
          }
        ]
      },
      {
        "sizeId": "7X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 44494
          },
          {
            "thicknessInches": 8,
            "price": 56161
          },
          {
            "thicknessInches": 10,
            "price": 72057
          }
        ]
      },
      {
        "sizeId": "7X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 53396
          },
          {
            "thicknessInches": 8,
            "price": 67386
          },
          {
            "thicknessInches": 10,
            "price": 86464
          }
        ]
      }
    ]
  },
  {
    "id": "inimai-lat",
    "name": "NIM INIMAI POCKTED LATEX ET",
      "category": "",
    "sourcePriceList": "INIMAI POCKETED",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 28788
          },
          {
            "thicknessInches": 8,
            "price": 36330
          },
          {
            "thicknessInches": 10,
            "price": 46616
          }
        ]
      },
      {
        "sizeId": "6X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 33585
          },
          {
            "thicknessInches": 8,
            "price": 42391
          },
          {
            "thicknessInches": 10,
            "price": 54376
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 38384
          },
          {
            "thicknessInches": 8,
            "price": 48434
          },
          {
            "thicknessInches": 10,
            "price": 62154
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 47979
          },
          {
            "thicknessInches": 8,
            "price": 60556
          },
          {
            "thicknessInches": 10,
            "price": 77694
          }
        ]
      },
      {
        "sizeId": "6X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 57576
          },
          {
            "thicknessInches": 8,
            "price": 72659
          },
          {
            "thicknessInches": 10,
            "price": 93233
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 29984
          },
          {
            "thicknessInches": 8,
            "price": 37845
          },
          {
            "thicknessInches": 10,
            "price": 48553
          }
        ]
      },
      {
        "sizeId": "6.25X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 34984
          },
          {
            "thicknessInches": 8,
            "price": 44159
          },
          {
            "thicknessInches": 10,
            "price": 56667
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 39984
          },
          {
            "thicknessInches": 8,
            "price": 50455
          },
          {
            "thicknessInches": 10,
            "price": 64747
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 49966
          },
          {
            "thicknessInches": 8,
            "price": 63082
          },
          {
            "thicknessInches": 10,
            "price": 80926
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 59966
          },
          {
            "thicknessInches": 8,
            "price": 75689
          },
          {
            "thicknessInches": 10,
            "price": 97104
          }
        ]
      },
      {
        "sizeId": "6.5X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 31178
          },
          {
            "thicknessInches": 8,
            "price": 39360
          },
          {
            "thicknessInches": 10,
            "price": 50504
          }
        ]
      },
      {
        "sizeId": "6.5X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 36381
          },
          {
            "thicknessInches": 8,
            "price": 45908
          },
          {
            "thicknessInches": 10,
            "price": 58905
          }
        ]
      },
      {
        "sizeId": "6.5X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 41582
          },
          {
            "thicknessInches": 8,
            "price": 52474
          },
          {
            "thicknessInches": 10,
            "price": 67323
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 51969
          },
          {
            "thicknessInches": 8,
            "price": 65590
          },
          {
            "thicknessInches": 10,
            "price": 84159
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 62373
          },
          {
            "thicknessInches": 8,
            "price": 78720
          },
          {
            "thicknessInches": 10,
            "price": 100993
          }
        ]
      },
      {
        "sizeId": "7X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 59326
          },
          {
            "thicknessInches": 8,
            "price": 74882
          },
          {
            "thicknessInches": 10,
            "price": 96077
          }
        ]
      },
      {
        "sizeId": "7X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 71196
          },
          {
            "thicknessInches": 8,
            "price": 89849
          },
          {
            "thicknessInches": 10,
            "price": 115286
          }
        ]
      }
    ]
  },
  {
    "id": "anandham-memory",
    "name": "NIM ANANDHAM FOAM MEM",
      "category": "",
    "sourcePriceList": "ANANDHAM MEMORY FOAM",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 21605
          },
          {
            "thicknessInches": 8,
            "price": 28598
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 29262
          },
          {
            "thicknessInches": 8,
            "price": 36577
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 34426
          },
          {
            "thicknessInches": 8,
            "price": 43037
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 23831
          },
          {
            "thicknessInches": 8,
            "price": 29791
          }
        ]
      },
      {
        "sizeId": "6.25X3.67",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 27940
          },
          {
            "thicknessInches": 8,
            "price": 34926
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 30480
          },
          {
            "thicknessInches": 8,
            "price": 38100
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 35864
          },
          {
            "thicknessInches": 8,
            "price": 44831
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 41032
          },
          {
            "thicknessInches": 8,
            "price": 51290
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 37297
          },
          {
            "thicknessInches": 8,
            "price": 46623
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 42493
          },
          {
            "thicknessInches": 8,
            "price": 53119
          }
        ]
      }
    ]
  },
  {
    "id": "anandham-latex",
    "name": "NIM ANANDHAM FOAM LATEX",
      "category": "",
    "sourcePriceList": "ANANDHAM LATEX FOAM",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 27878
          },
          {
            "thicknessInches": 8,
            "price": 34852
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 35660
          },
          {
            "thicknessInches": 8,
            "price": 44575
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 41954
          },
          {
            "thicknessInches": 8,
            "price": 52447
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 29042
          },
          {
            "thicknessInches": 8,
            "price": 36305
          }
        ]
      },
      {
        "sizeId": "6.25X3.67",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 34050
          },
          {
            "thicknessInches": 8,
            "price": 42562
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 37145
          },
          {
            "thicknessInches": 8,
            "price": 46432
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 43704
          },
          {
            "thicknessInches": 8,
            "price": 54633
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 50005
          },
          {
            "thicknessInches": 8,
            "price": 62506
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 45453
          },
          {
            "thicknessInches": 8,
            "price": 56818
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 51785
          },
          {
            "thicknessInches": 8,
            "price": 64734
          }
        ]
      }
    ]
  },
  {
    "id": "supersleep-single-joy",
    "name": "NIM SU.SL S/JOY",
      "category": "",
    "sourcePriceList": "SUPER SLEEP",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 11470
          },
          {
            "thicknessInches": 5,
            "price": 12219
          },
          {
            "thicknessInches": 6,
            "price": 13689
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 13689
          },
          {
            "thicknessInches": 5,
            "price": 16657
          },
          {
            "thicknessInches": 6,
            "price": 17767
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 15989
          },
          {
            "thicknessInches": 5,
            "price": 17767
          },
          {
            "thicknessInches": 6,
            "price": 19892
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 12219
          },
          {
            "thicknessInches": 5,
            "price": 12954
          },
          {
            "thicknessInches": 6,
            "price": 14800
          }
        ]
      },
      {
        "sizeId": "6.25X3.67",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 13569
          },
          {
            "thicknessInches": 5,
            "price": 15267
          },
          {
            "thicknessInches": 6,
            "price": 16964
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 14800
          },
          {
            "thicknessInches": 5,
            "price": 17031
          },
          {
            "thicknessInches": 6,
            "price": 18502
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 16657
          },
          {
            "thicknessInches": 5,
            "price": 18502
          },
          {
            "thicknessInches": 6,
            "price": 20935
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 19010
          },
          {
            "thicknessInches": 5,
            "price": 21804
          },
          {
            "thicknessInches": 6,
            "price": 24839
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 17325
          },
          {
            "thicknessInches": 5,
            "price": 19251
          },
          {
            "thicknessInches": 6,
            "price": 21550
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 20361
          },
          {
            "thicknessInches": 5,
            "price": 22486
          },
          {
            "thicknessInches": 6,
            "price": 25615
          }
        ]
      }
    ]
  },
  {
    "id": "supersleep-double-joy",
    "name": "NIM SU.SL D/JOY",
      "category": "",
    "sourcePriceList": "SUPER SLEEP",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 12604
          },
          {
            "thicknessInches": 5,
            "price": 13427
          },
          {
            "thicknessInches": 6,
            "price": 15043
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 15043
          },
          {
            "thicknessInches": 5,
            "price": 18304
          },
          {
            "thicknessInches": 6,
            "price": 19524
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 17570
          },
          {
            "thicknessInches": 5,
            "price": 19524
          },
          {
            "thicknessInches": 6,
            "price": 21859
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 13427
          },
          {
            "thicknessInches": 5,
            "price": 14235
          },
          {
            "thicknessInches": 6,
            "price": 16263
          }
        ]
      },
      {
        "sizeId": "6.25X3.67",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 14911
          },
          {
            "thicknessInches": 5,
            "price": 16776
          },
          {
            "thicknessInches": 6,
            "price": 18642
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 16263
          },
          {
            "thicknessInches": 5,
            "price": 18716
          },
          {
            "thicknessInches": 6,
            "price": 20331
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 18304
          },
          {
            "thicknessInches": 5,
            "price": 20331
          },
          {
            "thicknessInches": 6,
            "price": 23005
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 20890
          },
          {
            "thicknessInches": 5,
            "price": 23961
          },
          {
            "thicknessInches": 6,
            "price": 27296
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 19040
          },
          {
            "thicknessInches": 5,
            "price": 21155
          },
          {
            "thicknessInches": 6,
            "price": 23682
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 22372
          },
          {
            "thicknessInches": 5,
            "price": 24710
          },
          {
            "thicknessInches": 6,
            "price": 28148
          }
        ]
      }
    ]
  },
  {
    "id": "supersleep-single-anbu",
    "name": "NIM SU.SL S/ANBU",
      "category": "",
    "sourcePriceList": "SUPER SLEEP",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 12257
          },
          {
            "thicknessInches": 5,
            "price": 13308
          },
          {
            "thicknessInches": 6,
            "price": 14357
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 15054
          },
          {
            "thicknessInches": 5,
            "price": 17508
          },
          {
            "thicknessInches": 6,
            "price": 18911
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 17482
          },
          {
            "thicknessInches": 5,
            "price": 18077
          },
          {
            "thicknessInches": 6,
            "price": 21517
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 12954
          },
          {
            "thicknessInches": 5,
            "price": 14003
          },
          {
            "thicknessInches": 6,
            "price": 15762
          }
        ]
      },
      {
        "sizeId": "6.25X3.67",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 14762
          },
          {
            "thicknessInches": 5,
            "price": 16369
          },
          {
            "thicknessInches": 6,
            "price": 17997
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 16103
          },
          {
            "thicknessInches": 5,
            "price": 17862
          },
          {
            "thicknessInches": 6,
            "price": 19608
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 18216
          },
          {
            "thicknessInches": 5,
            "price": 20657
          },
          {
            "thicknessInches": 6,
            "price": 22416
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 21011
          },
          {
            "thicknessInches": 5,
            "price": 24516
          },
          {
            "thicknessInches": 6,
            "price": 26970
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 18937
          },
          {
            "thicknessInches": 5,
            "price": 21492
          },
          {
            "thicknessInches": 6,
            "price": 23314
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 22416
          },
          {
            "thicknessInches": 5,
            "price": 26262
          },
          {
            "thicknessInches": 6,
            "price": 28362
          }
        ]
      }
    ]
  },
  {
    "id": "supersleep-double-anbu",
    "name": "NIM SU.SL D/ANBU",
      "category": "",
    "sourcePriceList": "SUPER SLEEP",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 13180
          },
          {
            "thicknessInches": 5,
            "price": 14309
          },
          {
            "thicknessInches": 6,
            "price": 15438
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 16187
          },
          {
            "thicknessInches": 5,
            "price": 18825
          },
          {
            "thicknessInches": 6,
            "price": 20335
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 18797
          },
          {
            "thicknessInches": 5,
            "price": 19438
          },
          {
            "thicknessInches": 6,
            "price": 23137
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 13929
          },
          {
            "thicknessInches": 5,
            "price": 15057
          },
          {
            "thicknessInches": 6,
            "price": 16948
          }
        ]
      },
      {
        "sizeId": "6.25X3.67",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 15873
          },
          {
            "thicknessInches": 5,
            "price": 17601
          },
          {
            "thicknessInches": 6,
            "price": 19351
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 17315
          },
          {
            "thicknessInches": 5,
            "price": 19207
          },
          {
            "thicknessInches": 6,
            "price": 21084
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 19587
          },
          {
            "thicknessInches": 5,
            "price": 22212
          },
          {
            "thicknessInches": 6,
            "price": 24103
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 22592
          },
          {
            "thicknessInches": 5,
            "price": 26362
          },
          {
            "thicknessInches": 6,
            "price": 29000
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 20363
          },
          {
            "thicknessInches": 5,
            "price": 23110
          },
          {
            "thicknessInches": 6,
            "price": 25069
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 4,
            "price": 24103
          },
          {
            "thicknessInches": 5,
            "price": 28238
          },
          {
            "thicknessInches": 6,
            "price": 30497
          }
        ]
      }
    ]
  },
  {
    "id": "amaithi-full-latex",
    "name": "NIM AMAITHI FULL LATEX",
    "category": "",
    "sourcePriceList": "NIM AMAITHI FULL LATEX",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 49626
          },
          {
            "thicknessInches": 8,
            "price": 66150
          }
        ]
      },
      {
        "sizeId": "6X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 57897
          },
          {
            "thicknessInches": 8,
            "price": 77175
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 66168
          },
          {
            "thicknessInches": 8,
            "price": 88200
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 82710
          },
          {
            "thicknessInches": 8,
            "price": 110250
          }
        ]
      },
      {
        "sizeId": "6X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 99252
          },
          {
            "thicknessInches": 8,
            "price": 132300
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 51694
          },
          {
            "thicknessInches": 8,
            "price": 68906
          }
        ]
      },
      {
        "sizeId": "6.25X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 60323
          },
          {
            "thicknessInches": 8,
            "price": 80390
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 68925
          },
          {
            "thicknessInches": 8,
            "price": 91875
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 86156
          },
          {
            "thicknessInches": 8,
            "price": 114843
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 103388
          },
          {
            "thicknessInches": 8,
            "price": 137812
          }
        ]
      },
      {
        "sizeId": "6.5X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 53762
          },
          {
            "thicknessInches": 8,
            "price": 71663
          }
        ]
      },
      {
        "sizeId": "6.5X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 62722
          },
          {
            "thicknessInches": 8,
            "price": 83606
          }
        ]
      },
      {
        "sizeId": "6.5X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 71682
          },
          {
            "thicknessInches": 8,
            "price": 95550
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 89603
          },
          {
            "thicknessInches": 8,
            "price": 119437
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 107523
          },
          {
            "thicknessInches": 8,
            "price": 143325
          }
        ]
      },
      {
        "sizeId": "7X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 96495
          },
          {
            "thicknessInches": 8,
            "price": 128625
          }
        ]
      },
      {
        "sizeId": "7X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 115794
          },
          {
            "thicknessInches": 8,
            "price": 154350
          }
        ]
      }
    ]
  },
  {
    "id": "amaithi-hs-latex",
    "name": "NIM AMAITHI H&S LATEX",
    "category": "",
    "sourcePriceList": "NIM AMAITHI H&S LATEX",
    "sizes": [
      {
        "sizeId": "6X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 39168
          },
          {
            "thicknessInches": 8,
            "price": 52224
          }
        ]
      },
      {
        "sizeId": "6X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 45696
          },
          {
            "thicknessInches": 8,
            "price": 60928
          }
        ]
      },
      {
        "sizeId": "6X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 52224
          },
          {
            "thicknessInches": 8,
            "price": 69632
          }
        ]
      },
      {
        "sizeId": "6X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 65280
          },
          {
            "thicknessInches": 8,
            "price": 87040
          }
        ]
      },
      {
        "sizeId": "6X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 78336
          },
          {
            "thicknessInches": 8,
            "price": 104448
          }
        ]
      },
      {
        "sizeId": "6.25X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 40800
          },
          {
            "thicknessInches": 8,
            "price": 54400
          }
        ]
      },
      {
        "sizeId": "6.25X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 47611
          },
          {
            "thicknessInches": 8,
            "price": 63481
          }
        ]
      },
      {
        "sizeId": "6.25X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 54400
          },
          {
            "thicknessInches": 8,
            "price": 72533
          }
        ]
      },
      {
        "sizeId": "6.25X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 68000
          },
          {
            "thicknessInches": 8,
            "price": 90666
          }
        ]
      },
      {
        "sizeId": "6.25X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 81600
          },
          {
            "thicknessInches": 8,
            "price": 108800
          }
        ]
      },
      {
        "sizeId": "6.5X3",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 42432
          },
          {
            "thicknessInches": 8,
            "price": 56576
          }
        ]
      },
      {
        "sizeId": "6.5X3.5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 49504
          },
          {
            "thicknessInches": 8,
            "price": 66005
          }
        ]
      },
      {
        "sizeId": "6.5X4",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 56576
          },
          {
            "thicknessInches": 8,
            "price": 75434
          }
        ]
      },
      {
        "sizeId": "6.5X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 70720
          },
          {
            "thicknessInches": 8,
            "price": 94293
          }
        ]
      },
      {
        "sizeId": "6.5X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 84864
          },
          {
            "thicknessInches": 8,
            "price": 113152
          }
        ]
      },
      {
        "sizeId": "7X5",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 76160
          },
          {
            "thicknessInches": 8,
            "price": 101547
          }
        ]
      },
      {
        "sizeId": "7X6",
        "thicknessPrices": [
          {
            "thicknessInches": 6,
            "price": 91392
          },
          {
            "thicknessInches": 8,
            "price": 121856
          }
        ]
      }
    ]
  }
];
