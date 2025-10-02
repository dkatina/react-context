import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useTheme } from '../contexts/ThemeContext'
import { useNavigate } from 'react-router-dom'

const ProfileView = () => {
  const { user,  deleteUser } = useAuth();
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleDelete = () => {
     deleteUser();
     navigate('/')
  }

  console.log(user)
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{width: '50vw', minWidth: '400px'}}>
        <h1>Profile Page</h1>
        <h2>{user?.username}</h2>
        <hr />
        <div style={{display: 'flex', flexDirection: 'column', gap: '4vh'}}>
          <p>EMAIL: {user?.email}</p>
          <p>ROLE: {user?.role}</p>
          <p>ADDRESS: {user?.address}</p>
          <p>DATE OF BIRTH: {user?.DOB}</p>
          <button onClick={()=>navigate('/profile/update')}>Update</button>
          <button onClick={()=>handleDelete()}>Delete</button>
        </div>
      </div>

    </div>
  )
}

export default ProfileView