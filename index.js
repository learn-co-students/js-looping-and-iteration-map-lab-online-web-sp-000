// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(item) {
    return item.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(fullName) {
    return {firstName: fullName.split(" ")[0], lastName: fullName.split(" ")[1]}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(object) {
    return `${object.name} is from ${object.hometown}`
  })
}
