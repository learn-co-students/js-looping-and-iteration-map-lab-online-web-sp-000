// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function (lowerCaseName) {
        return lowerCaseName.toLowerCase();
    });
};

function nameToAttributes(drivers) {
    return drivers.map(function (driverName) {
        const driverFirstName = driverName.split(' ')[0];
        const driverLastName = driverName.split(' ')[1];
        return {firstName: driverFirstName, lastName: driverLastName};
    });
};

function attributesToPhrase(drivers) {
    return drivers.map(function (attributes) {
        return `${attributes.name} is from ${attributes.hometown}`;
    });
}