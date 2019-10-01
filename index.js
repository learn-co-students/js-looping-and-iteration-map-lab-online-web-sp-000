// Code your solution in this file.
//takes an array of drivers
function lowerCaseDrivers(drivers) {
    //array of the drivers names in lowercase
    return drivers.map(function(driver){
        return driver.toLowerCase();
    })
}

//takes an array of drivers
function nameToAttributes(ass) {
//with their first and last name separated by a space
    
    return ass.map(function (driver) {

        const driverFirst = driver.split(' ')[0]
        const driverLast = driver.split(' ')[1]
        
    //returns an array of JavaScript objects with `firstName` and`lastName` attributes
        // return drivers.filter(function(driverName){
            // return drivers === `${driverName + ' '}`
        // });
    return {firstName: driverFirst, lastName: driverLast};

});
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver){
        return `${driver.name} is from ${driver.hometown}`
    })
}