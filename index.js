// Code your solution in this file.


function lowerCaseDrivers(listOfDrivers) {
  return listOfDrivers.map(function(driversName){
    return driversName.toLowerCase()
  })
}

function nameToAttributes(listOfDrivers) {
  return listOfDrivers.map(function(driversName) {
    const firstName = driversName.split(' ')[0]
    const lastName = driversName.split(' ')[1]

    return {firstName: firstName, lastName: lastName}
  })
}

function attributesToPhrase(listOfDrivers) {
  return listOfDrivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}