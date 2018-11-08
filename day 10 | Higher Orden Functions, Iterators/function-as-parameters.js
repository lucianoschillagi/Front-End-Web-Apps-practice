
// Function as parameters

// define la función ´checkThatTwoPlusTwoEqualsFourAMillionTimes´
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// define una función que toma un número como parámetro y en el cuerpo le suma 2
const addTwo = num => num + 2;

// define una función de orden superior (porque toma como argumento otra función)
// task: registrar un momento, ejecutar una función, registrar otro tiempo y devolver la diferencia entre ambos
// (es decir, registra el tiempo que tardó la función ´intermedia´ en ejecutarse)
const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// guarda en la variable 'time2p2' el resultado de la invocación.a la función ´timeFuncRuntime()´ 👈
let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

// define una función de orden superior que toma una función y un valor como parámetros
const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry;
    } else {
        return 'This function returned inconsistent results';
    }
};

// invoca la función ´checkConsistentOutput´ pasándole los argumentos (una función y un valor)
checkConsistentOutput(addTwo, 5);