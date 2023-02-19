import * as authActions from './auth.constants'

const initialState = {
    isAuthenticated: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case authActions.SET_USER_AUTHENTICATED : 
            return { ...state, isAuthenticated: action.payload };
        default :
            return state;
    }
}