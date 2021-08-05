const squareCode = function (message) {
  //removes space from message
  let spaceRemoved = "";
  for (let s = 0; s < message.length; s++) {
    if (message[s] !== " ") {
      spaceRemoved += message[s];
    }
  }
  //console.log(spaceRemoved);

  //get squareRoot of spaceRemoved
  let squareRoot = Math.ceil(Math.sqrt(spaceRemoved.length));
  //console.log(squareRoot);

  //split spacedRemoved based on squareRoot set to an array
  let squaredMessage = [];
  let temp = "";
  let x = 0;
  let y = squareRoot;

  //loops through spaceRemove
  while (squaredMessage.length < squareRoot) {
    //sets a temp string to spliced spaceRemoved based on SQR
    temp = spaceRemoved.slice(x, y);
    //pushes temp string to array
    squaredMessage.push(temp);
    //increases splice values by SQR
    x += squareRoot;
    y += squareRoot;
  }
  //console.log(squaredMessage);

  //creates coded msg
  let codeMsg = "";
  //console.log(arr);
  //loops sets each part of string to be = squareRoot
  for (i = 0; i < squareRoot; i++) {
    //loops through squaredMessage array
    for (let j = 0; j <squaredMessage.length; j++) {
      //if statement to add create codeMsg
        //when using (j < squareRoot) anything after Sqr adds undefined
      //set if to only add item if !== undefined
      if (squaredMessage[j][i] !== undefined) {
        //console.log(squaredMessage[j][i]);
        codeMsg += squaredMessage[j][i];
      }
    }
    codeMsg += " "
  }

  return codeMsg;
};



console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
