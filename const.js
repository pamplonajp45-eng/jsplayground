// Your task: Complete this function
function calculatePrice(grams){
   const pricePerGram = 4;
   const total = grams * pricePerGram;
    return `₱${total}`;
}


// Test cases
console.log(calculatePrice(100));  // Should output: ₱400
console.log(calculatePrice(250));  // Should output: ₱1000
  