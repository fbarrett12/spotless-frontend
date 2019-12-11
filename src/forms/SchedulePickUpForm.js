import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaWpforms } from 'react-icons/fa'
import { MdClear } from 'react-icons/md'
import userActions from '../redux/actions'

export default function SchedulePickUpForm(){
    const currentUser = useSelector(state => state.user)
    const laundromat = useSelector(state => state.selectedLaundromat)
    console.log(laundromat)

    const formInfo = {
        user_id: currentUser.id,
        provider_id: laundromat.id,
        provider_name: laundromat.name,
        customer_name: currentUser.name
    }

    const dispatch = useDispatch()
    
    const handleClose = () => {
        dispatch(userActions.clearSelectedLaundromat())
    }

    const handleClick = () => {
        dispatch(userActions.setLoadToDB(formInfo))
        dispatch(userActions.clearSelectedLaundromat())
    }
    
    

    // const [pickUpForm, setPickUpForm] = useState({
    //     providerId: null,
    //     providerName: props.laudromat.name, 
    //     customerName: currentUser.userInfo.name,
    //     price: "10.00",

    // })

    return (
        <>
        <div>
        <MdClear onClick={handleClose}/>
        </div>

        <div>
            {laundromat.name}
        </div>

        <div>
            {currentUser.userInfo.name}
                <p>
                    $20
                </p>
        </div>


        <button 
        className="button-success pure-button"
        onClick={handleClick}
        style={{'border-radius': '16px'}}
        >
             Complete <FaWpforms />
        </button>

        </>
    )
}
