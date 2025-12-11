import { useState, useEffect } from "react";


const [habits, setHabits] = useState([]);
const today = new Date().toDateString();
const [history, setHistory] = useState([{date : today, complete:0, total: 0,}])

const playSound = (type) => {
    let src = ''
    switch(type) {
        case 'add' : src = 'add.mp3'; break;
        case 'delete ': src ='delete.mp3'; break;
        case 'toggle' : src = 'toggle.mp3'; break;
        case 'celebrate' : src = 'celebration.mp3'; break;
        default : src ='';
    }
    try {
        const audio = new Audio(src);
        audio.volume = 1;
        audio.play().catch(() => {});
    }
     catch(e) {}
   };

   useEffect (() =>{
    const saved = localStorage.getItem("habits");
        if (saved) {
            const parsedHabits = JSON.parse(saved);
            const updatedHabits = parsedHabits.map((h) =>
            h.lastCompleted !== today? { ...h, completed: false} : h
            );
            setHabits(updatedHabits);
        }
   }, []); 