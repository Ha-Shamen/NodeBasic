// Define a function to be exported
function greet(name) {
  console.log(`Hello, ${name}! from greet`);
  return `Hello, ${name}!`;
}


// Export the function
module.exports = { greet };