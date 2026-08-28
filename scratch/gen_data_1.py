import json
import os

sizes_dict = {}

def get_size_id(feet, mm, inches):
    # Normalize feet
    feet = feet.upper().replace(' ', '')
    inches = inches.upper().replace(' ', '')
    mm = mm.upper().replace(' ', '')
    
    if feet not in sizes_dict:
        sizes_dict[feet] = {
            "id": feet,
            "feetDisplay": feet,
            "inchesDisplay": inches,
            "metricDisplay": mm
        }
    return feet

models = []

def add_model(id_str, name, category, source, sizes_list):
    models.append({
        "id": id_str,
        "name": name,
        "category": category,
        "sourcePriceList": source,
        "sizes": sizes_list
    })

# PDF 1
pdf1_raw = [
    ("6X2.5", "1829X762", "72X30", 8753, 9004),
    ("6X3", "1829X915", "72X36", 9576, 9940),
    ("6X4", "1829X1219", "72X48", 11396, 11627),
    ("6.25X2.5", "1905X762", "75X30", 9259, 9741),
    ("6.25X3", "1905X915", "75X36", 9780, 10315),
    ("6.25X4", "1905X1219", "75X48", 11896, 12566),
    ("6.25X5", "1905X1524", "75X60", 13704, 15196),
    ("6.25X6", "1905X1829", "75X72", 16954, 18235),
    ("6.5X6", "1905X1829", "78X72", 17632, 18963),
]
sizes_pdf1 = []
for f, m, i, p4, p5 in pdf1_raw:
    sid = get_size_id(f, m, i)
    sizes_pdf1.append({
        "sizeId": sid,
        "thicknessPrices": [
            {"thicknessInches": 4, "price": p4},
            {"thicknessInches": 5, "price": p5}
        ]
    })
add_model("100s-coir-foam", "100'S COIR (OR) 100'S FOAM QUILT MODEL", "", "100'S COIR / FOAM", sizes_pdf1)

# PDF 2
pdf2_raw = [
    ("6x2.5", "1829x762", "72x30", 10058, 12573, 11070, 13837),
    ("6x3", "1829x915", "72x36", 11047, 12958, 12237, 14355),
    ("6x3.5", "1829x1067", "72x42", 12510, 14675, 14375, 16862),
    ("6x4", "1829x1219", "72x48", 13587, 15937, 14963, 17552),
    ("6.25x2.5", "1905x762", "75x30", 10706, 12418, 11657, 13304),
    ("6.25x3", "1905x915", "75x36", 11290, 13243, 12582, 14758),
    ("6.25x3.5", "1905x1067", "75x42", 12883, 15112, 14835, 17402),
    ("6.25x4", "1905x1219", "75x48", 13960, 16375, 15423, 18091),
    ("6.25x5", "1905x1524", "75x60", 16298, 19118, 18249, 21406),
    ("6.25x6", "1905x1829", "75x72", 19999, 23459, 23056, 27045),
    ("6.5x3", "1981x915", "78x36", 12367, 14507, 13772, 16156),
    ("6.5x4", "1981x1219", "78x48", 14949, 17536, 16886, 19809),
    ("6.5x5", "1981x1524", "78x60", 17331, 20330, 19985, 23443),
    ("6.5x6", "1981x1829", "78x72", 21950, 25747, 25307, 29686),
]
sizes_pdf2_single = []
sizes_pdf2_double = []
for f, m, i, s4, d4, s5, d5 in pdf2_raw:
    sid = get_size_id(f, m, i)
    sizes_pdf2_single.append({
        "sizeId": sid,
        "thicknessPrices": [{"thicknessInches": 4, "price": s4}, {"thicknessInches": 5, "price": s5}]
    })
    sizes_pdf2_double.append({
        "sizeId": sid,
        "thicknessPrices": [{"thicknessInches": 4, "price": d4}, {"thicknessInches": 5, "price": d5}]
    })
add_model("smart-joy-single", "SMART JOY", "SINGLE QUILT", "SMART-COIR-ECONOMY", sizes_pdf2_single)
add_model("smart-joy-double", "SMART JOY", "DOUBLE QUILT", "SMART-COIR-ECONOMY", sizes_pdf2_double)

# PDF 3
pdf3_raw = [
    ("6X2.5", "1829X762", "72X30", 14287, 15377),
    ("6X3", "1829X915", "72X36", 16287, 17496),
    ("6X3.5", "1829X1067", "72X42", 18274, 19617),
    ("6X3.67", "1829X1118", "72X44", 19777, 20562),
    ("6X4", "1829X1219", "72X48", 21097, 22273),
    ("6X5", "1829X1524", "72X60", 26038, 27126),
    ("6X6", "1829X1829", "72X72", 30025, 31366),
    ("6.25X2.5", "1905X762", "75X30", 14536, 15657),
    ("6.25X3", "1905X915", "75X36", 16588, 17841),
    ("6.25X3.5", "1905X1067", "75X42", 18627, 20012),
    ("6.25X3.67", "1905X1118", "75X44", 20143, 20970),
    ("6.25X4", "1905X1219", "75X48", 21503, 22413),
    ("6.25X5", "1905X1524", "75X60", 26536, 27688),
    ("6.25X6", "1905X1829", "75X72", 30626, 32043),
    ("6.5X2.5", "1981X762", "78X30", 14954, 16092),
    ("6.5X3", "1981X915", "78X36", 17071, 18352),
    ("6.5X3.5", "1981X1067", "78X42", 19202, 20625),
    ("6.5X3.67", "1981X1118", "78X44", 20744, 21609),
    ("6.5X4", "1981X1219", "78X48", 22156, 23116),
    ("6.5X5", "1981X1524", "78X60", 27359, 28556),
    ("6.5X6", "1981X1829", "78X72", 31607, 33077),
]
sizes_pdf3 = []
for f, m, i, p5, p6 in pdf3_raw:
    sid = get_size_id(f, m, i)
    sizes_pdf3.append({
        "sizeId": sid,
        "thicknessPrices": [{"thicknessInches": 5, "price": p5}, {"thicknessInches": 6, "price": p6}]
    })
add_model("100d-anbu-double", "100D HIGH END MATTRESSES", "ANBU DOUBLE SIDE QUILT", "100D HIGH END", sizes_pdf3)

# PDF 4
pdf4_raw = [
    ("6X3", "1829X915", "72X36", 10815),
    ("6X3.5", "1829X1067", "72X42", 12619),
    ("6X4", "1829X1219", "72X48", 14421),
    ("6X5", "1829X1524", "72X60", 18026),
    ("6X6", "1829X1829", "72X72", 21632),
    ("6.25X3", "1905X915", "75X36", 11267),
    ("6.25X3.5", "1905X1067", "75X42", 13148),
    ("6.25X4", "1905X1219", "75X48", 15022),
    ("6.25X5", "1905X1524", "75X60", 18778),
    ("6.25X6", "1905X1829", "75X72", 22533),
    ("6.5X3", "1981X915", "78X36", 11718),
    ("6.5X3.5", "1981X1067", "78X42", 13670),
    ("6.5X4", "1981X1219", "78X48", 15623),
    ("6.5X5", "1981X1524", "78X60", 19529),
    ("6.5X6", "1981X1829", "78X72", 23434),
    ("7X5", "2134X1524", "84X60", 21031),
    ("7X6", "2134X1829", "84X72", 25238),
]
sizes_pdf4 = []
for f, m, i, p6 in pdf4_raw:
    sid = get_size_id(f, m, i)
    sizes_pdf4.append({
        "sizeId": sid,
        "thicknessPrices": [{"thicknessInches": 6, "price": p6}]
    })
add_model("prakasam-bonnell", "PRAKASAM SPRING BONNELL", "", "PRAKASAM BONNELL", sizes_pdf4)

# PDF 5
pdf5_raw = [
    ("6X3", "1829X915", "72X36", 14400),
    ("6X3.5", "1829X1067", "72X42", 16800),
    ("6X4", "1829X1219", "72X48", 19200),
    ("6X5", "1829X1524", "72X60", 24000),
    ("6X6", "1829X1829", "72X72", 28800),
    ("6.25X3", "1905X915", "75X36", 15000),
    ("6.25X3.5", "1905X1067", "75X42", 17504),
    ("6.25X4", "1905X1219", "75X48", 20000),
    ("6.25X5", "1905X1524", "75X60", 25000),
    ("6.25X6", "1905X1829", "75X72", 30000),
    ("6.5X3", "1981X915", "78X36", 15600),
    ("6.5X3.5", "1981X1067", "78X42", 18200),
    ("6.5X4", "1981X1219", "78X48", 20800),
    ("6.5X5", "1981X1524", "78X60", 26000),
    ("6.5X6", "1981X1829", "78X72", 31200),
    ("7X5", "2134X1524", "84X60", 28000),
    ("7X6", "2134X1829", "84X72", 33600),
]
sizes_pdf5 = []
for f, m, i, p6 in pdf5_raw:
    sid = get_size_id(f, m, i)
    sizes_pdf5.append({
        "sizeId": sid,
        "thicknessPrices": [{"thicknessInches": 6, "price": p6}]
    })
add_model("prakasam-pocket", "PRAKASAM SPRING POCKET", "", "PRAKASAM POCKET", sizes_pdf5)

# PDF 6
pdf6_raw = [
    ("6X3", "72X36", "1829X915", 16144, 21529, 26914, 19393, 25859, 32322, 19993, 26659, 33322),
    ("6X3.5", "72X42", "1829X1067", 17608, 23478, 29346, 21338, 28446, 35567, 21998, 29326, 36666),
    ("6X4", "72X48", "1829X1219", 19032, 25372, 31725, 22980, 30631, 38295, 23691, 31577, 39480),
    ("6X5", "72X60", "1829X1524", 21124, 28170, 35202, 27335, 36452, 45567, 28181, 37580, 46976),
    ("6X6", "72X72", "1829X1829", 25346, 33803, 42247, 32803, 43737, 54684, 33817, 45090, 56375),
    ("6.25X3", "75X36", "1905X915", 16575, 22104, 27633, 19899, 26528, 33155, 20514, 27348, 34181),
    ("6.25X3.5", "75X42", "1905X1067", 18614, 24823, 31032, 22639, 30189, 37740, 23339, 31122, 38906),
    ("6.25X4", "75X48", "1905X1219", 19478, 25973, 32457, 23560, 31414, 39267, 24289, 32385, 40482),
    ("6.25X5", "75X60", "1905X1524", 22000, 29346, 36680, 28472, 37966, 47462, 29352, 39141, 48930),
    ("6.25X6", "75X72", "1905X1829", 26405, 35202, 44013, 34166, 45567, 56956, 35223, 46976, 58717),
    ("6.5X3", "78X36", "1981X915", 16954, 22601, 28247, 20366, 27159, 33952, 20996, 27999, 35002),
    ("6.5X3.5", "78X42", "1981X1067", 18353, 24470, 30601, 22474, 29974, 37462, 23169, 30901, 38621),
    ("6.5X4", "78X48", "1981X1219", 19855, 26470, 33084, 24115, 32146, 40188, 24861, 33141, 41432),
    ("6.5X5", "78X60", "1981X1524", 22889, 30510, 38143, 29621, 39494, 49355, 30536, 40715, 50882),
    ("6.5X6", "78X72", "1981X1829", 27464, 36614, 45777, 35543, 47386, 59229, 36642, 48852, 61062),
    ("7X5", "84X60", "2134X1524", 26131, 34836, 43542, 33813, 45075, 56351, 34859, 46470, 58093),
    ("7X6", "84X72", "2134X1829", 31346, 41803, 52247, 40567, 54091, 67613, 41822, 55764, 69704),
]
sizes_pdf6_std = []
sizes_pdf6_pillow = []
sizes_pdf6_euro = []
for f, i, m, s6, s8, s10, p6, p8, p10, e6, e8, e10 in pdf6_raw:
    sid = get_size_id(f, m, i)
    sizes_pdf6_std.append({"sizeId": sid, "thicknessPrices": [{"thicknessInches": 6, "price": s6}, {"thicknessInches": 8, "price": s8}, {"thicknessInches": 10, "price": s10}]})
    sizes_pdf6_pillow.append({"sizeId": sid, "thicknessPrices": [{"thicknessInches": 6, "price": p6}, {"thicknessInches": 8, "price": p8}, {"thicknessInches": 10, "price": p10}]})
    sizes_pdf6_euro.append({"sizeId": sid, "thicknessPrices": [{"thicknessInches": 6, "price": e6}, {"thicknessInches": 8, "price": e8}, {"thicknessInches": 10, "price": e10}]})
add_model("magizhchi-std", "MAGIZHCHI BONNELL", "STANDARD", "MAGIZHCHI BONNELL", sizes_pdf6_std)
add_model("magizhchi-pillow", "MAGIZHCHI BONNELL", "PILLOW TOP DOUBLE SIDE", "MAGIZHCHI BONNELL", sizes_pdf6_pillow)
add_model("magizhchi-euro", "MAGIZHCHI BONNELL", "EURO SUPER SOFT FOAM WITH TOP", "MAGIZHCHI BONNELL", sizes_pdf6_euro)
