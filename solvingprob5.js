/*useEffect(async () => {
  const pill = await getNextPill();
  setNextPill(pill);
}, []);
*/

useEffect(() => {
    async function load() {
        const pill = await getNextPill();
        setNextPill(pill);    
    }       
    load();
}, []);

// “await can only be used inside an async function, 
// and useEffect must return either nothing or a cleanup function. 
// Declaring the effect callback as async makes it return a Promise, 
// which React does not allow.”