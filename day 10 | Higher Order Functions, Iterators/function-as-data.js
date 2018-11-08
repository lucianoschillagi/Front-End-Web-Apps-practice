// Higher Order Functions

// Function as Data

for (let i = 1; i<=3; i++) {
  console.log(i)
}

// Function as Data
const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// reasignando la función ´checkThatTwoPlusTwoEqualsFourAMillionTimes´ a una nueva variable 
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
// invoca la variable que contiene la función
is2p2();
// si queremos recordar el nombre original de la función podemos usar la propiedad ´name´
console.log(is2p2.name);


timeFuncRuntime(() => {
  for (let i = 10; i>0; i--){
    console.log(i);
  }
});