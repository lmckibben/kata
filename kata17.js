const urlDecode = function(text) {  
  //create empty object
  let decodedObject = {};

  //replace %20 with  a space
  let spaceReplace = text.replace(/%20/gi, " ");
  //console.log(spaceReplace);

  //split the string at = and & (creates an array)
  let splitText = spaceReplace.split(/[=&]/);
  //console.log(splitText);

  //loop through splitText array.
    //even num = key && odd = value
  for (let i = 0; i < splitText.length; i += 2) {
    decodedObject[splitText[i]] = splitText[i + 1]
  }

  return decodedObject;
};

console.log(urlDecode("duck=rubber")); // ==> {duck: "rubber"}
console.log(urlDecode("bootcamp=Lighthouse%20Labs")); // ==> {bootcamp: "Lighthouse Labs"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain")); // ==> {city: "Vancouver", weather: "lots of rain"}
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather); // ==> "lots of rain"