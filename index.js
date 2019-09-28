// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  const lowerCased = [];
  drivers.map(function(driver) { lowerCased.push(driver.toLowerCase()) });
  return lowerCased;
}

function nameToAttributes(drivers) {
  const madeIntoObj = [];
  drivers.map(function(driver) { madeIntoObj.push({firstName: driver.split(" ")[0], lastName: driver.split(" ")[1] }) });
  return madeIntoObj;
}

function attributesToPhrase(drivers) {
  const strings = []; 
  drivers.map(function(driver) {strings.push(`${driver.name} is from ${driver.hometown}`)});
  return strings;
}