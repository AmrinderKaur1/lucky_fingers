import * as modalActions from "./modals.constants";

export const changeModalVisibility = (payload) => ({
  type: modalActions.HANDLE_CHANGE_MODAL_VISIBILITY,
  payload,
});
