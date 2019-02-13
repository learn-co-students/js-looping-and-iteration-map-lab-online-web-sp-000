// Code your solution in this file.

function lowerCaseDrivers(array) {
  
return array.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(list) {
  return list.map(function(driver) {
    const first = driver.split(' ')[0];
    const last = driver.split(' ')[1];

    return { firstName: first, lastName: last };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}