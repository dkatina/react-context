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

    //Grab already logged in user
    useEffect(()=> {
        const savedToken = localStorage.getItem('token')

        setToken(savedToken)
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
        const tokenData = await response.json() //
        console.log('Token Data:', tokenData)
        setToken(tokenData.token) //grabbing the token from the api response and setting it
        localStorage.setItem('token', tokenData.token)
    }

    const logout = () => {
        setToken('') //clearing saved tokens
        localStorage.removeItem('token') //potentially want to clear entire ls
    }

    const value = {
        token,
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
