Specs

Describe: robogerArray()
Test: "It should return an array with a 0 if the number 0 is inputted"
Expect(robogerArray(0).toEqual([0]);

Test: "It should return an array with 0 and "Beep!" if 1 is inputted"
Expect(robogerArray(1).toEqual([0, "Beep!"])

Test: "It should return an array with 0 and "Beep!" and "Boop!" if 2 is inputted"
Expect(robogerArray(2).toEqual([0, "Beep!", "Boop!"])

Test: "It should return an array with 0 and "Beep!" and "Boop!" and "Won't you be my neighbor?" if 3 is inputted"
Expect(robogerArray(3).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?"])

Test: "It should return an array with 0 and "Beep!" and "Boop!" and "Won't you be my neighbor?" and 4, 5 if 5 is inputted"
Expect(robogerArray(5).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5])

Test: "It should return an array with 0 and "Beep!" and "Boop!" and "Won't you be my neighbor?" and 4, 5...."Beep!" if 10 is inputted"
Expect(robogerArray(10).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"])

Test: "It should return "Beep!", "Boop!" or "Won't you be my neighbor?" if a 1, 2 or 3 is in part or is the number.
Expect(robogerArray(3).toEqual(["Won't you be my neighbor?"])