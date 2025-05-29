// Validate email format
function validateEmail(email) {
    return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.')
}

  

// Calculate total price in cart
const cartTotal = [29.99, 34.99, 25.99, 22.50];
function calculateTotalPrice(prices) {
    return prices.reduce((total, price) => total + price, 0).toFixed(2);
}

  

//Greeting based on the time of the day
function getGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning!";
  } else if (hour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  return greeting;
}






console.log(validateEmail("user@user.com")); 
console.log(`Total: $${calculateTotalPrice(cartTotal)}`); 
console.log(getGreeting());