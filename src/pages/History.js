import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import userActions from '../redux/actions'
import Load from '../components/Load'

export default function History (){
    
    const loads = useSelector(state => state.user.loadHistory)
    const currentUser = useSelector(state => state.user.userInfo)
    console.log(currentUser)
    console.log(loads)
    let mappedLoads = null
    if (loads) {
     mappedLoads = loads.map(load => {
        return <Load load={load}/>
    })}

    return (
        <>
        
            <div>
                Cleaning History<br />
                
            <ul>
               {mappedLoads ? mappedLoads : null} 
            </ul>
    
            </div>
        </>
    )
}

