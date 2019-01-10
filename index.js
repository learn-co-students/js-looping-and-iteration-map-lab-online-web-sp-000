function lowerCaseDrivers(array) {
  const newDrivers = array.map(driver => driver.toLowerCase())
  return newDrivers
}

function nameToAttributes(array) {
  let newDrivers = []
  array.map(function(driver) {
    newDrivers.push(Object.assign({firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}))
  })
  return newDrivers
}

function attributesToPhrase(array) {
  let phrases = []
  array.map(function(object) {
    phrases.push(`${object.name} is from ${object.hometown}`)
  })
  return phrases
}
