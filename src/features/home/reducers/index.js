
import { ActionsTypes } from '../actions';
import { futimes } from 'fs';

const initialState = {
  home: [],
  homeFilter: [],
  id: "",
  descripcion: "",
  precio: "",
  categoria: "",
  cantidad: "",
  visible: false,
  update: false,
  searchValue:""
};

export default function homeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionsTypes.PRODUCT_REQUEST:
      return {
        ...state,
      };
    case ActionsTypes.PRODUCT_RESPONSE:
      return {
        ...state,
        home: action.response,
        homeFilter: action.response,
      };
    case ActionsTypes.PRODUCT_ADD:
      return {
        ...state,
        descripcion: action.request.descripcion,
        precio: action.request.precio,
        categoria: action.request.categoria,
        cantidad: action.request.cantidad,
      };
    case ActionsTypes.PRODUCT_UPDATE:
      return {
        ...state,
        id: action.request.id,
        descripcion: action.request.descripcion,
        precio: action.request.precio,
        categoria: action.request.categoria,
        cantidad: action.request.cantidad,
      };
    case ActionsTypes.PRODUCT_DELETE:
      return {
        ...state,
      };
    case ActionsTypes.SET_VISIBLE:
      return {
        ...state,
        visible: action.request,
      };
    case ActionsTypes.SET_DESCRIPCION:
      return {
        ...state,
        descripcion: action.request,
      };
    case ActionsTypes.SET_PRECIO:
      return {
        ...state,
        precio: action.request,
      };
    case ActionsTypes.SET_CATEGORIA:
      return {
        ...state,
        categoria: action.request,
      };
    case ActionsTypes.SET_CANTIDAD:
      return {
        ...state,
        cantidad: action.request,
      };
    case ActionsTypes.SET_UPDATE:
      return {
        ...state,
        update: action.request,
      };
    case ActionsTypes.SET_ID:
      return {
        ...state,
        id: action.request,
      };
    case ActionsTypes.SET_FILTER:
      return {
        ...state,
        searchValue: action.request,
        homeFilter:action.request ? filterByValue(state.home,action.request) : state.home
      };
    case ActionsTypes.CLEAR_ALL:
      return {
        ...state,
        descripcion: "",
        precio: "",
        categoria: "",
        cantidad: "",
        id: ""
      };
    default:
      return state;
  }
}


function filterByValue(array, string) {
  return array.filter(o => {
    return Object.keys(o).some(k => {
      if (typeof o[k] === "string")
        return o[k].toLowerCase().includes(string.toLowerCase());
    });
  });
}