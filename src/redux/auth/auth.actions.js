import * as authActions from './auth.constants'

export const setUserAuthenticated = (payload) => ({
    type: authActions.SET_USER_AUTHENTICATED,
    payload,
})

export const setUserEmail = (payload) => ({
    type: authActions.SET_USER_EMAIL,
    payload,
})

export const setUserContactNum = (payload) => ({
    type: authActions.SET_USER_CONTACT_NUM,
    payload,
})

export const setActiveFooter = (payload) => ({
    type: authActions.SET_ACTIVE_FOOTER,
    payload,
})
