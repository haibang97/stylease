Clothes/getAll -> Get all clothes but won't have duplicates if have same ClassID

Clothes/getSpecificClothes/{ClassID} -> Get all clothes with the same ClassID

Clothes/getClothesByGender/{Gender} -> Get all clothes based on Gender but won't have duplicates if have same ClassID

Clothes/getClothesByMood/{Mood} -> Get all clothes based on Mood but won't have duplicates if have same ClassID


SELECT A.clothesid, A.classid, A.status, A.size, B.gender, B.type, B.function, B.image_link, B.mood, B.description FROM clothes A, clothesclass B WHERE A.classid = B.classid