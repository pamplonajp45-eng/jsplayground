//async function getNextPill() {
 // const response = fetch("/api/pills");
//  const data = await response.json();
//  return data[0];
//}

async function getNextPill() {
    try {
        const response = await fetch("/api/pills");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
            throw new Error('No pills available');
        }
        return data[0];
    } catch (error) {
        console.error('Error fetching next pill:', error);
        return null;   
    }
}