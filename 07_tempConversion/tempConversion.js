//C = 5/9 x (F-32)
const convertToCelsius = function(temperature) {
  let celsius = 5/9 * (temperature -32)
  if (Number.isInteger(celsius)) {
    return celsius;
  }
  else {
  return parseFloat(celsius.toFixed(1));
  }
};
//°F = °C × (9/5) + 32
const convertToFahrenheit = function(temperature) {
  let fahrenheit = temperature * (9/5) + 32
  if (Number.isInteger(fahrenheit)) {
    return fahrenheit;
  }
  else {
    return parseFloat(fahrenheit.toFixed(1));
  }
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
