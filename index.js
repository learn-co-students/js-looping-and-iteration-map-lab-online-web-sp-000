// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(name => name.toLowerCase())
}

function nameToAttributes(array) {
  return array.map(function(name) {
    const nameFirst = name.split(" ")[0];
    const nameLast = name.split(" ")[1];

    return {firstName: nameFirst, lastName: nameLast};
  });
}

function attributesToPhrase(collection) {
  return collection.map(driver => `${driver.name} is from ${driver.hometown}`)
}
