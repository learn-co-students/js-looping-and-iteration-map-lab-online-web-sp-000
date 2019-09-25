// Code your solution in this file.

const lowerCaseDrivers = drivers => drivers.map(item => item.toLowerCase());

const nameToAttributes = drivers => drivers.map(item => ({firstName: item.split(" ")[0], lastName: item.split(" ")[1]}));

const attributesToPhrase = drivers => drivers.map(obj => obj.name + " is from " + obj.hometown);
