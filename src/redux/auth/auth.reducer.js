import * as authActions from "./auth.constants";

export const authInitialState = {
  isAuthenticated: false,
  userEmail: "",
  userContactNum: "",
  activeFooter: "home",
  addresses: [],
};

export default (state = authInitialState, action) => {
  switch (action.type) {
    case authActions.SET_USER_AUTHENTICATED:
      return { ...state, isAuthenticated: action.payload };
    case authActions.SET_USER_EMAIL:
      return { ...state, userEmail: action.payload };
    case authActions.SET_USER_CONTACT_NUM:
      return { ...state, userContactNum: action.payload };
    case authActions.SET_ACTIVE_FOOTER:
      return { ...state, activeFooter: action.payload };
    case authActions.SET_ADDRESSES:
      return { ...state, addresses: action.payload };
    default:
      return state;
  }
};
