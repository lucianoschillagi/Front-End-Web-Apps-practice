// Modules in JavaScript

// Export Default

// default export
let Menu = {}; // un objeto vacío llamado ´Menu´
// When using ES6 syntax, we use 'export default' in place of module.exports.
export default Menu; // exportando el objeto 'Menu'


// sample 
let Airplane = {};
export default Airplane;
// crea una propiedad en el objeto 'Airplane'
// en este caso un array que contiene dos objetos
Airplane.availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500
 }
];