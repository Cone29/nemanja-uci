let firstName = "Ana"; // string
let score = 100; // number
let isOnline = true; // boolean
let x = null; // null
let y; // undefined
//////////////////////////
let a = 5;
let b = 2;
console.log(a + b); // 7
console.log(a * b); // 10
//////////////////////////
console.log("Hello " + "World");
let age = 17;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("Too young");
}
/////////////////////////////
const arr = [7, 8, 9, 6, 3, 2, 1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log("Count:", arr[i]);
}
/////////////////////////////
let counter = 0;

const incButton = document.querySelector(".inc");
const decButton = document.querySelector(".dec");
const resetButton = document.querySelector(".reset");
const displayCount = document.querySelector(".counter");

function updateDisplay() {
  displayCount.innerHTML = counter;
}

function increment() {
  if (counter < 5) {
    console.log("if");
  } else {
    console.log("else");
  }
  counter++;
  updateDisplay();
}

function decrement() {
  counter--;
  updateDisplay();
}

function resetCount() {
  counter = 0;
  updateDisplay();
}
updateDisplay();

incButton.addEventListener("click", increment);
decButton.addEventListener("click", decrement);
resetButton.addEventListener("click", resetCount);
// comm
