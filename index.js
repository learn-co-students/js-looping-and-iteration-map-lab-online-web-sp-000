// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map( function(driver) {
    return driver.toLowerCase()
  } );
}

function nameToAttributes(list) {
  return list.map( function(drivers) {
    const driverFirstName = drivers.split(' ')[0];
    const driverLastName = drivers.split(' ')[1];

    return { firstName: driverFirstName, lastName: driverLastName };
  });
}

function attributesToPhrase(list) {
  return list.map( function(drivers) {
    return `${drivers.name} is from ${drivers.hometown}`;
  })
}
