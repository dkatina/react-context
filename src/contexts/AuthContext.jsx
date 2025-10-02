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
        const userData = JSON.parse(savedUser)
        setUser(userData) //parsing JSON object from the LS, and setting the object to our User
    },[])

    //Login function
    const login = async (email, password) =>{ //sending api request to login with email and password
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

        const loginData = await response.json() //translating json to js
       
        setToken(loginData.token) //grabbing the token from the api response and setting it
        setUser(loginData.user) //unpacking the user should require parse
        localStorage.setItem('token', loginData.token)
        localStorage.setItem('user', JSON.stringify(loginData.user)) //transforming the user object into json readble string
    }

    //Update User Function
    const updateUser = async (updateData) => {
        const response = await fetch('https://my-super-cool-library.onrender.com/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(updateData)
        })

        const updatedUserData = await response.json()
        setUser(updatedUserData)
        localStorage.setItem('user', JSON.stringify(updatedUserData))
    }

    //Register User Function
    const registerUser = async (registerData) => {
        const response = await fetch('https://my-super-cool-library.onrender.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        })

        const responseData = await response.json()
        console.log(responseData)
    }


    const logout = () => {
        setToken('') //clearing saved tokens
        setUser('')
        localStorage.removeItem('token') //potentially want to clear entire ls
        localStorage.removeItem('user')
    }

     //delete User Function
    const deleteUser = async () => {
        const response = await fetch('https://my-super-cool-library.onrender.com/users', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })

        const responseData = await response.json();
        console.log(responseData);
        logout(); //clearing out local storage and context variables
    }

    const value = {
        token,
        user,
        updateUser,
        registerUser,
        deleteUser,
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
