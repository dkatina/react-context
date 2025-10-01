import React from 'react'
import { useTheme } from '../../contexts/ThemeContext' 
import ThemeSwitch from '../ThemeSwitch';
import './NavBar.css'

const NavBar = () => {
    //Summon context variables from Theme
    const { isDarkMode, toggleTheme } = useTheme(); 


  return (
    <header className={isDarkMode ? 'mainDark' : 'mainLight'}>
      <nav style={{display: 'flex', justifyContent: 'space-between', padding: '2vw'}}>
        <h1>My Cool App</h1>
        <ul style={{display: 'flex', width: '40vw', justifyContent: 'space-between', alignItems: 'center'}}>
          <li className='navLink'>HOME</li>
          <li className='navLink'>PROFILE</li>
          <li className='navLink'>LOGOUT</li>
          <li className='navLink'>LOGIN</li>
          <ThemeSwitch onClick={toggleTheme}/>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar