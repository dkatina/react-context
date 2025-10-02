import React from 'react'
import UserForm from '../components/UserForm/UserForm'

const UpdateProfileView = () => {

    const handleUpdate = (userData) =>{
        //API request to the update endpoint
        return 
    }

  return (
    <div>
        <UserForm submitFunction={handleUpdate}/>
    </div>
  )
}

export default UpdateProfileView