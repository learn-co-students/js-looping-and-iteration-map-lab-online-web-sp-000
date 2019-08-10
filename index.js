function lowerCaseDrivers(arry){
  let lowerCaseDrivers = []
  arry.map(function(name){
    return lowerCaseDrivers.push(name.toLowerCase());
  })
  return lowerCaseDrivers;
}

function nameToAttributes(arry) {
  return arry.map(function(driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];
    return { firstName: driverFirst, lastName: driverLast };
  });

}

function attributesToPhrase(arry){
  return arry.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}

