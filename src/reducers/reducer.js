let defaultState = {
    laundromats : {
        data: []
    }
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
        case 'LOAD_LAUNDROMATS' :
            return {
                ...state,
                laundromats: action.data
            }
        default:
            return state
    }
}