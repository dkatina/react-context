import React, { createContext, useContext, useState, useEffect } from 'react'


//Create the Context
const AuthContext = createContext();

//Create useAuth hook to consume this context
export const useAuth = () => {
    const context = useContext(AuthContext);

    return context
}


//Creating our Auth Provider
export const AuthProvider = ({ children }) =>{
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    //Grab already logged in user
    useEffect(()=> {
        const savedToken = localStorage.getItem('token')
        const savedUser = localStorage.getItem('user')

        setToken(savedToken)
        setUser(JSON.parse(savedUser)) //parsing JSON object from the LS, and setting the object to our User
    },[])

    //Login function
    const login = async (email, password) =>{ //sending api request to login with email and password
        console.log('Send login request')
        const response = await fetch('https://my-super-cool-library.onrender.com/users/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        console.log('Response')
        const loginData = await response.json() //
        console.log('Token Data:', loginData)
        setToken(loginData.token) //grabbing the token from the api response and setting it
        setUser(JSON.stringify(loginData.user))
        localStorage.setItem('token', loginData.token)
        localStorage.setItem('user', JSON.stringify(loginData.user)) //transforming the user object into json readble string
    }

    const logout = () => {
        setToken('') //clearing saved tokens
        setUser(null)
        localStorage.removeItem('token') //potentially want to clear entire ls
        localStorage.removeItem('user')
    }

    const value = {
        token,
        user,
        login,
        logout,
        isAuthenticated: token ? true : false
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
