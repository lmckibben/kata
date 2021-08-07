const blocksAway = function(directions) {
  //create object that holds east, north
  const output = {
    east: 0,
    north: 0
  }
  //create direction variable
  let direction = "";

  //find start facing direction (right = east, left = north)
  if (directions[0] === "right") {
    direction = "north"
  }else if (directions[0] === "left") {
    direction = "east"
  }
  
  //console.log(direction);

  //create function to update
  const changeDirection = function(turn) {
    if (turn === "right" && direction === "north") {
      direction = "east"
    }else if (turn === "right" && direction === "east") {
      direction = "south"
    }else if (turn === "right" && direction === "south") {
      direction = "west"
    }else if (turn === "right" && direction === "west") {
      direction = "north"
    };

    if (turn === "left" && direction === "north") {
      direction = "west"
    }else if (turn === "left" && direction === "east") {
      direction = "north"
    }else if (turn === "left" && direction === "south") {
      direction = "east"
    }else if (turn === "left" && direction === "west") {
      direction = "south"
    };
    return direction;
  }

  //console.log(changeDirection(directions[0]));

  //find final location
  for (let i = 0; i < directions.length; i += 2) {
    //console.log(directions[i]);

    if (directions[i] === "right" && direction === "north")  {
      output.east += directions[i + 1];
      changeDirection(directions[i]);
    }else if (directions[i] === "right" && direction === "east")  {
      output.north -= directions[i + 1];
      changeDirection(directions[i]);
    }else if (directions[i] === "right" && direction === "south")  {
      output.east -= directions[i + 1];
      changeDirection(directions[i]);
    }else if (directions[i] === "right" && direction === "west")  {
      output.north += directions[i + 1];
      changeDirection(directions[i]);
    }else if (directions[i] === "left" && direction === "north") {
      output.east -= directions[i + 1];
      changeDirection(directions[i]);
    }else if (directions[i] === "left" && direction === "east") {
      output.north += directions[i + 1];
      changeDirection(directions[i]);
    }else if (directions[i] === "left" && direction === "south") {
      output.east += directions[i + 1];
      changeDirection(directions[i]);
    }else if (directions[i] === "left" && direction === "west") {
      output.north -= directions[i + 1];
      changeDirection(directions[i]);
    }
  }
  //loop through array
    
  
  return output
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));