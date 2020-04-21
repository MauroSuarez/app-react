import { message } from "antd";
import { ActionsTypes } from "../actions";

const initialState = {
  errorMsg: "",
  isFetchingLicense: false,
  licenseInfo: [],
  img: "",
  id: "",
  update: false
};

export default function licenseReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionsTypes.LICENSE_SUCCESS:
      return {
        ...state,
        isFetchingLicense: false,
        errorMsg: ""
      };
    case ActionsTypes.LICENSE_ERROR:
      return message.error(action.request);
    case ActionsTypes.SET_EMAIL:
      return {
        ...state,
        email: action.request
      };
    case ActionsTypes.GET_LICENSE_SUCCESS:
      message.success("Ya tenemos los datos de tu licencia");
      return {
        ...state,
        isFetchingLicense: true,
        errorMsg: ""
      };
    case ActionsTypes.SET_UPDATE:
      message.warning(action.request);
      return {
        ...state,
        update: state.update ? false : true,
        disabled: state.disabled ? false : true
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
