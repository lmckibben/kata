const camelCase = function(input) {
  let finalString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      outputString += string[i];
    } else {
      let upperCase = string[i + 1].toUpperCase();
      i++;
      outputString += upperCase;
    }
  }
  return finalString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));