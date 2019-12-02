import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions'

const Signup = props => {
   // initialize dispatch 
   const dispatch = useDispatch()

   // set up the local state with useState hook
   const [signupForm, setSignupForm] = useState({
       name: '',
       password: '',
       role: "Customer"
   })

   // dynamically sets sign up routes 
//    let submitRoute = signupForm.role.toLowerCase
//    console.log(submitRoute)

   // controlled form functions
   const handleSubmit = e => {
       e.preventDefault()
       
       if (signupForm.role === "Courier") {
           dispatch(userActions.newUserToDB(signupForm, "http://localhost:3000/couriers"))
           props.history.push('/')
       } else if (signupForm.role === "Customer") {
        dispatch(userActions.newUserToDB(signupForm, "http://localhost:3000/users"))
        props.history.push('/')
       } else if (signupForm.role === "Service Provider") {
        dispatch(userActions.newUserToDB(signupForm, "http://localhost:3000/providers"))
        props.history.push('/')
       }
   }

   const handleChange = e => {
       setSignupForm({...signupForm, [e.target.name]: e.target.value })
   }

   // destructure keys from local state to use in the form 
   const { name, password, role } = signupForm

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
           /> <br/>

          <input 
            type="radio"
            name="role"
            value="Customer"
            checked={role === "Customer" ? "checked" : "" }
            onChange={handleChange}
          /> Customer <br></br>

          <input 
            type="radio"
            name="role"
            value="Courier"
            checked={role === "Courier" ? "checked" : "" }
            onChange={handleChange}
          /> Courier <br></br>

          <input 
            type="radio"
            name="role"
            value="Service Provider"
            checked={role === "Service Provider" ? "checked" : "" }
            onChange={handleChange}
          /> Service Provider <br></br>

           <input type="submit" />

       </form>
   )
}

export default Signup
