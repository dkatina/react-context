import React from 'react'
import { useState } from 'react'

const UserForm = ({ submitFunction }) => {
    const [formData, setFormData] = useState({
        username: '',
        DOB: '',
        password: '',
        email: '',
        address: '',
        role: ''
    })

    const handleChange = (event) =>{
        const { name, value } = event.target //grabbing the name and value properties from the input element
        setFormData(prevData => ({...prevData, [name]:value}))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      submitFunction(formData);
    }

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="email" name='email' placeholder='email' onChange={(e)=>handleChange(e)} value={formData.email} />
        <input type="username" name='username' placeholder='username' onChange={(e)=>handleChange(e)} value={formData.username} />
        <input type="password" name='password' placeholder='password' onChange={(e)=>handleChange(e)} value={formData.password} />
        <input type="DOB" name='DOB' placeholder='DOB' onChange={(e)=>handleChange(e)} value={formData.DOB} />
        <input type="address" name='address' placeholder='address' onChange={(e)=>handleChange(e)} value={formData.address} />
        <input type="role" name='role' placeholder='role' onChange={(e)=>handleChange(e)} value={formData.role} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UserForm