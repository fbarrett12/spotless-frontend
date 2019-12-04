import React from 'react';
import { useSelector} from 'react-redux'
import ServiceProviderCmp from '../components/ServiceProviderCmp'

export default function List(props){
    const laundromats = useSelector(state => state.laundromats)
    console.log(laundromats)
    const mappedLaundromats = laundromats.map(laundromat => {
        return(
        <ServiceProviderCmp laundromats={laundromat} onClick={props.onClick}/>
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