import { message } from 'antd';
import { ActionsTypes } from '../actions';

const initialState = {
  username: "",
  password: "",
  errorMsg: "",
  isFetchingLogin: false,
  isLoggedIn: false,
  userInfo: [],
  typePassLogin: "password",
  iconPassLogin: "eye-slash",
  flatLogin: true,
  getFieldDecorator: ""
};

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionsTypes.LOGIN_REQUEST:
      return {
        ...state,
        isFetchingLogin: true,
        username: action.request.username,
        password: action.request.pass,
        errorMsg: ""
      };
    case ActionsTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isFetchingLogin: false,
        userInfo: action.response,
      };
    case ActionsTypes.LOGIN_ERROR:
      return message.error(action.request);
    case ActionsTypes.SET_USER:
      return {
        ...state,
        username: action.request
      };
    case ActionsTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.request,
        flatLogin: true,
        errorMsg: ""
      };
    case ActionsTypes.SET_TYPE_PASS_LOGIN:
      return {
        ...state,
        typePassLogin: action.request
      };
    case ActionsTypes.SET_ICON_PASS_LOGIN:
      return {
        ...state,
        iconPassLogin: action.request
      };
    case ActionsTypes.SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}