import React from 'react';
import { useSelector} from 'react-redux'
import ServiceProviderCmp from '../components/ServiceProviderCmp'


export default function List(props){
    const laundromats = useSelector(state => state.laundromats)
    const currentUser = useSelector(state => state.user)

    console.log(currentUser.role)
    
    const mappedLaundromats = laundromats.map(laundromat => {
        return(
        <ServiceProviderCmp laundromats={laundromat} onClick={props.onClick}/>
        )
    })

    // switch(currentUser){
    //     case currentUser.role === "User":
    //         return (
    //             <ul>
    //                {mappedLaundromats} 
    //             </ul>
    //         )
    //     default:
    //         return "something else"
    // }

    if (localStorage.role !== "User") {
        return "something else"
    } else{
        return (
            <ul>
               {mappedLaundromats} 
            </ul>
        )
    }

}