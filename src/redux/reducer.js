let defaultState = {
    user: {},
    laundromats : [],
    selectedLaundromat: {},
    currentLoad: {}
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
        
        case 'SET_ROLE':
            return {
                user: {

                    ...state,
                    role: action.payload
                }
            }

        case 'LOAD_LAUNDROMATS' :
            return {
                ...state,
                laundromats: action.payload
            }
        
        case 'SELECT_LAUNDROMAT':
            return {
                ...state,
                selectedLaundromat: action.payload
            }
        
        case 'CLEAR_SELECTED_LAUNDROMAT':
            return {
                ...state,
                selectedLaundromat: {}
            }

        case 'CREATE_LOAD':
            return {
                ...state,
                currentLoad: action.payload
            }
            
        default:
            return state
    }
}