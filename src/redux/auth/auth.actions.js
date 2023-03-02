import * as authActions from './auth.constants'

export const setUserAuthenticated = (payload) => ({
    type: authActions.SET_USER_AUTHENTICATED,
    payload,
})

export const setUserMobnum = (payload) => ({
    type: authActions.SET_USER_MOB_NUM,
    payload,
})