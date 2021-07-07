const urlEncode = function(text) {
  let url = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " " && i != 0 && i < text.length - 1){
      url += "%20";
    }else {
      if (text[i] === " " && i ===0){
        continue
      }else{
        url += text[i];
      }
    };
  };
  return url
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));