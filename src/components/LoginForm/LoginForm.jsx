import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const LoginForm = () => {
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth();

    const handleSubmit = async (event) =>{
        console.log(`PASSING ${email} and {password} to login`)
        event.preventDefault()
        await login(email, password)
    }

  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input value={email} 
            placeholder="Email" 
            type="email" 
            onChange={(e)=>setEmail(e.target.value)}/>
            <input value={password}
            placeholder='Password'
            onChange={(e)=>setPassword(e.target.value)}
            type="password" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default LoginForm