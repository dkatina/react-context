import React from 'react'
import { useTheme } from '../contexts/ThemeContext' 

const NavBar = () => {
    //Summon context variables from Theme
    const { isDarkMode, toggleTheme } = useTheme(); 


  return (
    <header className={isDarkMode ? 'mainDark' : 'mainLight'}>
        <h1>My Cool App</h1>
        <button onClick={toggleTheme}>{isDarkMode? 'light' : 'dark'}</button>
    </header>
  )
}

export default NavBar