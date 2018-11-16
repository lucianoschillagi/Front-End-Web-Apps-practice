// Objects in JavaScript

// Privacy

const robot = {
	// una convención común es colocar un guión bajo _ antes del nombre de una propiedad para indicar que la propiedad no debe modificarse.
  _energyLevel: 100, 
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
