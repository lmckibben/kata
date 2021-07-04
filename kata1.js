const sumLargestNumbers = function(data) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < data.length; i++){
    for (let j = 0; j < data.length; j++){
      if (data[j] > y){
        y = data[j]
      }
    }
    data.splice(data.indexOf(y), 1)
    if (data[i] > x){
      x = data[i];
    }
  }
  return x + y
};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

