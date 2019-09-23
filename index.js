// Code your solution in this file.
function lowerCaseDrivers(array){
    return array.map(d => d.toLowerCase());
    
}

function nameToAttributes(array){
    return array.map(d => {
        const names = d.split(" ");
        return {
            firstName: names[0],
            lastName: names[1]
        }
    });
}

function attributesToPhrase(array){
    return array.map(function(d){
        return d.name + ' is from ' + d.hometown
    });
}