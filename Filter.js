const products = [
  { name: "PLA Basic", price: 4 },
  { name: "PLA Matte", price: 4 },
  { name: "PETG CF", price: 4 },
  { name: "TPU", price: 4 }
];

// Your task: Complete this function
function searchProducts(products, searchTerm) {
  
  return products.filter = product => product.name.toLowerCase() .includes(searchTerm.toLowerCase());
}

// Test cases
console.log(searchProducts(products, "pla"));  
// Should return: [{ name: "PLA Basic", ... }, { name: "PLA Matte", ... }]

console.log(searchProducts(products, "tpu"));  
// Should return: [{ name: "TPU", ... }]
