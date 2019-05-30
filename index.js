// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers;
  return newDrivers.map(function(driver) { return driver.toLowerCase()});
}

function nameToAttributes(drivers) {
  const newDrivers = drivers;
  return newDrivers.map(function(driver) {return { firstName: driver.split(' ')[0], lastName: driver.split(' ')[1]} });
}

function attributesToPhrase(drivers) {
  const newDrivers = drivers;
  return newDrivers.map(function(driver) {return `${driver.name} is from ${driver.hometown}`  });
}
