import { makeActionCreator } from "../../../utils/redux";

export const LICENSE_REQUEST = "LICENSE_REQUEST";
export const LICENSE_SUCCESS = "LICENSE_SUCCESS";
export const GET_LICENSE_REQUEST = "GET_LICENSE_REQUEST";
export const GET_LICENSE_SUCCESS = "GET_LICENSE_SUCCESS";
export const LICENSE_ERROR = "LICENSE_ERROR";
export const STATE_RESTART = "STATE_RESTART";
export const SET_BRAND = "SET_BRAND";
export const INITIAL_STATE_RESTART = "INITIAL_STATE_RESTART";
export const SET_UPDATE = "SET_UPDATE";

const licenseRequest = makeActionCreator(LICENSE_REQUEST, "request");
const licenseSuccess = makeActionCreator(LICENSE_SUCCESS, "response");
const getCarRequest = makeActionCreator(GET_LICENSE_REQUEST, "request");
const getCarSuccess = makeActionCreator(GET_LICENSE_SUCCESS, "response");
const licenseError = makeActionCreator(LICENSE_ERROR, "request");
const restartState = makeActionCreator(STATE_RESTART);
const licenseSetBrand = makeActionCreator(SET_BRAND, "request");
const licenseSetUpdate = makeActionCreator(SET_UPDATE, "request");
const licenseSetInitialStateRestart = makeActionCreator(INITIAL_STATE_RESTART);

export const ActionsTypes = {
  INITIAL_STATE_RESTART,
  LICENSE_REQUEST,
  LICENSE_SUCCESS,
  LICENSE_ERROR,
  STATE_RESTART,
  SET_BRAND,
  GET_LICENSE_SUCCESS,
  GET_LICENSE_REQUEST,
  SET_UPDATE
};

export const Actions = {
  licenseSetInitialStateRestart,
  licenseRequest,
  licenseSuccess,
  licenseError,
  restartState,
  licenseSetBrand,
  getCarRequest,
  getCarSuccess,
  licenseSetUpdate
};

export const ActionsLicense = {
  restartState,
  licenseSetInitialStateRestart
};
