import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'

const Signup = props => {
   // initialize dispatch 
   const dispatch = useDispatch()

   // set up the local state with useState hook
   const [signupForm, setSignupForm] = useState({
       name: '',
       password: ''
   })

   // controlled form functions
   const handleSubmit = e => {
       e.preventDefault()
       dispatch(userActions.newUserToDB(signupForm))
       props.history.push('/')
   }

   const handleChange = e => {
       setSignupForm({...signupForm, [e.target.name]: e.target.value })
   }

   // destructure keys from local state to use in the form 
   const { name, password } = signupForm

   return (
       <form onSubmit={handleSubmit}>

           <h1>Signup Page</h1>

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

export default Signup
