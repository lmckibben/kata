const multiplicationTable = function(maxValue) {
  let outputTable = "";
  let x = maxValue;
  let y = maxValue;

  for (let i = 1; i < x + 1; i++) {
    for (let j = 1; j < y + 1; j++) {
      sum = i * j;
      outputTable += sum + " ";
    }
    outputTable += "\n";
  }
  return outputTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));