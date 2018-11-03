// Day 6

// Functions in JavaScript

const width = 10;
const height = 6;
const area =  width * height;
console.log(area); // Output: 60

// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;

// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;


// function declarations //
function greetWorld() {
  console.log('Hello, World!');
}
console.log(greetWorld()); // Output: Hello, World!

function getReminder() {
  console.log('Water the plants.');
};

getReminder();

function greetInSpanish() {
  console.log('Buenas Tardes.');
};

greetInSpanish();

// mE
function restar() {
   return 10 - 9;
};
console.log(restar());

// Calling a Function //
function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
};

sayThanks();
sayThanks();
sayThanks();

// Parameters and Arguments
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
};

sayThanks("Cole")

// mE
function todayIs(day) {
  console.log('Today is ' + day);
};
todayIs('Saturday');

// Default Parameters
