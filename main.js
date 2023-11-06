let userInput = prompt("Enter a list of comma-separated froyo flavors");
//console.log(userInput);
let splitInput = userInput.split(",");
//console.log(splitInput);

const countObject = {};

for (let i = 0; i < splitInput.length; i++) {
  const currentValue = splitInput[i];

  if (countObject[currentValue] === undefined) {
    countObject[currentValue] = 1; // Initialize the count if the value doesn't exist in the object
  } else {
    countObject[currentValue]++; // Increment the count if the value exists in the object
  }
}

console.table(countObject);
