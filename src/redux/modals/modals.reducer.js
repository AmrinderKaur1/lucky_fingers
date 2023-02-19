import * as modalActions from './modals.constants'

const modalInitialState = {
    isJoinGreenVisible: false,
    isJoinBlueVisible: false,
    isJoinRedVisible: false,
}

export default (state = modalInitialState, action) => {
    switch (action.type) {
        case modalActions.HANDLE_CHANGE_MODAL_VISIBILITY :
            return { ...state, ...action.payload }
        default:
            return state
    }
} 