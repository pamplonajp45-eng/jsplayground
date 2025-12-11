//the FlyOut wrapper, which contains the toggle button and the list.
//Toggle button, which toggle the List
// List , which contains the list of menu items.

import { createContext } from "react";


//first create the FlyOut component.
 const FlyOutContext = createContext();

 function Flyout(props){
    const[open, toggle] = useState(false);
     return (
        <FlyOutContext.Provider value ={{open, toggle}}>
            {props.children}
        </FlyOutContext.Provider>

     );
 }