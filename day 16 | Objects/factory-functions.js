// Objects in JavaScript

// Factory Functions

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};


const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
    console.log('Beep Boop');
 	 }
  }
}

// crea una INSTANCIA del objeto definido en la función
const tinCan = robotFactory('P-500', true);
console.log(tinCan.beep());
console.log(tinCan.model);
console.log(tinCan.mobile);

// crea otra instancia del mismo objeto
const otherRobot = robotFactory('B2', false);
console.log(otherRobot.model);