import { getDefaultPath } from "../../../utils/urlSync";
import { ActionsTypes } from "../actions";
import list from "../../../api/options";

const preKeys = getDefaultPath();

const initialState = {
  collapsed: true,
  openKeys: preKeys,
  current: preKeys,
  url: "",
  options: list,
  path: ""
};

export default function dashboardReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionsTypes.SET_COLLAPSED:
      return {
        ...state,
        collapsed: state.collapsed ? false : true
      };
    case ActionsTypes.CHANGE_OPEN_KEYS:
      return {
        ...state,
        openKeys: action.request
      };
    case ActionsTypes.CHANGE_CURRENT:
      return {
        ...state,
        current: action.request
      };
    case ActionsTypes.CLEAR_MENU:
      return {
        ...state,
        openKeys: [],
        current: []
      };
    case ActionsTypes.SET_URL:
      return {
        ...state,
        url: action.request
      };
    case ActionsTypes.SET_PATH:
      return {
        ...state,
        path: action.request
      };
    case ActionsTypes.HOME_REQUEST:
      return {
        ...state,
        options: list
      };
    default:
      return state;
  }
}
