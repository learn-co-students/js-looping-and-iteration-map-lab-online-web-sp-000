function lowerCaseDrivers(drivers) {
  //const newDrivers = drivers;
  return drivers.map(function(element) { return element.toLowerCase()});
}

function nameToAttributes(drivers) {
  //const newDrivers = drivers;
  return drivers.map(function(element) {return { firstName: element.split(' ')[0], lastName: element.split(' ')[1]} });
}

function attributesToPhrase(drivers) {
//  const newDrivers = drivers;
  return drivers.map(function(element) {return `${element.name} is from ${element.hometown}`  });
}
