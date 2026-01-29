// Objects

// let user = {
//     name: "Mario",
//     age: 32,
//     isMember: true
// }

// Dot notation
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.isMember);

// Bracket notation
// console.log(user["name"]);

// Changing objects
// user.age = 33;
// user.isMember = false;
// console.log(user);

// Adding new properties
// user.email = "mario5etkovski@gmail.com";
// console.log(user);

// EXERCISE 1: Create an object called movie with: title, year, rating (1-10) --> Log each value separately.
// EXERCISE 2: Create an object called product with: name, price, inStock. Then, 1: Change the price. Change the inStock to false. Log the final object.

// let movie = {
//     title: "One Battle After Another",
//     year: 2025,
//     rating: 8.5
// }

// console.log(movie.title);
// console.log(movie.year);
// console.log(movie.rating);

// let product = {
//     name: "Headphones",
//     price: 3.500,
//     inStock: true
// };

// product.price = 3.700;
// product.inStock = false;

// console.log(product);

// Nested Objects
// let student = {
//     name: "Mark",
//     grades: {
//         math: 90,
//         physics: 85
//     }
// }

// console.log(student);
// console.log(student.grades.math);

// EXERCISE 1: Create an object called car with a nested object called engine that has: type, horsePower. Log the horsePower.
// EXERCISE 2: Change the engine horsePower and log the updated object

// let car = {
//     brand: "Lancia Delta",
//     engine: {
//         type: "Hybrid",
//         horsePower: 180
//     }
// }

// console.log(car.engine.horsePower);

// car.engine.horsePower = 200;

// console.log(car);

// ============================================================================================================
// ============================================================================================================

// Arrays

// let colors = ["red", "green", "blue", "yellow", "brown", "black", "cyan"];
// console.log(colors);
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[6]);
// colors[1] = "yellow";
// console.log(colors);

// console.log(colors.length);
// console.log(colors[colors.length-1]);

// EXERCISE 1: Create an array called numbers with three numbers. Log the first and the last number
// EXERCISE 2: Change the middle number and log the array

// let numbers = [10, 20, 30];
// console.log(numbers[0]);
// console.log(numbers[numbers.length - 1]);

// numbers[1] = 25;
// console.log(numbers);

// Array Methods

// push: add to the end
// let fruits = ["apple", "banana"];
// fruits.push("orange");

// console.log(fruits);

// pop: remove from the end
// fruits.pop();
// console.log(fruits);

// unshift: add to the beginning
// fruits.unshift("pear");
// console.log(fruits);

// shift: remove from the beginning
// fruits.shift();
// console.log(fruits);

// splice: remove OR insert anywhere
// let animals = ["cat", "dog", "bird"];
// animals.splice(1, 1);
// console.log(animals);
// animals.splice(1, 0, "rabbit");
// console.log(animals);

// slice: copy part of an array
// let animals_copy = animals.slice(0, 2);
// console.log(animals_copy);

// EXERCISE 1: Create an array called tasks that has four tasks. Add one task. Remove one task.
// EXERCISE 2: Remove the second task from the array. Create a copy of the first two.

// let tasks = ["study", "eat", "sleep", "workout"];
// tasks.push("watch movies");
// tasks.shift();
// tasks.splice(1, 1);
// let tasks_copy = tasks.slice(0, 2);
// console.log(tasks_copy);

// Objects and Arrays together

// let playlist = {
//     name: "Favorites",
//     songs: ["Sunshower", "TLC", "Never Enough"]
// };

// console.log(playlist.songs[0]);

// playlist.songs.push("Sole");
// console.log(playlist);

// let movies = [
//     {name: "Pulp Fiction", year: 1994},
//     {name: "Citizen", year: 1940},
// ];

// console.log(movies[0]);

// Sort
// let names = ["Charlie", "Alice", "Bob"];
// names.sort();
// console.log(names);

// numbers.sort((a, b) => a - b);
// let numbers = [10, 2, 5];
// console.log(numbers);

// Filter
// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter(n => n % 2 === 0);
// console.log(evenNumbers);

// let strings = ["apple", "fig", "banana", "pear"];
// let longWords = strings.filter(s => s.length > 4);
// console.log(longWords);

// let people = [
//     {name: "Eva", age: 17},
//     {name: "Mark", age: 22},
//     {name: "Nina", age: 15}
// ];

// let adults = people.filter(person => person.age >= 18);
// console.log(adults);

// Find

// let numbers = [3, 7, 10, 20];
// let result = numbers.find(n => n > 8);
// console.log(result);

// EXERCISE 1: Sort the users by age.
// EXERCISE 2: Find the number greater than 50
// EXERCISE 3: Find the user named "Leo"

// let users = [
//     { name: "Eva", age: 28 },
//     { name: "Mark", age: 21 },
//     { name: "Nina", age: 35 }
// ];

// users.sort((a, b) => a.age - b.age);
// console.log(users);

// let numbers = [10, 20, 55, 80];
// let found = numbers.find(n => n > 50);
// console.log(found);

// let users = [
//     { name: "Ana" },
//     { name: "Leo" },
//     { name: "Mia" }
// ];

// let userFound = users.find(u => u.name === "Leo");
// console.log(userFound);

// Map

// let numbers = [1, 2, 3];
// let doubledNumbers = numbers.map(n => n * 2);

// console.log(doubledNumbers);

// let prices = [10, 20, 30];
// let withTax = prices.map(p => p * 1.2);
// console.log(withTax);

// let users = [
//     {name: "Ana", age: 28},
//     {name: "Leo", age: 21}
// ];

// let names = users.map(user => user.name);
// console.log(names);

// let ages = users.map(a => a.age);
// console.log(ages);