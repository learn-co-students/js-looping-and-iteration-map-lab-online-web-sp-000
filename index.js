// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let  miniDrivers = drivers.map(function(name) {
    return name.toLowerCase();
  });
  return miniDrivers;
}


function nameToAttributes(drivers) {
  return drivers.map(function(name) {
    let wholeName = name.split(' ');
    return {firstName: wholeName[0], lastName: wholeName[1]}
  });
  
}


function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}


// drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

// console.log(nameToAttributes(drivers));
