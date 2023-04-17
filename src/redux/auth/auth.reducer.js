import * as authActions from './auth.constants'

const initialState = {
    isAuthenticated: false,
    userEmail: '',
    userContactNum: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case authActions.SET_USER_AUTHENTICATED : 
            return { ...state, isAuthenticated: action.payload };
        case authActions.SET_USER_EMAIL : 
            return { ...state, userEmail: action.payload };
        case authActions.SET_USER_CONTACT_NUM :
            return {...state, userContactNum: action.payload};
        default :
            return state;
    }
}