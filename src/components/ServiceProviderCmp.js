import React from 'react'
import { FaRegCalendarCheck } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../redux/actions'
import SchedulePickUpForm from '../forms/SchedulePickUpForm'

const ServiceProviderCmp = (props) => {
    const laundromat = props.laundromats.attributes
    console.log(laundromat)

    const dispatch = useDispatch()

    const selectedLaundromat = useSelector(state => state.selectedLaundromat)

    const handleClick = () => {
        dispatch(userActions.selectLaundromat(laundromat))
        return (
            <SchedulePickUpForm laundromat={selectedLaundromat}/>
        )
    }

    return (
        <div className='laundry-list'>
           <div>
                {laundromat.name}
            </div>
            <div>
                {laundromat.address}
            </div>
            <div>
            <button className="pure-button" onClick={handleClick} >
                <FaRegCalendarCheck />
                Schedule Pick Up
            </button>
            </div>
        </div>
    )
}

export default ServiceProviderCmp