let instance;//to make sure that only one instance can be created.
              //can prevent new instantiations by checking if the instance
              // variable already had a value.

let counter = 0; 
                   

class Counter {
    constructor(){
       if (instance){
         throw new Error("You can only create one instance!");
       }
       instance = this;
    }

    getInstance() {  // getInstance - returns the value
        return this;            //of the instance.
    }

    getCount(){              //getCount - returns the current value
        return counter;            // of the counter variable;
    }

    increment(){
        return ++counter; //increment - increments the value
    }                          // of counter by one.(addition).
    decrement(){
        return --counter; // decrement- decrements the value of counter
    }                        // by one(subtract)
}

const counter1 = new counter();// new (method) - calling it twice will jsut set counter 1 and counter equal to differemt instances
const counter2 = new counter();  //the values returned by the getInstance method on counter 1 and counter 2 ,               
                                // effectively returned to different instances: they aren't strictly equal!

console.log (counter1.getInsance() === counter2.getInstance());





