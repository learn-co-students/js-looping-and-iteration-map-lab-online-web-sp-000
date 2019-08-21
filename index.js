// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(each){
    return each.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(each){
    const name = each.split(' ');
    return { firstName: name[0], lastName: name[1] };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(each) {
    return `${each.name} is from ${each.hometown}`;
  });
};
