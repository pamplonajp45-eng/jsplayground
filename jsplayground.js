let score = 10; // Ang let pede mag reassign ng value
console.log (score);
score = 20;
console.log(score);

const maxScore = 100;// Ang const hindi pede mag re-assign.
console.log (maxScore);

function outer(){
    return function inner (){ // pede mag ignore ng arguments.
        console.log ("Hi");
    }
}

function createHelloWorld(){
    return function (){
        console.log ("Hello World");
    };
}
 var createHelloWorld = function(){
        return function (...args){ // yung para mag capture ng kahit ilang arguments.
            return "Hello World";
 }
 };
  var createWebsite = function(){
        return function (...args){
        return "My Website";
        }
  };

  //CLOSURE - naaalala ng innter function and variables ng outer function
  function outer(){
    let x = 5;
    return function inner(){
        console.log(x);
    }
  }
  const fn = outer();
    fn();

  var createCounter = function(n){
    return function (){
    return n++;
    }

  };
   var createAnotherCounter = function(x){
        return function(){
        return x++;
        }
   };

   
  
    