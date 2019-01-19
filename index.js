function lowerCaseDrivers(array) {
  return array.map(function(name) { return name.toLowerCase();})
}

function nameToAttributes(array) {
  return array.map(function(name) {
    return Object.assign({}, nameToObject(name));
  })
}

function nameToObject(name) {
  let nameArray = name.split(" ");
  return Object.assign({firstName: nameArray[0]}, {lastName: nameArray[1]});
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}