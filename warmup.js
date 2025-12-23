import { i } from "framer-motion/client";


<input
type="text"
placeholder="Type here..."
value={pillName}
onChange={(e) => setPillName = (e.target.value)} />




const [pills, setPills] = useState("");

function handleAddPill() {
if(!pillName.trim())return;
setPills (prevPill => [...prevPill, pillName.trim() ] );
setPillName("");
}; /*first I created a function called handleAddPill, and then i fixed
    the stale state usage by changing .push to .filter. it willfilter the previous pill and then return not trimmed pillName
    and then set
    
    ---
    if pill name is added it will return the setted pill 
    */


    function deletePill(index){
        setPills(prevPills => 
        (prevPills.filter((_,i) => i  !== index)  ));
    }