// Code your solution in this file.
function lowerCaseDrivers(array)
{
  return(array.map(function(employee)
  {
    return(employee.toLowerCase());
  }
  ));
}

function nameToAttributes(array)
{
  return(array.map(function(employee)
  {
    const firstname = employee.split(' ')[0];
    const lastname = employee.split(' ')[1];

    return({ firstName: firstname, lastName: lastname });
  }
  ));
}

function attributesToPhrase(array)
{
  return(array.map(function(employee)
  {
    return(`${employee.name} is from ${employee.hometown}`);
  }
  ));
}
