import * as authActions from './auth.constants'

const initialState = {
    isAuthenticated: false,
    userMobnum: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case authActions.SET_USER_AUTHENTICATED : 
            return { ...state, isAuthenticated: action.payload };
        case authActions.SET_USER_MOB_NUM : 
            return { ...state, userMobnum: action.payload };
        default :
            return state;
    }
}