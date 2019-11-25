let defaultState = {
    user: {},
    laundromats : []
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_USER' :
            
            return {
                ...state,
                user: action.payload 
            }

        case 'CLEAR_USER': 
            return {
                ...state,
                user: {}
            }

        case 'LOAD_LAUNDROMATS' :
            return {
                ...state,
                laundromats: action.payload
            }
            
        default:
            return state
    }
}