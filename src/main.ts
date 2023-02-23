let myArray: (number | string | boolean)[] = [100, "Adam", true];
let otherArray = [...myArray, 200, "Bob", false];
let sum: number = otherArray
  .filter(val => typeof(val) == "number")
  .reduce((accumulator: number, currentValue) => accumulator+(currentValue as number)**2, 0)
console.log(`Sum: ${sum}`);
