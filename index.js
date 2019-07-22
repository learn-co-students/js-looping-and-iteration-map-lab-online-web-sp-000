
// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    const lowerCasedDrivers = drivers.map(function(driver) {
        return driver.toLowerCase()
    })

    return lowerCasedDrivers;
}

function nameToAttributes(drivers) {
    const separatedNames = drivers.map(function(driver) {
        let fullName = [];
        const firstName = driver.split(" ")[0];
        const lastName = driver.split(" ")[1];
        fullName = {
                    firstName: firstName,
                    lastName: lastName
        }
        return fullName;
    })
    return separatedNames;
}

function attributesToPhrase(drivers) {
    const printHomeTowns = drivers.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`
    })

    return printHomeTowns;
}