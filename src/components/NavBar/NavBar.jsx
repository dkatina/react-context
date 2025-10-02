import React from 'react'
import { useTheme } from '../../contexts/ThemeContext' 
import ThemeSwitch from '../ThemeSwitch';
import './NavBar.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';


const NavBar = () => {
    //Summon context variables from Theme
    const { isDarkMode, toggleTheme } = useTheme(); 
    const navigate = useNavigate();
    const { logout, isAuthenticated } = useAuth();

    const handleLogout = () => {
      logout();
      navigate('/')
    }

  return (
    <header className={isDarkMode ? 'mainDark' : 'mainLight'}>
      <nav style={{display: 'flex', justifyContent: 'space-between', padding: '2vw'}}>
        <h1>My Cool App</h1>
        <ul style={{display: 'flex', width: '40vw', justifyContent: 'space-between', alignItems: 'center'}}>
          <NavLink to='/' className='navlink'>HOME</NavLink>
          {isAuthenticated ?
          <>
            <NavLink to='/profile'className='navlink'>PROFILE</NavLink>
            <p onClick={()=>handleLogout()} className='navlink'>LOGOUT</p>
          </>
          :
          <NavLink to='/login'className='navlink'>LOGIN</NavLink>
          }
          <ThemeSwitch onClick={toggleTheme}/>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar