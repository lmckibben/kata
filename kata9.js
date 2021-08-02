const camelCase = function(input) {
  let finalString = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      let upperCase = input[i + 1].toUpperCase();
      finalString += upperCase
      i++
    }else {
      finalString += input[i];
    };
  };
  return finalString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));