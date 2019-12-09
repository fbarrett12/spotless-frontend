import React from 'react';
import { useSelector } from 'react-redux'
import List from './List'
import  SchedulePickUpForm  from '../forms/SchedulePickUpForm'

export default function MainContainer() {
    let selectedLaundromat = useSelector(state => state.selectedLaundromat)

    const handleClickForScheduleButton = () => {
        //return <SchedulePickUpForm />
    }

        if (Object.keys(selectedLaundromat).length === 0){
            return <List onClick={handleClickForScheduleButton}/>
        } else{
            return <SchedulePickUpForm />
        }
       
    
    

    // return (
    // )
}

