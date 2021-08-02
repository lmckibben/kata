const calculateChange = function(total, cash) {
  //set a variable to amount owed back
  let change = (cash - total);
  //console.log(change);

  //creates object of denomination
  const denomination = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };

  //loop until change = 0
  while (change > 0) {
    if (change > 2000) {
      denomination.twentyDollar += 1
      change -= 2000
    }else if (change > 1000) {
      denomination.tenDollar += 1
      change -= 1000
    }else if (change > 500) {
      denomination.fiveDollar += 1
      change -= 500
    }else if (change > 200) {
      denomination.twoDollar += 1
      change -= 200
    }else if (change > 100) {
      denomination.oneDollar += 1
      change -= 100
    }else if (change > 25) {
      denomination.quarter += 1
      change -= 25
    }else if (change > 10) {
      denomination.dime += 1
      change -= 10
    }else if (change > 5) {
      denomination.nickel += 1
      change -= 5
    }else if (change > 0) {
      denomination.penny += 1
      change -= 1
    }
  }

  if (denomination.twentyDollar === 0) {
    delete denomination.twentyDollar
  }
  
  if (denomination.tenDollar === 0) {
    delete denomination.tenDollar
  }

  if (denomination.fiveDollar === 0) {
    delete denomination.fiveDollar
  }

  if (denomination.twoDollar === 0) {
    delete denomination.twoDollar
  }

  if (denomination.oneDollar === 0) {
    delete denomination.oneDollar
  }

  if (denomination.quarter === 0) {
    delete denomination.quarter
  }

  if (denomination.dime === 0) {
    delete denomination.dime
  }

  if (denomination.nickel === 0) {
    delete denomination.nickel
  }
  
  if (denomination.penny === 0) {
    delete denomination.penny
  }

  //return denomination object
return denomination
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));