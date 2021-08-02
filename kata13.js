const talkingCalendar = function(date) {
  //convert date to int
  dateInt = Number(date);
  

  //splits the date into an array 
  let splitDate = date.split("/");
  //console.log(splitDate[1]);

  //set variables for day rounding to get rid of 0, month, year
  let day = Math.round(splitDate[2]);
  let month = "";
  let year = splitDate[0];
  //console.log(day);

  //rounds date to nearest number getting rid of 0 at the start
  let dayInt = Math.round(splitDate[1])
  //console.log(dayInt);

  //create function to convert day
  const getDay = (day) => {
    let dayConvert = "";
    if (day === 1 || day === 21 || day === 31) {
      dayConvert = day + "st, ";
    } else if (day === 2 || day === 22) {
      dayConvert = day + "nd, ";
    } else if (day === 3 || day === 23) {
      dayConvert = day + "rd, ";
    } else {
      dayConvert = day + "th, ";
    }
    return dayConvert;
  };
  
  let dayFinal = getDay(day);
  

  //an array of the months
  const monthArray = ["January", "February", "March", "April",
                 "May", "June", "July",
                 "August", "September", "October",
                "September", "November", "December"];
  //console.log(monthArray.length);
  //console.log(monthArray[12])

  //set month
  month = monthArray[dayInt] + " ";
  //console.log(month);
  
 
  return month + dayFinal + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
