//function loadPills () {
//    const pills = JSON.parse(localStorage.getItem('pills'));
//    return pills.map(pill => pill.name);
//}






function loadPills() {
    try {
        const pillsData = localStorage.getItem('pills');
        const pills = pillsData ? JSON.parse(pillsData) : [];

        if (!Array.isArray(pills)) {
            return [];
        }       
        return pills.filter(pill => typeof pill.name === 'string').map(pill => pill.name);
    } catch (error) {
        console.error('Error loading pills from localStorage:', error);
        return [];
    }
}