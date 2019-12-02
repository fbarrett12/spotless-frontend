import React from 'react'
import { useSelector } from 'react-redux'
import MainContainer from '../containers/MainContainer'

const Home = () => {
    const user = useSelector(state => state.user)
    
    const text = user.id ? (
        <h1> {user.name} is currently logged in </h1>
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
