// Objects in JavaScript

// Destructured Assignment
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania'

// destructured assignment
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'