// Objects in JavaScript

// Setters
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};

// Setter Method Example

// crea el objeto 'robot'
const robot = {
	// propiedades
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  // getter method
  get numOfSensors(){
  	// comprueba si el valor de '_numOfSensors' es un número
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  // setter method
  set numOfSensors(num) {
  	// comprueba si el valor de '_numOfSensors' es un número y es mayor o igual a 0
    if (typeof num === 'number' && num >= 0){
      // reasigna el valor de '_numOfSensors'
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }   
  } 
};

robot.numOfSensors = 18;
console.log(robot.numOfSensors);