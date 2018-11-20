// Modules in JavaScript

// require()

// importa el módulo definido en el archivo ´1-airplane.js´
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
};

displayAirplane();