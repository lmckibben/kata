const makeCase = function (input, cases) {
  //output string
  let finalString = "";

  //set cases to an array
  let caseTypes = [];
  if (typeof cases === "string") {
    caseTypes.push(cases);
  } else if (Array.isArray(cases) === true) {
    for (let a = 0; a < cases.length; a++) {
      caseTypes.push(cases[a]);
    }
  }
  //console.log(caseTypes);

  //set vowel consonant to end of array
  for (v of caseTypes) {
    if (v === "vowel" || v === "consonant") {
      caseTypes.push(v);
      caseTypes.splice(caseTypes.indexOf(v), 1);
    }
  }

  //set lower and upper to end of array
  for (l of caseTypes) {
    if (l === "lower" || l === "upper") {
      caseTypes.push(l);
      caseTypes.splice(caseTypes.indexOf(l), 1);
    }
  }
  //console.log(caseTypes);

  //set up each case as a function
  //camelCase
  const camelCase = function (string) {
    let outputString = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== " ") {
        outputString += string[i];
      } else {
        let upperCase = string[i + 1].toUpperCase();
        i++;
        outputString += upperCase;
      }
    }

    return outputString;
  };
  //console.log(camelCase());

  //pascalCase
  const pascalCase = function (string) {
    let outputString = "";
    for (let i = 0; i < string.length; i++) {
      if (i === 0) {
        outputString += string[i].toUpperCase();
      } else if (string[i] !== " ") {
        outputString += string[i];
      } else {
        let upperCase = string[i + 1].toUpperCase();
        i++;
        outputString += upperCase;
      }
    }

    return outputString;
  };
  //console.log(pascalCase());

  //snakeCase
  const snakeCase = function (string) {
    let outputString = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        outputString += "_";
      } else {
        outputString += string[i];
      }
    }

    return outputString;
  };
  //console.log(snakeCase());

  //kebabCase
  const kebabCase = function (string) {
    let outputString = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        outputString += "-";
      } else {
        outputString += string[i];
      }
    }

    return outputString;
  };
  //console.log(kebabCase());

  //titleCase
  const titleCase = function (string) {
    let outputString = "";
    for (let i = 0; i < string.length; i++) {
      if (i === 0) {
        outputString += string[i].toUpperCase();
      } else if (string[i] !== " ") {
        outputString += string[i];
      } else {
        let upperCase = string[i + 1].toUpperCase();
        i++;
        outputString += " " + upperCase;
      }
    }

    return outputString;
  };
  //console.log(titleCase());

  //vowelCase
  const vowelCase = function (string) {
    let outputString = "";
    for (let i = 0; i < string.length; i++) {
      if (
        string[i] === "a" ||
        string[i] === "e" ||
        string[i] === "i" ||
        string[i] === "u"
      ) {
        outputString += string[i].toUpperCase();
      } else {
        outputString += string[i];
      }
    }

    return outputString;
  };
  //console.log(vowelCase());

  //consonantCase
  const consonantCase = function (string) {
    let outputString = "";
    for (let i = 0; i < string.length; i++) {
      if (
        string[i] !== "a" &&
        string[i] !== "e" &&
        string[i] !== "i" &&
        string[i] !== "u"
      ) {
        outputString += string[i].toUpperCase();
      } else {
        outputString += string[i];
      }
    }

    return outputString;
  };
  //console.log(consonantCase());

  //UpperCase
  const upperCase = function (string) {
    let outputString = "";
    for (let i = 0; i < string.length; i++) {
      outputString += string[i].toUpperCase();
    }

    return outputString;
  };
  //console.log(upperCase());

  //lowerCase
  const lowerCase = function (string) {
    let outputString = "";
    for (let i = 0; i < string.length; i++) {
      outputString += string[i].toLowerCase();
    }

    return outputString;
  };
  //console.log(lowerCase());

  //set up priority
  //priority 1
  for (let i = 0; i < caseTypes.length; i++) {
    switch (caseTypes[i]) {
      case "camel":
        finalString = camelCase(input);
        break;
      case "pascal":
        finalString = pascalCase(input);
        break;
      case "snake":
        finalString = snakeCase(input);
        break;
      case "kebab":
        finalString = kebabCase(input);
        break;
      case "title":
        finalString = titleCase(input);
        break;
    }
  }

  //priority 2
  for (let j = 0; j < caseTypes.length; j++) {
    if (finalString.length === 0) {
      finalString = input;
    }
    switch (caseTypes[j]) {
      case "vowel":
        finalString = vowelCase(finalString);
        break;
      case "consonant":
        finalString = consonantCase(finalString);
        break;
    }
  }

  //priority 3
  for (let k = 0; k < caseTypes.length; k++) {
    switch (caseTypes[k]) {
      case "upper":
        finalString = upperCase(finalString);
        break;
      case "lower":
        finalString = lowerCase(finalString);
        break;
    }
  }

  return finalString;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
