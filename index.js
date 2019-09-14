// 1. lowerCaseDrivers()
//    uses the Array map method
//    returns all drivers lowercased
//    does not modify the original array

function lowerCaseDrivers(list) {
    return list.map(function(driver) {
        return driver.toLowerCase();
    });
}

// 2. nameToAttributes()
//    uses the Array map method
//    returns list of objects with appropriate first and last names

function nameToAttributes(list) {
  return list.map(function(driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}


// 3. attributesToPhrase()
//    uses the Array map method
//    converts to list saying the name and where each individual is from

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`;
    });
}
