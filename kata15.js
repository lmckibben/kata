const organizeInstructors = function(instructors) {
  //create arrays for each class
  const iosInstructorName = [];
  const webInstructorName = [];
  const blockchainInstructorName = [];

  //loop through instructors array
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].course === "iOS") {
      iosInstructorName.push(instructors[i].name);
      //console.log(iosInstructorName);
    }else if (instructors[i].course === "Web") {
      webInstructorName.push(instructors[i].name);
      //console.log(webInstructorName);
    }else if (instructors[i].course === "Blockchain") {
      blockchainInstructorName.push(instructors[i].name);
      //console.log(blockchainInstructorName);
    };
  };

  if (blockchainInstructorName.length === 0) {
    delete blockchainInstructorName;
  };
  
  const organizedObj = {
    iOS: iosInstructorName,
    Web: webInstructorName,
    Blockchain: blockchainInstructorName
  };

  for (let x in organizedObj) {
    if (organizedObj[x].length === 0) {
      delete organizedObj[x];
    };
  };

  return organizedObj
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));