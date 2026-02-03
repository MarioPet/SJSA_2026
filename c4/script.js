// Loops
// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for(let i = 1; i <= 3; i++) {
//     console.log("Hello");
// }

// let animals = ["cat", "dog", "bird", "shark", "monkey", "other animal", "yet another animal"];
// console.log(animals);

// for(let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// EXERCISE 1: Log every element from the array of colors.

// let colors = ["red", "green", "blue"];

// for(let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// EXERCISE 2: Log only the numbers greaten than 10 from the array

// let numbers = [4, 12, 7, 25, 9];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 10) {
//         console.log(numbers[i]);
//     }
// }

// Nested loops

// for (let i = 1; i <= 3; i++) {
//     for(let j = 1; j <= 3; j++){
//         console.log(i, j);
//     }
// }

// for(let row = 1; row <= 3; row++) {
//     for(let col = 1; col <= 4; col++) {
//         console.log("Row: ", row, "Column: ", col);
//     }
// }

// let groups = [
//     ["Alice", "Bob"],
//     ["Charlie", "Dana"],
//     ["Eve", "Frank"]
// ];

// console.log(groups);

// for(let i = 0; i < groups.length; i++) {
//     // console.log(groups[i]); ---> changes with the outer loops
//     for(let j = 0; j < groups[i].length; j++) {
//         // console.log(groups[i][j]); ---> accesses individual names (Alice, Bob...)
//         console.log(groups[i][j]);
//     }
// }

// let numbers = [1, 2, 3];

// for(let i = 0; i < numbers.length; i++) {
//     for(let j = 0; j < numbers.length; j++) {
//         console.log(numbers[i], numbers[j]);
//     }
// }

// While loop

// let count = 1;

// while(count <= 5) {
//     console.log(count);
//     count++;
// }

// EXERCISE 1: Start with a fuel at 10; While fuel is greater than 0, log the fuel and decrease by 3;
// let fuel = 10;

// while(fuel > 0) {
//     console.log("Fuel: ", fuel);
//     fuel -= 3;
// }

// do... while

// let attempts = 0;

// do {
//     console.log("Attempt:", attempts);
//     attempts++
// } while (attempts < 5);

// EXERCISE 1: Count from 3 down to 1

// let number = 3;

// do {
//     console.log(number);
//     number--;
// } while (number > 0);

// Switch

// let day = "Tuesday";

// switch(day) {
//     case "Monday" :
//         console.log("Today is Monday");
//     break;
//     case "Tuesday" :
//         console.log("Today is Tuesday");
//     break;
//     case "Wednesday" :
//         console.log("Today is Wednesday");
//     break;
//     case "Thursday" :
//         console.log("Today is Thursday");
//     break;
//     case "Friday" :
//         console.log("Today is Friday");
//     break;
//     case "Saturday" :
//         console.log("Today is Saturday");
//     break;
//     case "Sunday" :
//         console.log("Today is Sunday");
//     break;
//     default:
//         console.log("Unknown day");
// }

// let fruits = ["apple", "bannana", "orange"];

// fruits.forEach(fruit => console.log(fruit));

// let words = ["sun", "movie", "clouds", "mountains"];

// words.forEach(word => {
//     if(word.length > 4) {
//         console.log(word);
//     }
// });

// EXERCISE 1: Count the number of "B" in the string

// let string = "KJASHDIUWQHRBHDSHJFBDSUFHEWIVBFDSKJABFSDHJFBASDBHAJSBDFQWB";
// let count = 0;

// for(let i = 0; i < string.length; i++) {
//     if(string[i] == "B") {
//         count++;
//     }
// }

// console.log(count);

// EXERCISE 2: Create a chessboard from "#" and empty spaces " " using nested for loops and if... else statements

// let size = 8;
// let board = "";

// for(let i = 0; i < size; i++) {
//     for(j = 0; j < size; j++) {
//         if((j + i) % 2 == 0) {
//             board += "#";
//         } else {
//             board += " ";
//         }
//     }
//     board += "\n";
// }

// console.log(board);

// let month = 4;
// let hemisphere = "southern";
// let season = "";

// // new way of writing a condition

// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         season = (hemisphere == "northern") ? "Winter" : "Summer";
//         break;
//     case 3:
//     case 4:
//     case 5:
//         season = (hemisphere == "northern") ? "Spring" : "Autumn";
//         break;
//     default:
//         season = "Unknown data";
// }

// console.log(season);

// if(season == "norther") {
//     console.log("Spring");
// } else {
//     console.log("Autumn");
// }