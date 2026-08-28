import json
import sys

import gen_data_1
import gen_data_2
import gen_data_3

sizes_dict = gen_data_1.sizes_dict
models = gen_data_1.models

# Export to TS
ts_template = """export interface SizeFeet {
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

export const STANDARD_SIZES: Record<string, MattressSize> = """ + json.dumps(sizes_dict, indent=2) + """;

export const MATTRESS_DATA: MattressModel[] = """ + json.dumps(models, indent=2) + """;
"""

with open('../src/data/mattresses.ts', 'w') as f:
    f.write(ts_template)

print("SUCCESS")
