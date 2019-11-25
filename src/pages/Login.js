import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'

const Login = props => {
    // initialize dispatch 
    const dispatch = useDispatch()

    // set up the local state with useState hook
    const [loginForm, setLoginForm] = useState({
        name: '',
        password: ''
    })

    // controlled form functions
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(userActions.loginUserToDB(loginForm))
        props.history.push('/')
    }

    const handleChange = e => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value })
    }

    // destructure keys from local state to use in the form 
    const { name, password } = loginForm

    return (
        <form onSubmit={handleSubmit}>

            <h1>Login Page</h1>

            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="name"
            />

            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
            />
            <input type="submit" />

        </form>
    )
}

export default Login
