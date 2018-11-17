// Classes in JavaScript

// Instances

// An instance is an object that contains the property names and methods of a class, but with unique property values. Let's look at our Dog class example.
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}

const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'


class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

// instanciate 1
const surgeonCurry = new Surgeon('Curry','Cardiovascular');
// instanciate 2
const surgeonDurant = new Surgeon('Durant','Orthopedics');
