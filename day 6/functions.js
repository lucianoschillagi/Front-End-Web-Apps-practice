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
function makeShoppingList(item1 = "milk", item2="bread", item3="eggs"){
  
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList();


// Return 
function monitorCount(rows, columns){
  return rows * columns;
};

const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);

// Helper Functions
function monitorCount(rows, columns){
  return rows * columns;
};

const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);


// Function Expressions
const plantNeedsWater = function(day){ // function with no name -> anonymous function
  if (day === 'Wednesday') {
    return true
  } else {
    return false
  }
}
console.log(plantNeedsWater('Tuesday'))

// Arrow Funcitions
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}
console.log(plantNeedsWater('Tuesday'));

const saludo = (nombre) => {
  console.log("Hola " + nombre);
}
saludo("Luciano");
console.log(saludo);

// Concise Body Functions
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};





































