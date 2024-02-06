// Set a constant variable for the temperature today in Kelvin.
const kelvin = 293;

// Set a constant variable for the temperature today in Celsius, using math and the variable for Kelvin.
const celsius = kelvin - 273;

// Set a changeable variable for the temperature today in Fahrenheit, using math and the variable for Celsius.
let fahrenheit = celsius * (9 / 5) + 32;

// Round the value for Fahrenheit.
fahrenheit = Math.floor(fahrenheit);

// Print the forecast.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra credit

// Set a variable for the temperature today in Newton scale.
let newton = celsius * (33 / 100);

// Round the value for the temp in Newton scale.
newton = Math.floor(newton);

// Print the forecast in Newton scale.
console.log(`Alternatively, the temperature is ${newton} degrees Newton.`)
