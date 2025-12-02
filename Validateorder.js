// Your task: Complete this function
function isOrderValid(order) {
    return (
        order.firstName && order.firstName.length > 0&&
        order.lastName && order.lastName.length > 0 &&
        order.email && order.email.length > 0 &&
        order.address && order.address.length > 0 &&
        order.payment && order.payment.length > 0 
        
    );
  // Return true if all fields exist and aren't empty, false otherwise
}

// Test cases
const order1 = {
  firstName: "Juan",
  lastName: "Dela Cruz",
  email: "juan@email.com",
  address: "Manila",
  payment: "gcash"
};

const order2 = {
  firstName: "Juan",
  lastName: "",  // Empty!
  email: "juan@email.com",
  address: "Manila",
  payment: "gcash"
};

console.log(isOrderValid(order1));  // Should output: true
console.log(isOrderValid(order2));  // Should output: false
