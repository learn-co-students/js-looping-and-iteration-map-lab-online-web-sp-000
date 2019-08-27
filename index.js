// Code your solution in this file.
function lowerCaseDrivers(drivers){
    return drivers.map(function(d){
        return d.toLowerCase();
    });
}

function nameToAttributes(fullNames){
    return fullNames.map(function(name){
        return {firstName: name.split(" ")[0], lastName: name.split(" ")[1]};
    });
}

function attributesToPhrase(drivers){
    return drivers.map(function (d){
        return `${d.name} is from ${d.hometown}`;
    });
}