// Code your solution in this file.
function lowerCaseDrivers (driversArray){
  return driversArray.map(function(driverElement){
    return driverElement.toLowerCase();
  });
}

function nameToAttributes(driversArray){
  return driversArray.map(function(driverElement){
    const driverFirst = driverElement.split(" ")[0];
    const driverLast = driverElement.split(" ")[1];

    return {firstName: driverFirst, lastName: driverLast };
  });
}

function attributesToPhrase (driversArray){
  return driversArray.map(function(driverElement){
    return `${driverElement.name} is from ${driverElement.hometown}`;
  });

}
