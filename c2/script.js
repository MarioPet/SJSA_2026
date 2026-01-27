// If statements
// if(true){
//     console.log("This runs");
// }

// let age = 17;

// if(age >= 18) {
//     console.log("Adult");
// }

// EXERCISES:
// A: Write code that checks a variable called temperature. If the temperature is greater than 25, log "It's warm".
// B: Create a variable called speed. If the speed is greater than 120, log "Too fast". After the if statment, log "Drive Safely" no matter what.

// let temperature = 30;

// if(temperature > 25) {
//     console.log("It's warm");
// }

// let speed = 110;

// if(speed > 120) {
//     console.log("Too fast");
// }

// console.log("Drive safely!");

// ============================================================================================================
// ============================================================================================================

// If and else statements

// let isRaining = false;

// if(isRaining) {
//     console.log("Take an umbrella");
// } else {
//     console.log("No umbrella needed");
// }

// EXERCISES:
// A: Create a variable called isLoggedIn. If true, log "Welcome back!". Otherwise, log "Please log in."
// B: Create a variable called balance. If the balance is greater or equal to 0 (zero), log "Account OK!". Otherwise, log "Account empty or withdrawn!"

// let isLoggedIn = true;

// if(isLoggedIn) {
//     console.log("Welcome back!");
// } else {
//     console.log("Please log in");
// }

// let balance = -100;

// if(balance >= 0) {
//     console.log("Account OK!");
// } else {
//     console.log("Account empty or withdrawn");
// }

// ============================================================================================================
// ============================================================================================================

// Else if statments

// let score = 65;

// if(score >= 90) {
//     console.log("Excellent");
// } else if(score >= 70) {
//     console.log("Good");
// } else {
//     console.log("Needs some improvement");
// }

// EXERCISES:
// A: Create a variable called hour. If it is less than 12, log "Good Morning". If it is less than 18, log "Good Afternoon". Otherwise, log "Good Evening".
// B: Create a variable called score. If score is below 50, log "Fail". If it's from 50 to 79, log "Pass". If it's 80 and above, log "Excellent!".

// let hour = 19;

// if(hour < 12) {
//     console.log("Good morning.");
// } else if (hour < 18) {
//     console.log("Good afternoon");
// } else {
//     console.log("Good evening");
// }

// let score = 90;

// if(score < 50) {
//     console.log("Fail");
// } else if(score < 80) {
//     console.log("Pass");
// } else {
//     console.log("Excellent!");
// }

// ============================================================================================================
// ============================================================================================================

// Combining conditions with logical operators

// && ---> BOTH conditions MUST be true
// || ---> at least ONE MUST be true

// let age = 17;
// let hasTicket = true;

// if(age >= 18 && hasTicket) {
//     console.log("You may enter");
// }

// EXERCISES:
// A: Allow access only if both hasUsername AND (&&) hasPassword are true. Log "Access Granted"
// B: Log "No work today" if it is a weekand OR (||) a holiday.

// let hasUsername = true;
// let hasPassword = true;

// if(hasUsername && hasPassword) {
//     console.log("Access Granted!");
// }

// let isWeekend = false;
// let isHolliday = true;

// if(isWeekend || isHolliday) {
//     console.log("No work today!");
// }

// ============================================================================================================
// ============================================================================================================

// Nested decision logic

// let isLoggedIn = true;
// let isAdmin = false;

// if(isLoggedIn) {
//     if(isAdmin) {
//         console.log("Admin Panel");
//     } else {
//         console.log("Regular User Dashboard");
//     }
// }

// EXERCISES:
// A: Check if a user is a member. If yes, check if they have a discount.
// B: Check pricing based on age and student status. If student, log student price, if not, log adult price
// student: 18. above 18: adult.

// let isMember = true;
// let hasDiscount = false;

// if(isMember) {
//     if(hasDiscount) {
//         console.log("Discount applied");
//     } else {
//         console.log("No discount");
//     }
// }

// let age = 40;
// let isStudent = false;

// if(age < 18) {
//     console.log("Child price");
// } else {
//     if(isStudent) {
//         console.log("Student price");
//     } else {
//         console.log("Adult price");
//     }
// }

// ============================================================================================================
// ============================================================================================================

// Truthy and falsy values

// false: 0, "", null, undefined

// let myName = "";

// if(myName) {
//     console.log("Name exists");
// } else {
//     console.log("No name");
// }

// if(0) {
//     console.log("Runs");
// }

// if("hello") {
//     console.log("Runs");
// }

// EXERCISE:
// A: Log "Input received" only if a variable contains some value;

// let input = "Some data";

// if(input) {
//     console.log("Input received");
// }

// ============================================================================================================
// ============================================================================================================

// Building a small decision program

// Example 1:

// let age = 19;
// let hasID = false;
// let isVIP = true;

// if(age >= 18 && hasID) {
//     if(isVIP) {
//         console.log("VIP Access");
//     } else {
//         console.log("Standard Access");
//     }
// } else {
//     console.log("Access Denied!");
// }

// Example 2:

// let age = 22;
// let hasTicket = false;
// let isMember = true;

// if(age >= 18 && hasTicket) {
//     if(isMember) {
//         console.log("Member entry granted");
//     } else {
//         console.log("Regular entry granted");
//     }
// } else if(age < 18 && hasTicket) {
//     console.log("Minor entry granted with supervision");
// } else {
//     console.log("Entry denied");
// }

// Example 2: Grading system with nested Logic.

// If user is student, then log his grade. If not, log "Entry Denied".
// If score is 90 or higher, grade is A, 80-90 grade is B, 80-70 grade is C, 70-30 grade is D, otherwise grade is F.
// If student has a B AND has completed extra credit, log: "Grade B (extra creddit applied)"

// let isStudent = true;
// let score = 58;
// let completedExtraCredit = true;

// if(isStudent) {
//     if(score >= 90) {
//         console.log("Grade: A");
//     } else if(score >= 80) {
//         console.log("Grade: B");
//     } else if(score >= 70) {
//         if(completedExtraCredit) {
//             console.log("Grade: B (extra creddit applied)");
//         } else {
//             console.log("Grade: C");
//         }
//     } else {
//         console.log("Grade: F")
//     }
// } else {
//     console.log("Entry Denied");
// }

// Example 3: Cinema Ticket Bot

// let age = 10;
// let hasCoupon = true;
// let isSunday = false;

// if(age < 12) {
//     console.log("Ticket price: $8");
// } else if(age >= 65) {
//     if(isSunday) {
//         console.log("Ticket price: FREE!");
//     } else {
//         console.log("Ticket price: $10");
//     }
// } else {
//     if(hasCoupon && !isSunday) {
//         console.log("Ticket price: $10");
//     } else {
//         console.log("Ticket price: $15");
//     }
// }

// ============================================================================================================
// ============================================================================================================
// ============================================================================================================
// ============================================================================================================
// ============================================================================================================
// ============================================================================================================

// HOMEWORK

// Easy: Check if a number is positive, negative or 0.
// Medium: Determine access based on age, ticket and VIP status.
// Hard: Build a grading and messaging system using
// -> variables
// -> if, else if, else
// -> logical operators
// -> nested conditions