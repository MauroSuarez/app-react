import { message } from "antd";
import { ActionsTypes } from "../actions";

const initialState = {
  username: "",
  password: "",
  email: "",
  errorMsg: "",
  isFetchingRegister: false,
  isRegistedIn: false,
  userInfo: [],
  typePassRegister: "password",
  iconPassRegister: "eye-slash",
  flatRegister: true,
  getFieldDecorator: ""
};

export default function registerReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionsTypes.REGISTER_REQUEST:
      return {
        ...state,
        isFetchingRegister: true,
        username: action.request.username,
        password: action.request.pass,
        email: action.request.email,
        errorMsg: ""
      };
    case ActionsTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isRegistedIn: true,
        isFetchingRegister: false,
        userInfo: action.response
      };
    case ActionsTypes.REGISTER_ERROR:
      return message.warning(action.request);
    case ActionsTypes.SET_USER:
      return {
        ...state,
        username: action.request
      };
    case ActionsTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.request,
        flatRegister: true,
        errorMsg: ""
      };
    case ActionsTypes.SET_TYPE_PASS_REGISTER:
      return {
        ...state,
        typePassRegister: action.request
      };
    case ActionsTypes.SET_ICON_PASS_REGISTER:
      return {
        ...state,
        iconPassRegister: action.request
      };
    case ActionsTypes.SET_EMAIL:
      return {
        ...state,
        email: action.request
      };
    case ActionsTypes.STATE_RESTART:
      return {
        ...state,
        isRegistedIn: false,
      };
    case ActionsTypes.SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}
