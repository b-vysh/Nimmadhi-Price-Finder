import json
import sys

# We append to models from part 2, so let's import it
import gen_data_2
get_size_id = gen_data_2.get_size_id
add_model = gen_data_2.add_model

# PDF 10 (Super Sleep)
# Fix OCR glitch 6.25x3.671905x1118 -> 6.25x3.67, 1905x1118
pdf10_raw = [
    ("6x3", "1829x915", "72x36", 11470, 12604, 12257, 13180, 12219, 13427, 13308, 14309, 13689, 15043, 14357, 15438),
    ("6x4", "1829x1219", "72x48", 13689, 15043, 15054, 16187, 16657, 18304, 17508, 18825, 17767, 19524, 18911, 20335),
    ("6x5", "1829x1524", "72x60", 15989, 17570, 17482, 18797, 17767, 19524, 18077, 19438, 19892, 21859, 21517, 23137),
    ("6.25x3", "1905x915", "75x36", 12219, 13427, 12954, 13929, 12954, 14235, 14003, 15057, 14800, 16263, 15762, 16948),
    ("6.25x3.67", "1905x1118", "75x44", 13569, 14911, 14762, 15873, 15267, 16776, 16369, 17601, 16964, 18642, 17997, 19351),
    ("6.25x4", "1905x1219", "75x48", 14800, 16263, 16103, 17315, 17031, 18716, 17862, 19207, 18502, 20331, 19608, 21084),
    ("6.25x5", "1905x1524", "75x60", 16657, 18304, 18216, 19587, 18502, 20331, 20657, 22212, 20935, 23005, 22416, 24103),
    ("6.25x6", "1905x1549", "75x72", 19010, 20890, 21011, 22592, 21804, 23961, 24516, 26362, 24839, 27296, 26970, 29000),
    ("6.5x5", "1981x1524", "78x60", 17325, 19040, 18937, 20363, 19251, 21155, 21492, 23110, 21550, 23682, 23314, 25069),
    ("6.5x6", "1981x1829", "78x72", 20361, 22372, 22416, 24103, 22486, 24710, 26262, 28238, 25615, 28148, 28362, 30497),
]
sizes_sj = []
sizes_dj = []
sizes_sa = []
sizes_da = []
for f, m, i, sj4, dj4, sa4, da4, sj5, dj5, sa5, da5, sj6, dj6, sa6, da6 in pdf10_raw:
    sid = get_size_id(f, m, i)
    sizes_sj.append({"sizeId": sid, "thicknessPrices": [{"thicknessInches": 4, "price": sj4}, {"thicknessInches": 5, "price": sj5}, {"thicknessInches": 6, "price": sj6}]})
    sizes_dj.append({"sizeId": sid, "thicknessPrices": [{"thicknessInches": 4, "price": dj4}, {"thicknessInches": 5, "price": dj5}, {"thicknessInches": 6, "price": dj6}]})
    sizes_sa.append({"sizeId": sid, "thicknessPrices": [{"thicknessInches": 4, "price": sa4}, {"thicknessInches": 5, "price": sa5}, {"thicknessInches": 6, "price": sa6}]})
    sizes_da.append({"sizeId": sid, "thicknessPrices": [{"thicknessInches": 4, "price": da4}, {"thicknessInches": 5, "price": da5}, {"thicknessInches": 6, "price": da6}]})
add_model("supersleep-single-joy", "SUPER SLEEP", "SINGLE JOY", "SUPER SLEEP", sizes_sj)
add_model("supersleep-double-joy", "SUPER SLEEP", "DOUBLE JOY", "SUPER SLEEP", sizes_dj)
add_model("supersleep-single-anbu", "SUPER SLEEP", "SINGLE ANBU", "SUPER SLEEP", sizes_sa)
add_model("supersleep-double-anbu", "SUPER SLEEP", "DOUBLE ANBU", "SUPER SLEEP", sizes_da)

# PDF 11 (AMAITHI FULL LATEX)
pdf11_raw = [
    ("6X3", "1829X915", "72X36", 49626, 66150),
    ("6X3.5", "1829X1067", "72X42", 57897, 77175),
    ("6X4", "1829X1219", "72X48", 66168, 88200),
    ("6X5", "1829X1524", "72X60", 82710, 110250),
    ("6X6", "1829X1829", "72X72", 99252, 132300),
    ("6.25X3", "1905X915", "75X36", 51694, 68906),
    ("6.25X3.5", "1905X1067", "75X42", 60323, 80390),
    ("6.25X4", "1905X1219", "75X48", 68925, 91875),
    ("6.25X5", "1905X1524", "75X60", 86156, 114843),
    ("6.25X6", "1905X1829", "75X72", 103388, 137812),
    ("6.5X3", "1981X915", "78X36", 53762, 71663),
    ("6.5X3.5", "1981X1067", "78X42", 62722, 83606),
    ("6.5X4", "1981X1219", "78X48", 71682, 95550),
    ("6.5X5", "1981X1524", "78X60", 89603, 119437),
    ("6.5X6", "1981X1829", "78X72", 107523, 143325),
    ("7X5", "2134X1524", "84X60", 96495, 128625),
    ("7X6", "2134X1829", "84X72", 115794, 154350),
]
sizes_pdf11 = []
for f, m, i, p6, p8 in pdf11_raw:
    sid = get_size_id(f, m, i)
    sizes_pdf11.append({"sizeId": sid, "thicknessPrices": [{"thicknessInches": 6, "price": p6}, {"thicknessInches": 8, "price": p8}]})
add_model("amaithi-full-latex", "AMAITHI FULL LATEX", "", "AMAITHI FULL LATEX", sizes_pdf11)

# PDF 12 (AMAITHI H&S LATEX)
pdf12_raw = [
    ("6X3", "1829X915", "72X36", 39168, 52224),
    ("6X3.5", "1829X1067", "72X42", 45696, 60928),
    ("6X4", "1829X1219", "72X48", 52224, 69632),
    ("6X5", "1829X1524", "72X60", 65280, 87040),
    ("6X6", "1829X1829", "72X72", 78336, 104448),
    ("6.25X3", "1905X915", "75X36", 40800, 54400),
    ("6.25X3.5", "1905X1067", "75X42", 47611, 63481),
    ("6.25X4", "1905X1219", "75X48", 54400, 72533),
    ("6.25X5", "1905X1524", "75X60", 68000, 90666),
    ("6.25X6", "1905X1829", "75X72", 81600, 108800),
    ("6.5X3", "1981X915", "78X36", 42432, 56576),
    ("6.5X3.5", "1981X1067", "78X42", 49504, 66005),
    ("6.5X4", "1981X1219", "78X48", 56576, 75434),
    ("6.5X5", "1981X1524", "78X60", 70720, 94293),
    ("6.5X6", "1981X1829", "78X72", 84864, 113152),
    ("7X5", "2134X1524", "84X60", 76160, 101547),
    ("7X6", "2134X1829", "84X72", 91392, 121856),
]
sizes_pdf12 = []
for f, m, i, p6, p8 in pdf12_raw:
    sid = get_size_id(f, m, i)
    sizes_pdf12.append({"sizeId": sid, "thicknessPrices": [{"thicknessInches": 6, "price": p6}, {"thicknessInches": 8, "price": p8}]})
add_model("amaithi-hs-latex", "AMAITHI H&S LATEX", "", "AMAITHI H&S LATEX", sizes_pdf12)
