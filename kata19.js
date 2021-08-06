const generateBoard = function(whiteQueen, blackQueen) {
  //create empty array
  const board = [];

  //loop through board array
  for (let i = 0; i < 8; i++) {
    //create temp array
    const tempArr = [];

    //nested loop through temp array
    for (let j = 0; j < 8; j++) {
      //if checks coordinates of both wQ, Bq and adds them to array
      if (whiteQueen[0] === i && whiteQueen[1] === j) {
        tempArr.push(1);
      }else if (blackQueen[0] === i && blackQueen[1] === j){
        tempArr.push(1);
      }else {
        tempArr.push(0);
      }
    }
    //add temp array to board array
    board.push(tempArr);
  }
    
  // return board array
  return board;
};

const queenThreat = function(board) {
  //create empty variable
  let attack = false;
  let wQ = [];
  let bQ = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1 && wQ.length === 0) {
        wQ = [i, j];
      }else if (board[i][j] === 1 && wQ.length > 0) {
        bQ = [i, j]
      }
    }
  }
  //console.log(wQ);
  //console.log(bQ);
  
  //checks attack by rows and col
  if (wQ[0] === bQ[0] || wQ[1] === bQ[1]) {
    attack = true;
  }

  //checks right diagonal
  let x = 0;
  let wQCheck = [];
  wQCheck.push(wQ[0], wQ[1]);
  while (x < 8) {
    if (wQCheck[0] === bQ[0] && wQCheck[1] === bQ[1] ){
      attack = true;
    }
    wQCheck[0] += 1;
    wQCheck[1] += 1;
    //console.log(wQCheck);
    //console.log(wQCheck[0]);
    //console.log(wQCheck[1]);
    //console.log(wQ[0], + wQ[1]);
    x++
  }

  //left diagonal
  x = 0;
  wQCheck = [];
  wQCheck.push(wQ[0], wQ[1]);
  while (x < 8) {
    if (wQCheck[0] === bQ[0] && wQCheck[1] === bQ[1] ){
      attack = true;
    }
    wQCheck[0] += 1;
    wQCheck[1] -= 1;
    //console.log(wQCheck);
    //console.log(wQCheck[0]);
    //console.log(wQCheck[1]);
    //console.log(wQ[0], + wQ[1]);
    x++
  }


  return attack;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
