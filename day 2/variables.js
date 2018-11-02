// Variables

// Create a Variable: var
var myName = 'Arya';
console.log(myName);
// Output: Arya

// Create a Variable: let: la keyword 'let' señala que este tipo de variables
// se les puede re-asignar un valor diferente
// pueden NO tener ningún valor inicial asignado
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350


// Create a Variable: const
// NO se les puede re-asignar un valor diferente
// las variables 'const' DEBEN tener un valor asignado
const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

// Mathematical Assignment Operators
let w = 4;
w = w + 1;
console.log(w); // Output: 5

let w = 4;
w += 1;
console.log(w); // Output: 5

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

// The Increment and Decrement Operator
let a = 10;
a++;
console.log(a); // Output: 11
let b = 20;
b--;
console.log(b); // Output: 19

// String Concatenation with Variables
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.');
// Output: 'I own a pet armadillo.'

// String Interpolation
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.

// typeof operator
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true;
console.log(typeof unknown3); // Output: boolean

// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
