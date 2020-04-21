import { message } from "antd";
import { ActionsTypes } from "../actions";

const initialState = {
  errorMsg: "",
  isFetchingCar: false,
  carInfo: [],
  brand: "Selecione",
  year: "",
  model: "Selecione",
  version: "",
  gnc: "",
  id: "",
  disabled: false,
  update: false,
  brands: [],
  models: [],
  disabledModel: true
};

export default function carReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionsTypes.CAR_REQUEST:
      return {
        ...state,
        isFetchingCar: true,
        errorMsg: ""
      };
    case ActionsTypes.CAR_SUCCESS:
      return {
        ...state,
        isFetchingCar: false,
        update: false,
        disabled: true,
        disabledModel: true,
        carInfo: action.response
      };
    case ActionsTypes.SET_BRAND:
      return {
        ...state,
        disabledModel: false,
        brand: action.request,
        models: state.brands.find(e => e.brand === action.request).models,
        model: state.brands.find(e => e.brand === action.request).models[0]
      };
    case ActionsTypes.SET_YEAR:
      return {
        ...state,
        year: action.request
      };
    case ActionsTypes.SET_MODEL:
      return {
        ...state,
        model: action.request
      };
    case ActionsTypes.SET_VERSION:
      return {
        ...state,
        version: action.request
      };
    case ActionsTypes.SET_GNC:
      return {
        ...state,
        gnc: action.request
      };
    case ActionsTypes.SET_UPDATE:
      message.warning(action.request);
      return {
        ...state,
        update: state.update ? false : true,
        disabled: state.disabled ? false : true
      };
    case ActionsTypes.CAR_ERROR:
      return message.error(action.request);
    case ActionsTypes.SET_EMAIL:
      return {
        ...state,
        email: action.request
      };
    case ActionsTypes.GET_CAR_REQUEST:
      return {
        ...state,
        id: action.request
      };
    case ActionsTypes.GET_CAR_SUCCESS:
      message.success("Ya tenemos los datos de tu vehiculo");
      return {
        ...state,
        isFetchingCar: true,
        brand: action.response.brand,
        year: action.response.year,
        model: action.response.model,
        version: action.response.version,
        gnc: action.response.gnc,
        disabled: true,
        disabledModel: true,
        errorMsg: ""
      };
    case ActionsTypes.GET_BRAND_SUCCESS:
      return {
        ...state,
        brands: action.response
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
