// Array in JavaScript

/*
New Year's Resolutions:
1. Keep a journal
2. Take a falconry class
3. Learn to juggle
*/

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

let concepts = ['creating arrays', 'array structures', 'array manipulation']

// Create an array
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

// Accesing elements
const hello = 'Hello World';
console.log(hello[6]); // Output: W

// Update elements
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons);  //Output: ['Winter', 'Spring', 'Summer', 'Autumn']

// Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils)

// The .length property
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

console.log(newYearsResolutions.length); // Output: 2

// The .push() Method
const itemTracker = ['item 0', 'item 1', 'item 2'];

itemTracker.push('item 3', 'item 4');

console.log(itemTracker);
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

// The .pop() Method
const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

// More Array Methods
onst groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);

// Arrays and Functions
const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

// Nested Arrays
var numberClusters = [[1,2], [3,4,], [5,6]]
const target = numberClusters[2][1]
console.log(target)
