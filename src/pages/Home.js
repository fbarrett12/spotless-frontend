import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const name = useSelector(state => state.name)
    
    const text = name ? (
        <h1 {name} are currently logged in />
    ) :
    (
        <h1 no one is logged in />
    )

    return (
        <div>
            {text}
        </div>
    )
}

export default Home
