// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function (driver) {
      return driver.toLowerCase();
    });
}

function nameToAttributes(drivers) {
  return 
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    let dr = {};
    dr.firstName = driver.split(" ")[0];
    dr.lastName = driver.split(" ")[1];
    return Object.assign({}, dr);
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function (driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}
