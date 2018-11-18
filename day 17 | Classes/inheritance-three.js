// Classes in JavaScript

// Inheritance III

// Clase Padre (super-clase)
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

// Clase Hija (sub-clase)
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

// Instanciación
const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce

// Sample 1
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  
  // un método exclusivo de la clase ´Nurse´
  addCertification() {
    
  }
}
//const bryceCat = new Cat('Bryce', false); 
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);