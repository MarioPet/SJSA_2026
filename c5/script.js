// Functions

// function sayHello() {
//     console.log("Hello");
// }

// sayHello();

// Functions with parameters

// function sayGoodbye(name) {
//     console.log("Goodbye " + name);
// }

// sayGoodbye("Mario");
// sayGoodbye("Ana");
// sayGoodbye("Mark");

// function introduce(firstName, age) {
//     console.log("My name is " + firstName);
//     console.log("I'm " + age + " years old");
// }

// introduce("Mario", 32);
// introduce("Ana", 44);

// Returning values

// function add(a, b) {
//     return a + b;
//     console.log("I will not be executed");
// }

// let result = add(5, 3);
// console.log(result);

// EXERCISE 1: Write a function called multiply that takes two numbers and multiplies them and returns the result

// function multiply(a, b) {
//     return a * b;
// }

// let result = multiply(10, 5);
// console.log(result);

// EXERCISE 2: Write a function called fullName that takes firstName and lastName as parameters and returns them in a single string

// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }

// let fullString = fullName("Mario", "Petkovski");
// console.log(fullString);

// Function expressions

// const sayHi = function() {
//     console.log("Hi");
// }

// sayHi();

// Arrow functions

// const add = (a, b) => {
//     return a * b;
// }

// const multiply = (a, b) => a * b;

// Callback functions

// function runCallback(callback) {
//     console.log("Before callback");
//     callback();
//     console.log("After callback");
// }

// runCallback(function () {
//     console.log("CALLBACK EXECUTED");
// });

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//     console.log(number);
// });

// Callback with timers

// setTimeout(function() {
//     console.log("I will appear in the console in five seconds");
// }, 5000);

// setInterval(function() {
//     console.log("I will run every second");
// }, 1000);

// Nested Callbacks

// function firstTask(callback) {
//     console.log("First task is done");
//     callback();
// }

// function secondTask() {
//     console.log("Second task is done");
// }

// firstTask(secondTask);

// EXERCISE 1: Write a function called repeatAction that takes a number n and a callback and calls the callback an 'n' number of times.

// const repeatAction = (n, callback) => {
//     for(let i = 0; i < n; i++) {
//         callback();
//     }
// }

// repeatAction(5, () => {
//     console.log("Hello World");
// });

// const numbers = [1, 2, 3, 4, 5];
// const numbers_multiplied = numbers.map((num) => {
//     return num * num;
// });

// console.log(numbers_multiplied);

// Functions as values

// function getGreeting() {
//     return function(name) {
//         console.log("Hello " + name);
//     }
// }

// const greeting = getGreeting();
// greeting("Sara");
// greeting("Pero");
// greeting("Mario");

// EXERCISE 1: Write a function called checkEvenOdd that takes a number and checks wether it's even or odd.

// const checkEvenOdd = (num) => {
//     if(num % 2 === 0) {
//         console.log(num + " is an even number");
//     } else {
//         console.log(num + " is an odd number");
//     }
// }

// checkEvenOdd(5);
// checkEvenOdd(10);
// checkEvenOdd(11);

// EXERCISE 2: Write a function called canEnter that takes two parameters: age, isVip. If the person is at least 21 or it they are VIP they can enter the club.

// console.log() --> 1: "Welcome to the club";
// console.log() --> 2: "Stay out!";

// const canEnter = (age, isVip) => {
//     if(age >= 21 || isVip) {
//         return "Welcome to the club!";
//     } else {
//         return "Stay ouy!";
//     }
// }

// console.log(canEnter(14, false));
// console.log(canEnter(27, false));
// console.log(canEnter(19, true));

// EXERCISE 2: Write a function called checkSecurity that takes a string as a parameter and checks wheter that string is longer than 8 characters. If it does, it logs "Password Strong", if not, it logs "Password weak";

// const checkSecurity = (password) => {
//     if(password.length > 8 && password.includes("!")) {
//         return "Password strong!";
//     } else {
//         return "Password weak!";
//     }
// }

// console.log(checkSecurity("mypassword1234!"));

// Scope and values

// Global scope
// let courseName = "Javascript"; // Global scope

// function showName() {
//     console.log(courseName);
// }

// showName();

// Function scope
// function ScopeTest() {
//     let secret = "I'm hidden";
//     console.log(secret);
// }

// console.log(secret);

// ScopeTest();

// Block scope

// if(true) {
//     let x = 10;
// }

// console.log(x);

// if(true) {
//     var x = 10;
// }

// console.log(x);

// const

// const pi = 3.14;
// // pi = 4; --> error

// const user = {
//     name: "Ana"
// }

// user.name = "Maria";

// for(let i = 0; i < 3; i++) {
//     console.log(i);
// }

// console.log(i);

// for(var i = 0; i < 3; i++) {
//     // console.log(i);
// }

// console.log(i);


// let value = 10;

// if(true) {
//     let value = 20;
//     console.log(value);
// }

// console.log(value);

// let total = 100;

// function calculate() {
//     let total = 50;
//     console.log(total);
// }

// calculate();

// console.log(total);

// EXERCISE 1: Write a function called counteDuplicates, which takes two parameters. The first one is an array of numbers. The second one is a random number. The function checks how many times that number appears in the list.

// const counteDuplicates = (numbers, number) => {
//     let count = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === number) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(counteDuplicates([1, 2, 4, 5, 2, 2, 4, 213, 123, 12, 312], 2));

const checkPulse = (pulses) => {
    let pulseReport = [];
    for (let i = 0; i < pulses.length; i++) {
        if (pulses[i] < 50 || pulses[i] > 80) {
            pulseReport.push("Pulse at " + pulses[i] + " is NOT GOOD!");
        } else {
            pulseReport.push("Pulse at " + pulses[i] + " is GOOD!");
        }
    }
    return pulseReport;
}

let patientData = [62, 90, 45, 68, 76, 120, 57, 43, 66];
let healthStatus = checkPulse(patientData);

console.log(healthStatus);