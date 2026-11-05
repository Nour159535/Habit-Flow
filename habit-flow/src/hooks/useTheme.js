import { useState, useEffect } from "react";

function useTheme(key, initialTheme){
    

    const[theme, setTheme] = useState(()=>{
        
     try{
        const savedTheme = localStorage.getItem(key);

        if(savedTheme === 'light' || savedTheme === 'dark'){
            return savedTheme;
        }

        return initialTheme;
   }

    catch (error){
        console.log('Error reading theme from localStorage: ', error);
        return initialTheme;
    } 
   });
   
    useEffect(()=>{
        try{
            localStorage.setItem(key, theme);
        } catch (error){
            console.log('Error saving data theme to localStorage: ', error)
        }
    }, [key, theme]);

    useEffect(()=>{
        document.documentElement.dataset.theme = theme;
    }, [theme])
    
    return [theme, setTheme]
}

export default useTheme;