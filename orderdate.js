const { MongoInvalidArgumentError } = require("mongodb");

// Your task: Complete this function
function formatOrderDate(dateString) {
    const date = new Date(dateString)
    return date.toLocaleDateString( "en-US", {
        year:"numeric",
        month:"short",
        day:"numeric",
        hour:"2-digit",
        minute:"2-digit"
        
    });
}

// Test case
// Should output: "Nov 30, 2025, 10:30 AM"
const orderDate = "2025-12-25T10:30:00.000Z";
console.log(formatOrderDate(orderDate));