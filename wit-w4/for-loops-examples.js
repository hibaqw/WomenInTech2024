/** for loop
 * used for a known number of iterations
 */

for ( var i = 0; i < 10; i++ ){
  console.log(`iteration #${i}`);
}

// for in loop is perfect to iterate objects
var obj = {firstName: "Hibaq", lastName: 'Warsame', age: 27, faveColor: "red"};

for (const property in obj){
  console.log(`${property}: ${obj[property]}`);
}

const array = [0, 1, 2, 3, 4, 5];

for (const element of array){
  console.log(`printing array[${element}]: ${array[element]}`);

}