// Objects in JavaScript

// Built-in Object Methods // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);
//console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);
//console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true});
//console.log(newRobot);
const robotKeys2 = Object.keys(newRobot);
console.log(robotKeys2);
