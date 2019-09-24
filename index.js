function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  const driversObj = []
  drivers.map(driver => {
    driver = driver.split(" ");
    const obj = {
      "firstName": driver[0],
      "lastName": driver[1]
    }
    driversObj.push(obj)
  })
  return driversObj;
}

function attributesToPhrase(drivers) {
  const driverPhrase = [];
  drivers.map(driver => {
    driverPhrase.push(`${driver.name} is from ${driver.hometown}`)
  })
  return driverPhrase
}
