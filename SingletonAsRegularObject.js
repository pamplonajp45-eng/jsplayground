let count = 0;

const counter = {

    increment() {
    return ++counter;
    },
    decrement(){
        return --counter;
    }
};
    
    Object.freeze(counter);
    export {counter};