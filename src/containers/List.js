import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'

export default function List(){
    const laundromats = useSelector(state => state.laundromats.data)

    const mappedLaundromats = laundromats.map(laundromat => {
        return (<li>
            {laundromat.attributes.name}
        </li>)

    })
    console.log(laundromats)

    return (
        <ul>
           {mappedLaundromats} 
        </ul>
    )
}