let defaultState = {
    user: {},
    laundromats : {
        data: []
    }
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
        case 'SET_USER' :
            return action.data

        case 'CLEAR_USER': 
            return {
                ...state,
                user: {}
            }

        case 'LOAD_LAUNDROMATS' :
            return {
                ...state,
                laundromats: action.data
            }
            
        default:
            return state
    }
}