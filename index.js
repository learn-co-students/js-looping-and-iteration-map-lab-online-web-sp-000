// Code your solution in this file.
function lowerCaseDrivers(driversArray) {
  return driversArray.map(function(driverName) {
    return driverName.toLowerCase()
  })
}

function nameToAttributes(driversArray) {
  return driversArray.map(function(fullName) {
    return {firstName: fullName.split(" ")[0], lastName: fullName.split(" ")[1]}
  })
}

function attributesToPhrase(driversArray) {
  return driversArray.map(function(object) {
    return `${object.name} is from ${object.hometown}`
  })
}
