function lowerCaseDrivers(drivers) {
  return drivers.map((driver)=>{
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map((driver)=>{
    let firstName = driver.split(' ')[0]
    let lastName = driver.split(' ')[1]
    return Object.assign({}, {firstName: firstName, lastName: lastName})
  })
}

function attributesToPhrase(drivers) {
  return drivers.map((driver)=>{
    return `${driver.name} is from ${driver.hometown}`
  })
}
