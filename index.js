// Code your solution in this file.
// function lowerCaseDrivers(drivers){
//
// }

function lowerCaseDrivers(drivers){
  return drivers.map(function(driver) {
   return driver.toLowerCase();
});
}

function  nameToAttributes(drivers){
  return drivers.map(function(driver) {
    return {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]};
});
}

function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver['name']} is from ${driver['hometown']}`
  });
}

// const originalNumbers = [1, 2, 3, 4, 5];
//
// const squaredNumbers = map(originalNumbers, function(num) {
//     return num * num;
// });


//
// originalNumbers;
// // => [1, 2, 3, 4, 5]
//
// squaredNumbers;
