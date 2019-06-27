// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
};

function nameToAttributes(driverArr) {
  return driverArr.map(function(driverName){
    const nameSplit = driverName.split(' ');
    return Object.assign({}, {firstName: nameSplit[0], lastName: nameSplit[1]});
  });
};

function attributesToPhrase(driverArr){
  // "DRIVER NAME is from HOMETOWN";
  return driverArr.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  });
};
