// Code your solution in this file.
function lowerCaseDrivers(array) {
  const newArray = array.map(function(key){return key.toLowerCase()});
  return newArray;
}

function nameToAttributes(array) {
    const newArray = array.map(function(driver) {return driver.split(' ');}).map(function(driver){return Object.assign({}, driver, {firstName: driver[0], lastName: driver[1]});}).filter(function(driver) {return delete driver['0']}).filter(function(driver) {return delete driver['1']});
    return newArray
}

function attributesToPhrase(array) {
  return array.map(function(driver) {return `${driver.name} is from ${driver.hometown}`});
}
