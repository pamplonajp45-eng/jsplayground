/*
useEffect(() => {
  async function load() {
    const pill = await getNextPill();
    setNextPill(pill);
  }
  load();
}, []);

*/

useEffect(() => {
    let isMounted = false;
    async function load() {
        try {
            const pill = await getNextPill();
            if (!isMounted) {
            setNextPill(pill);
            console.log('Next pill loaded:', pill);
            setErrprev(false);
            }
            

        } catch (error) {
            if (!isMounted) {
                console.error('Error loading next pill:', error);
        }
    }
    }
    load(); return () => {isMounted = true;};
}, []); 


// “I use a cleanup flag to prevent state updates after unmount.
// If the async operation finishes late, the state update is skipped.”
