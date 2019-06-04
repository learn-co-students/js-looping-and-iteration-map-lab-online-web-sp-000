function lowerCaseDrivers(drivers) {
  return drivers.map(x => x.toLowerCase());
};

function nameToAttributes(drivers){
  return drivers.map(function(x) {
    const first = x.split(' ')[0];
    const last = x.split(' ')[1];
    return {firstName: first, lastName: last};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(x => `${x.name} is from ${x.hometown}`);
}
