// Modules in JavaScript

// Module exports II

// airplane.js -EXPORT-
let Airplane = {};
module.exports = {
  myAirplane: "CloudJet", 
  displayAirplane: function() {
    return this.myAirplane;
  }
};

// missionControl.jsB -IMPORT-
const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());