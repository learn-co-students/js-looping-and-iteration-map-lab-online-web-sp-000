// Code your solution in this file.

function lowerCaseDrivers (drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
};

function nameToAttributes (drivers) {
  newAttributes = {}
  drivers.map(function(driver, newAttributes) {
    const temp = driver.split(" ")
    const key = temp[0]
    const value = temp[1]
    Object.assign(newAttributes, {key: value})
  });
  return newAttributes;
};

function attributesToPhrase () {

};
