// Code your solution in this file.
function lowerCaseDrivers(divers) {
  return divers.map(function(diver) {
    return diver.toLowerCase();
  });
}

function nameToAttributes(divers) {
  return divers.map(function(diver) {
    return Object.assign({}, {firstName: diver.split(" ")[0]}, {lastName: diver.split(" ")[1]});
  });
}

function attributesToPhrase(divers) {
    return divers.map(function(diver) {
      return `${diver.name} is from ${diver.hometown}`;
    });
}
