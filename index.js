// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(names) {
  return names.map(function (name) {
    return Object.assign({}, { firstName: name.split(" ")[0], lastName: name.split(" ")[1] },);
  });
}

function attributesToPhrase(names) {
  return names.map(function (name) {
    return name.name + ' is from ' + name.hometown
  });
}
