import { changeModalVisibility } from "../redux/modals/modals.actions";

export const handleChangeModalVisibility = (value, modal, dispatch) => {
  dispatch(changeModalVisibility({ [modal]: value }));
};
