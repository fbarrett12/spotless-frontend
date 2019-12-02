import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'

export default function List(){
    const laundromats = useSelector(state => state.laundromats)

    const mappedLaundromats = laundromats.map(laundromat => {
        return (<li>
            {laundromat.attributes.name}
        </li>)

    })
    console.log(laundromats)

    if (localStorage.role !== "Customer" || "undefined") {
        return "something else"
    } else{
        return (

       
            <ul>
               {mappedLaundromats} 
            </ul>
        )
    }

}