import React from 'react'
import { useSelector } from 'react-redux'
import MainContainer from '../containers/MainContainer'

const Home = () => {
    const currentUser = useSelector(state => state.user)
        
    console.log(currentUser)
    
    const text = currentUser.token ? (
        <h1> {currentUser.userInfo.name} is currently logged in </h1>
    ) :
    (
        <h1> no one is logged in</h1>
    )

    return (
        <div>
            {text}
            <MainContainer />
        </div>
    )
}

export default Home
