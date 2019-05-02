for ( let counter = 1; counter < 10; counter++) {
  console.log( counter );
} 
// logs 1, 2, 3, 4, 5, 6, 7, 8, 9

const fruits = ['apple', 'pear', 'cherry'];

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
// logs apple, pear, cherry

var counter = 1;
while (counter < 10 ) {
  console.log( counter );
  counter = counter + 1;
}

var counter = 1;
do {
  counter = counter + 1;
  console.log( counter );
} while (counter < 10);

const fruits = ['apple', 'pear', 'cherry'];

const capitalizedFruits = fruits.map( fruit => fruit.toUpperCase() );
console.log(capitalizedFruits) // [ 'APPLE', 'PEAR', 'CHERRY' ]