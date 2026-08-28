import json
import sys

# We append to models from part 1, so let's import it
import gen_data_1
get_size_id = gen_data_1.get_size_id
add_model = gen_data_1.add_model

# PDF 7 (INIMAI)
pdf7_raw = [
    ("1829X915", "72X36", 18964, 24091, 29911, 21591, 27248, 34962, 28788, 36330, 46616, "6X3"),
    ("1829X1067", "72X42", 22234, 28105, 34899, 25189, 31793, 40782, 33585, 42391, 54376, "6X3.5"),
    ("1829X1219", "72X48", 25504, 32121, 39886, 28787, 36325, 46615, 38384, 48434, 62154, "6X4"),
    ("1829X1524", "72X60", 32071, 40151, 49861, 35984, 45416, 58269, 47979, 60556, 77694, "6X5"),
    ("1829X1829", "72X72", 38599, 48182, 59823, 43182, 54494, 69924, 57576, 72659, 93233, "6X6"),
    ("1905X915", "75X36", 19785, 25100, 31161, 22488, 28383, 36414, 29984, 37845, 48553, "6.25X3"),
    ("1905X1067", "75X42", 23194, 29280, 36363, 26238, 33119, 42500, 34984, 44159, 56667, "6.25X3.5"),
    ("1905X1219", "75X48", 26603, 33460, 41543, 29987, 37841, 48560, 39984, 50455, 64747, "6.25X4"),
    ("1905X1524", "75X60", 33421, 41831, 51932, 37474, 47311, 60694, 49966, 63082, 80926, "6.25X5"),
    ("1905X1829", "75X72", 40240, 50188, 62322, 44974, 56766, 72827, 59966, 75689, 97104, "6.25X6"),
    ("1981X915", "78X36", 20593, 26099, 32411, 23383, 29520, 37877, 31178, 39360, 50504, "6.5X3"),
    ("1981X1067", "78X42", 24141, 30454, 37802, 27285, 34431, 44178, 36381, 45908, 58905, "6.5X3.5"),
    ("1981X1219", "78X48", 27689, 34797, 43184, 31186, 39355, 50492, 41582, 52474, 67323, "6.5X4"),
    ("1981X1524", "78X60", 34785, 43497, 54015, 38976, 49192, 63118, 51969, 65590, 84159, "6.5X5"),
    ("1981X1829", "78X72", 41868, 52196, 64810, 46780, 59039, 75744, 62373, 78720, 100993, "6.5X6"),
    ("2134X1524", "84X60", 39835, 49658, 61654, 44494, 56161, 72057, 59326, 74882, 96077, "7X5"),
    ("2134X1829", "84X72", 47802, 59583, 73988, 53396, 67386, 86464, 71196, 89849, 115286, "7X6")
]
sizes_pdf7_std = []
sizes_pdf7_mem = []
sizes_pdf7_lat = []
for m, i, s6, s8, s10, m6, m8, m10, l6, l8, l10, f in pdf7_raw:
    sid = get_size_id(f, m, i)
    sizes_pdf7_std.append({"sizeId": sid, "thicknessPrices": [{"thicknessInches": 6, "price": s6}, {"thicknessInches": 8, "price": s8}, {"thicknessInches": 10, "price": s10}]})
    sizes_pdf7_mem.append({"sizeId": sid, "thicknessPrices": [{"thicknessInches": 6, "price": m6}, {"thicknessInches": 8, "price": m8}, {"thicknessInches": 10, "price": m10}]})
    sizes_pdf7_lat.append({"sizeId": sid, "thicknessPrices": [{"thicknessInches": 6, "price": l6}, {"thicknessInches": 8, "price": l8}, {"thicknessInches": 10, "price": l10}]})
add_model("inimai-std", "INIMAI POCKETED", "INIMAI POCKETED STANDARD", "INIMAI POCKETED", sizes_pdf7_std)
add_model("inimai-mem", "INIMAI POCKETED", "INIMAI POCKETED MEMORY FOAM EURO TOP", "INIMAI POCKETED", sizes_pdf7_mem)
add_model("inimai-lat", "INIMAI POCKETED", "INIMAI POCKETED LATEX FOAM EURO TOP", "INIMAI POCKETED", sizes_pdf7_lat)

# PDF 8 (Anandham Memory)
pdf8_raw = [
    ("6X3", "1829X915", "72X36", 21605, 28598),
    ("6X4", "1829X1219", "72X48", 29262, 36577),
    ("6X5", "1829X1524", "72X60", 34426, 43037),
    ("6.25X3", "1905X915", "75X36", 23831, 29791),
    ("6.25X3.67", "1905X1118", "75X44", 27940, 34926),
    ("6.25X4", "1905X1219", "75X48", 30480, 38100),
    ("6.25X5", "1905X1524", "75X60", 35864, 44831),
    ("6.25X6", "1905X1549", "75X72", 41032, 51290),
    ("6.5X5", "1981X1524", "78X60", 37297, 46623),
    ("6.5X6", "1981X1829", "78X72", 42493, 53119),
]
sizes_pdf8 = []
for f, m, i, p6, p8 in pdf8_raw:
    sid = get_size_id(f, m, i)
    sizes_pdf8.append({"sizeId": sid, "thicknessPrices": [{"thicknessInches": 6, "price": p6}, {"thicknessInches": 8, "price": p8}]})
add_model("anandham-memory", "Anandham Memory Foam (OR) COIR", "", "ANANDHAM MEMORY FOAM", sizes_pdf8)

# PDF 9 (Anandham Latex)
pdf9_raw = [
    ("6X3", "1829X915", "72X36", 27878, 34852),
    ("6X4", "1829X1219", "72X48", 35660, 44575),
    ("6X5", "1829X1524", "72X60", 41954, 52447),
    ("6.25X3", "1905X915", "75X36", 29042, 36305),
    ("6.25X3.67", "1905X1118", "75X44", 34050, 42562),
    ("6.25X4", "1905X1219", "75X48", 37145, 46432),
    ("6.25X5", "1905X1524", "75X60", 43704, 54633),
    ("6.25X6", "1905X1549", "75X72", 50005, 62506),
    ("6.5X5", "1981X1524", "78X60", 45453, 56818),
    ("6.5X6", "1981X1829", "78X72", 51785, 64734),
]
sizes_pdf9 = []
for f, m, i, p6, p8 in pdf9_raw:
    sid = get_size_id(f, m, i)
    sizes_pdf9.append({"sizeId": sid, "thicknessPrices": [{"thicknessInches": 6, "price": p6}, {"thicknessInches": 8, "price": p8}]})
add_model("anandham-latex", "Anandham LATEX Foam (OR) COIR", "", "ANANDHAM LATEX FOAM", sizes_pdf9)
