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

const singletonCounter = Object.freeze(new Counter()); //we should freeze the instance as well. 
export default singletonCounter;                       // The Object.freeze method makes sure that 
                                                        //consuming code cannot modify the Singleton.


//https://www.patterns.dev/vanilla/singleton-pattern/
