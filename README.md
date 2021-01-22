## James Wyn

# Mr. Roboger's Neighborhood


### Description
This is my third week project for Epicodus.  The objective is to take an input of numbers and return a story based on the inputted numbers.  For any 3, the story will return "Won't you be my neighbor?" any 2 will get "Boop!" and any 1 will get "Beep!".

### Technologies Used
* Bootstrap
* JavaScript
* jQuery
* HTML
* CSS
* MD

## Setup/Installation

* Clone repository to desktop
* launch in terminal and then launch index.html or send to a live server.

## Link where to find my GitHub link

*https://github.com/Thisisjameswyn/RobogersNeighborhood


### Specs

* Describe: numberedArray()
Test: "It should return an array with a 0 if the number 0 is inputted"
Expect(numberedArray(0).toEqual([0]);

* Test: "It should return an array with 0 and "Beep!" if 1 is inputted"
Expect(numberedArray(1).toEqual([0, "Beep!"])

* Test: "It should return an array with 0 and "Beep!" if 1 is inputted"
Expect(numberedArray(1).toEqual([0, "Beep!"])

* Test: "It should return an array with 0 and "Beep!" and "Boop!" if 2 is inputted"
Expect(numberedArray(2).toEqual([0, "Beep!", "Boop!"])

* Test: "It should return an array with 0 and "Beep!" and "Boop!" and "Won't you be my neighbor?" if 3 is inputted"
Expect(numberedArray(3).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?"])

* Test: "It should return an array with 0 and "Beep!" and "Boop!" and "Won't you be my neighbor?" and 4, 5...."Beep!" if 10 is inputted"
Expect(numberedArray(10).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"])

* Test: "It should return "Beep!", "Boop!" or "Won't you be my neighbor?" if a 1, 2 or 3 is in part or is the number.
Expect(numberedArray(32).toEqual([..."Won't you be my neighbor?"])

## License
[MIT License](https://opensource.org/licenses/MIT)
&copy; James Wyn 2021