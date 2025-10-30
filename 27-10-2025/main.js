// Introduction to JavaScript
// 1. Open any website → right-click → Inspect → Console → type: document.title
// 2. Try: alert(“Hello from Sheryians!”)
// 3. Write one line in your own words: “If HTML is skeleton, CSS is clothes — what
// is JS?”
// 4. Write one example of where you’ve seen JS being used (like popup,
// animation, etc.)


// Answers
// 1. It will print the website title
// 2. it show the alert of saying hello from sheriyans when you first open the website
// 3. JavaScript is like the brain or we can say the nervous system
// 4. 2d and 3d animation and clicking button functionality

// -> defer attribute use for to load html first and then javascript


// Running JS in Browser Console
console.log(2+2); //4

let city = "Bhopal";
console.log(city); // "Bhopal"

// Variables and Keywords (var, let, const)

// 1. Declare your name using all three: var a = “Harsh”; let b = “Sheryians”; const c
// = “School”
// 2. Try reassigning them: a = “Updated”; b = “Updated”; c = “Updated”
// 3. Create a variable inside curly braces using let and log it outside.
// 4. Predict output before running.
// 5. Write 3 examples where const is useful (like PI, baseURL, etc.)


// Answers

var a = "Nikhil";
let b = "Sheryians";
const c = "School";

a = "Updated";
b = "Updated";
c = "Updated"; // It will show error because we cant reassign const variable beacuse it is constant


{
    let a = 10;
}

console.log(a); // it will show error because let variable is blocked scoped


// Logging and Interaction (console, alert, prompt)

// 1. Log name, age, and city using console.log, console.info, console.warn.
// 2. Use prompt to take user’s name → alert a welcome message.
// 3. Log typeof of user’s input.
// 4. Try: let age = prompt(“Enter age:”); console.log(age + 5); observe what
// happens.

//Answer

console.log("Console.log"); // Will print a normal message
console.error("Console.error"); // Will print an error message in red
console.info("Console.info"); // Same as log but shows an info icon (blue)
console.warn("Console.warn"); // Will print a warning message in yellow

// 3. String
// 4. ex if user enter age is 5 output will be 55


// Working with Strings

// 1. let msg = “I love Sheryians”;
// 2. Try msg.slice(2, 6) and predict the result.
// 3. Try msg.split(” “) and count words.
// 4. Try msg.replace(“love”, “study at”).
// 5. Template string example: let name = “Harsh”; console.log(Hey ${name},
// welcome to JS!)
// 6. Check if msg.includes(“love”)

// Answer
// 2. love
// 3. it will break the string in array where the space
// 4. It will replace the love with study at
// 5. In this we are using the letral string. so we can us variable inside it using ${}
// 6. it will return true or false after checking the string is in or not


// Statements and Semicolons

// 1. Remove semicolon and check if code still runs.
// 2. Combine two statements in one line and see if it breaks.
// 3. Write 3 console.log statements without semicolons and predict output.


// Answer

// 1. Yes code will still run
// 2. No
// 3. Yes it will print







