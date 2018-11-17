// Objects in JavaScript

// The this keyword

// the object
const robot = {
  // its properties
  model: '1E78V2',
  energyLevel: 100,
  // its method
  provideInfo() {
    return (`I am ${this.model} and my current energy level is ${this.energyLevel}.`);
  }
};

console.log(robot.provideInfo());

// mE
const celular = {
	marca: 'iPhone',
	proveerInfo() {
		return (`Mi celular es de marca ${this.marca}.`)
	};
};