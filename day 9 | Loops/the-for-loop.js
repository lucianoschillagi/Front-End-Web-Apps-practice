// the for loop

// un for loops contiene usualmente 3 expresiones
// 1- la inicialización de la variable de interación
// 2- la condición de parada
// 3- la instrucción de interación (como se modifica el valor de iteración en cada nuevo bucle)

// en este ejemplo la variable de iteración empieza con un valor de 5
// la condición para que el bucle se detenga es que ese valor sea menor que 11
// y a cada bucle el valor de counter se incrementará en 1

for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
};

// Output: 5, 6, 7, 8, 9, 10


// Looping in reverse
for (let counter = 3; counter >=0 ; counter--){
  console.log(counter)
};

// Output: 3, 2, 1, 0