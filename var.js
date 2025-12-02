var plaBasicPrice  = function(gram){
    const pricePerGram = 3;
    const total = gram * pricePerGram
    return `₱${total}`;
};
console.log (plaBasicPrice(100));


/* same result shorter code.
const plaBasicPrice = gram => `₱${gram * 3}`; 
console.log(plaBasicPrice(100)) 



*/