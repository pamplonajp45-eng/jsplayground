import { useScroll } from "framer-motion";
import { useState } from "react";

function Hello (){ // component function + return.
    return <h1>Hello!</h1>;
}

//useState
const[count, setCount] = useState (0);
const [hobby, setHobby] = useState(true);
const[time, setTime] = useState (0);


//Props pattern ( parent to child communication)
<Child name ="Mary" age ={21} />

function Child (){ //child receives props;
    return<p>{name} - {age} </p>;
}//Memorize this , PARENT SENDS---> CHILD RECEIVES.