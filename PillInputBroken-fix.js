import { useState } from "react";

function PillInput (){
const pillName = useState("");
const pills = useState([]);


function handleAddPill(){
    pills.push(pillName);
}

return(

<div>
    <h2>Add Pill</h2>

   <input 
    type="text"
    value={pillName}
    placeholder="Type your pills here..."
    onChange={(e) => pillName = e.target.value}
/> 
<button onClick={handleAddPill}>
Add
</button>

<ul>
    {pills.map((pill, index) => (
        <li key ={index}>{pill} </li>
    ))}
</ul>
</div>
);
}




import { useState } from  
const handleSubmit = () =>{
if(!pillName.trim()) return;
onAdd (pillName.trim());
setPillName("");
};

return(
<div>
<input
className="pill-input"
type="text"
placeholder="Please insert a pill name..."
value={pillName}
onChange={(e) => setPillName(e.target.value)}
/>
<button className="pill-button"
onClick={handleSubmit}

> Add pill</button>
</div>
)
}