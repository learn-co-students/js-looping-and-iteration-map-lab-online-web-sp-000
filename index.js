// Code your solution in this file.
function lowerCaseDrivers(obj) {
  return obj.map(function(name) {
    return name.toLowerCase()
  })
};

function nameToAttributes(obj) {
  return obj.map(function(name) {
    return Object.assign({firstName: name.split(' ')[0]}, {lastName: name.split(' ')[1]})
  })
};

function attributesToPhrase(obj) {
  return obj.map(function(data) {
    return `${data.name} is from ${data.hometown}`
  })
}
