import { message } from "antd";
import { ActionsTypes } from "../actions";

const initialState = {
  errorMsg: "",
  isFetchingUser: false,
  userInfo: [],
  name: "",
  surName: "",
  dni: "",
  date: "",
  street: "",
  number: "",
  province: "",
  localtion: "",
  cp: "",
  id: "",
  disabled: false,
  update: false
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionsTypes.USER_REQUEST:
      return {
        ...state,
        isFetchingUser: true,
        name: action.request.name,
        surName: action.request.surName,
        dni: action.request.dni,
        date: action.request.date,
        street: action.request.street,
        number: action.request.number,
        province: action.request.province,
        localtion: action.request.localtion,
        cp: action.request.cp,
        update: action.request.update,
        errorMsg: ""
      };
    case ActionsTypes.USER_SUCCESS:
      return {
        ...state,
        isFetchingUser: false,
        update: false,
        disabled: true,
        userInfo: action.request
      };
    case ActionsTypes.SET_NAME:
      return {
        ...state,
        name: action.request
      };
    case ActionsTypes.SET_SURNAME:
      return {
        ...state,
        surName: action.request
      };
    case ActionsTypes.SET_DNI:
      return {
        ...state,
        dni: action.request
      };
    case ActionsTypes.SET_DATE_BIRTH:
      return {
        ...state,
        date: action.request
      };
    case ActionsTypes.SET_STREET:
      return {
        ...state,
        street: action.request
      };
    case ActionsTypes.SET_NUMBER:
      return {
        ...state,
        number: action.request
      };
    case ActionsTypes.SET_PROVINCE:
      return {
        ...state,
        province: action.request
      };
    case ActionsTypes.SET_LOCATION:
      return {
        ...state,
        localtion: action.request
      };
    case ActionsTypes.SET_CP:
      return {
        ...state,
        cp: action.request
      };
    case ActionsTypes.SET_UPDATE:
      message.warning(action.request);
      return {
        ...state,
        update: state.update ? false : true,
        disabled: state.disabled ? false : true
      };
    case ActionsTypes.USER_ERROR:
      return message.error(action.request);
    case ActionsTypes.SET_EMAIL:
      return {
        ...state,
        email: action.request
      };
    case ActionsTypes.GET_USER_REQUEST:
      return {
        ...state,
        id: action.request
      };
    case ActionsTypes.GET_USER_SUCCESS:
      message.success("Ya guardaste tus datos");
      return {
        ...state,
        isFetchingUser: true,
        name: action.response.name,
        surName: action.response.surName,
        dni: action.response.dni,
        date: action.response.date,
        street: action.response.street,
        number: action.response.number,
        province: action.response.province,
        localtion: action.response.localtion,
        cp: action.response.cp,
        disabled: true,
        errorMsg: ""
      };

    case ActionsTypes.STATE_RESTART:
      return {
        ...state,
        update: false,
        disabled: false
      };
    case ActionsTypes.INITIAL_STATE_RESTART:
      return initialState;
    default:
      return state;
  }
}
