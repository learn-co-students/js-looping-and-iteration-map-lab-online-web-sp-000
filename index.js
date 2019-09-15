// Code your solution in this file
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver) {
    return driver.toLowerCase();
});
}


function nameToAttributes(attributes){
  return attributes.map(function(attr) {
    let name = attr.split(" ");
     return {firstName: name[0], lastName: name[1]};
});
}


function attributesToPhrase(attributes){
  return attributes.map(function(attr) {
     return `${attr.name} is from ${attr.hometown}`;
});
}
