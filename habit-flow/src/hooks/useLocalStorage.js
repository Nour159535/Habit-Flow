import { useEffect, useState } from "react";

function useLocalStorage(key, initialHabits) {

    const [habits, setHabits] = useState(() => {
        try {
            const savedHabits = localStorage.getItem(key);

            if(savedHabits === null){
                return initialHabits;
            }
            
            const parsedHabits = JSON.parse(savedHabits);

            if(Array.isArray(parsedHabits)){
                return parsedHabits;
            }

            return initialHabits;
        } catch (error) {
            console.error("Error reading habits from localStorage:", error);
            return initialHabits;
        }   
    });

    useEffect(() => {
        try{
            localStorage.setItem(key, JSON.stringify(habits))
        }catch(error){
            console.error("Error saving habits to localStorage:", error);
        }
        
    }, [key, habits]);

    return [habits, setHabits]

} 

export default useLocalStorage;