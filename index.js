// Code your solution in this file.
const lowerCaseDrivers = (drivers) => {
    return drivers.map(driver => {
       return driver.toLowerCase();
    });
};

const nameToAttributes = (drivers) => {
    return drivers.map(driver => {
    const driverFName = driver.split(' ')[0];
    const driverLName = driver.split(' ')[1];
    return {firstName: driverFName, lastName: driverLName}
})
};

const attributesToPhrase = (drivers) => {
    return drivers.map(driver => {
        return `${driver.name} is from ${driver.hometown}`
    });
}