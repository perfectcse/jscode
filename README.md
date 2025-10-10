# 🟢 JavaScript Interview Practice — Set 1 (Q1–Q6)

This repository contains **5 JavaScript practice questions** commonly asked in interviews.  
Each question includes **code, explanation, and notes** for quick revision.

---

## 1️⃣ Reverse a String

### ✅ Code
```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("vishal")); // Output: "lahsiv"

🧠 Concept

String manipulation using split, reverse, and join

Array and loop usage

💬 Interview Tip

“I used split('') to convert the string to an array, reversed it with reverse(), and joined it back. This shows knowledge of JS built-in methods.”

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

🧠 Concept

Palindrome check by reversing and comparing

String equality

💬 Interview Tip

“I reversed the string and compared it with the original. If they are equal, it is a palindrome.”

function findLargest(arr) {
  return Math.max(...arr);
}

console.log(findLargest([10, 25, 8, 99, 45])); // 99

🧠 Concept

Array handling

Spread operator and Math.max()

💬 Interview Tip

“I used the spread operator to pass array elements to Math.max(), which efficiently returns the largest number.”

4️⃣ Remove the First Element from an Array
let numbers = [10, 20, 30, 40];
numbers.shift();

console.log(numbers); // [20, 30, 40]

🧠 Concept

Array mutation using shift() method

💬 Interview Tip

“shift() removes the first element of the array and updates the original array.”

5️⃣ Use a Callback Function

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Vishal", sayBye);

🧠 Concept

Functions passed as arguments

Controlled execution with callbacks

💬 Interview Tip

“I passed sayBye as a callback to greet, demonstrating how JavaScript executes functions in order using callbacks.”

6️⃣ Create an Arrow Function

const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

const greet = (name) => {
  const message = `Hello, ${name}! Welcome!`;
  return message;
};
console.log(greet("Vishal")); // Hello, Vishal! Welcome!

🧠 Concept

Arrow functions provide concise syntax

Do not have their own this

Ideal for callbacks and functional programming

💬 Interview Tip

“Arrow functions are a modern syntax for defining functions. They are short, especially for single expressions, and very common in ES6+ JavaScript coding.”


📘 Summary Table

| No | Question             | Concept                 | Level        | Key Method                       |
| -- | -------------------- | ----------------------- | ------------ | -------------------------------- |
| 1  | Reverse a String     | String, Array methods   | Easy         | `split()`, `reverse()`, `join()` |
| 2  | Palindrome Check     | String Comparison       | Easy         | `reverse()`, `===`               |
| 3  | Largest in Array     | Array & Math            | Easy         | `Math.max()`                     |
| 4  | Remove First Element | Array Mutation          | Very Easy    | `shift()`                        |
| 5  | Callback Function    | Functions, Asynchronous | Intermediate | Function as Argument             |
| 6  | Arrow Function       | ES6 Functions           | Easy         | `()=>{}`                         |
