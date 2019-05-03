
function lowerCaseDrivers(array) {
    const lower = array.map(arr => arr.toLowerCase());
    return lower;
}

function nameToAttributes(array) {
   return array.map(function (arr) {
        const name = arr.split(" ")
        return {firstName: name[0], lastName: name[1]};
        
    });
}

function attributesToPhrase(array) {
    const attributes = array.map(arr => `${arr.name} is from ${arr.hometown}`);
    return attributes;
}