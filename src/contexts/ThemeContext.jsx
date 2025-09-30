
import React, { createContext, useContext, useState, useEffect } from 'react';


//Create the context
const ThemeContext = createContext();


//Create custom hook to consume our context -- OPTIONAL
export const useTheme = () => {
    const context = useContext(ThemeContext);

    return context;
}

//Create our context provider
export const ThemeProvider = ({ children }) => {

    //initialize our dark and light toggle
    const [isDarkMode, setIsDarkMode] = useState(()=>{
        const saved = localStorage.getItem('theme') //we will be store our theme in the ls
        return saved === 'dark'//will return true or false depending on wether we got 'dark' or 'light' from ls
    })

    //save our them whenever it changes
    useEffect(()=>{
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light' )
    }, [isDarkMode]) //sets our local storage on mount and whenever our DarkMode (theme) changes

    //Function to toggle our theme
    // prev parameter in the call back of a setState function always refers to the previous state for the state Varible it sets.
    const toggleTheme = () =>{
        setIsDarkMode((prev) => !prev) //takes in previous true or false data, and returns the opposite (sets isDarkMode to the opposite of its current bool)
    }

    // Value object contains the data that we will be making available across our entire app
    const value = {
        isDarkMode,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>


    )





}
