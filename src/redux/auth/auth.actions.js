import * as authActions from './auth.constants'

export const setUserAuthenticated = (payload) => ({
    type: authActions.SET_USER_AUTHENTICATED,
    payload,
})