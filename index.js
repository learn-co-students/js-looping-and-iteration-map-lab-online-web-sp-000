// Code your solution in this file.


function lowerCaseDrivers(drivers){
  
  return drivers.map(function(drivers){return drivers.toLowerCase();});
  
  
  
}


function nameToAttributes(drivers){
  
 return drivers.map(function(drivers){ drivers.split(" "); 
   let driverFirstName = drivers.split(" ")[0];
   let driverLastName = drivers.split(" ")[1];
    return {firstName: driverFirstName, lastName: driverLastName};
 }) ;
  
  
}

function attributesToPhrase(drivers){
  
  return drivers.map(function(drivers){
    return `${drivers.name} is from ${drivers.hometown}`;
    
  });
  
  
  
  
}