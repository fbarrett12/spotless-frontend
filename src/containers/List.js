import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import ServiceProviderCmp from '../components/ServiceProviderCmp'

export default function List(){
    const laundromats = useSelector(state => state.laundromats)
    console.log(laundromats)
    const mappedLaundromats = laundromats.map(laundromat => {
        return(
        <ServiceProviderCmp laundromats={laundromat} />
        // return (<li>
        //     {laundromat.attributes.name}
        // </li>)
        )
    })
    console.log(laundromats)

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