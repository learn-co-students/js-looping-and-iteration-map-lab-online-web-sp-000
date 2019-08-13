// Code your solution in this file.

function lowerCaseDrivers(list) {
  return list.map(d => {
    return d.toLowerCase();
  });
}

function nameToAttributes(list) {
  return list.map(d => {
    const driverFirst = d.split(" ")[0];
    const driverLast = d.split(" ")[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(d => {
    return `${d.name} is from ${d.hometown}`;
  });
}
