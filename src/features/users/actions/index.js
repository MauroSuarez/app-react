import { makeActionCreator } from "../../../utils/redux";

export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_ERROR = "USER_ERROR";
export const STATE_RESTART = "STATE_RESTART";
export const SET_NAME = "SET_NAME";
export const SET_SURNAME = "SET_SURNAME";
export const SET_DNI = "SET_DNI";
export const SET_DATE_BIRTH = "SET_DATE_BIRTH";
export const SET_STREET = "SET_STREET";
export const SET_NUMBER = "SET_NUMBER";
export const SET_PROVINCE = "SET_PROVINCE";
export const SET_LOCATION = "SET_LOCATION";
export const SET_CP = "SET_CP";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const SET_UPDATE = "SET_UPDATE";
export const INITIAL_STATE_RESTART = "INITIAL_STATE_RESTART";

const userRequest = makeActionCreator(USER_REQUEST, "request");
const userSuccess = makeActionCreator(USER_SUCCESS, "response");
const getUserRequest = makeActionCreator(GET_USER_REQUEST, "request");
const getUserSuccess = makeActionCreator(GET_USER_SUCCESS, "response");
const userError = makeActionCreator(USER_ERROR, "request");
const restartState = makeActionCreator(STATE_RESTART);
const userSetName = makeActionCreator(SET_NAME, "request");
const userSetSurName = makeActionCreator(SET_SURNAME, "request");
const userSetDni = makeActionCreator(SET_DNI, "request");
const userSetDate = makeActionCreator(SET_DATE_BIRTH, "request");
const userSetStreet = makeActionCreator(SET_STREET, "request");
const userSetNumer = makeActionCreator(SET_NUMBER, "request");
const userSetProvince = makeActionCreator(SET_PROVINCE, "request");
const userSetLocaltion = makeActionCreator(SET_LOCATION, "request");
const userSetCp = makeActionCreator(SET_CP, "request");
const userSetUpdate = makeActionCreator(SET_UPDATE, "request");
const userSetInitialStateRestart = makeActionCreator(INITIAL_STATE_RESTART);

export const ActionsTypes = {
  INITIAL_STATE_RESTART,
  USER_REQUEST,
  USER_SUCCESS,
  USER_ERROR,
  STATE_RESTART,
  SET_NAME,
  SET_SURNAME,
  SET_DNI,
  SET_DATE_BIRTH,
  SET_STREET,
  SET_NUMBER,
  SET_PROVINCE,
  SET_LOCATION,
  SET_CP,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  SET_UPDATE
};

export const Actions = {
  userSetInitialStateRestart,
  userRequest,
  userSuccess,
  userError,
  restartState,
  userSetName,
  userSetSurName,
  userSetDni,
  userSetDate,
  userSetStreet,
  userSetNumer,
  userSetProvince,
  userSetLocaltion,
  userSetCp,
  getUserRequest,
  getUserSuccess,
  userSetUpdate
};

export const ActionsUsers = {
  restartState,
  userSetInitialStateRestart
};
