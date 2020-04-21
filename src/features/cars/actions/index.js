import { makeActionCreator } from "../../../utils/redux";

export const CAR_REQUEST = "CAR_REQUEST";
export const CAR_SUCCESS = "CAR_SUCCESS";
export const CAR_ERROR = "CAR_ERROR";
export const STATE_RESTART = "STATE_RESTART";
export const SET_BRAND = "SET_BRAND";
export const SET_YEAR = "SET_YEAR";
export const SET_MODEL = "SET_MODEL";
export const SET_VERSION = "SET_VERSION";
export const SET_GNC = "SET_GNC";
export const GET_CAR_REQUEST = "GET_CAR_REQUEST";
export const GET_CAR_SUCCESS = "GET_CAR_SUCCESS";
export const SET_UPDATE = "SET_UPDATE";
export const INITIAL_STATE_RESTART = "INITIAL_STATE_RESTART";
export const GET_BRAND_REQUEST = "GET_BRAND_REQUEST";
export const GET_BRAND_SUCCESS = "GET_BRAND_SUCCESS";

const carRequest = makeActionCreator(CAR_REQUEST, "request");
const carSuccess = makeActionCreator(CAR_SUCCESS, "response");
const getCarRequest = makeActionCreator(GET_CAR_REQUEST, "request");
const getCarSuccess = makeActionCreator(GET_CAR_SUCCESS, "response");
const carError = makeActionCreator(CAR_ERROR, "request");
const restartState = makeActionCreator(STATE_RESTART);
const carSetBrand = makeActionCreator(SET_BRAND, "request");
const carSetYear = makeActionCreator(SET_YEAR, "request");
const carSetModel = makeActionCreator(SET_MODEL, "request");
const carSetVersion = makeActionCreator(SET_VERSION, "request");
const carSetGnc = makeActionCreator(SET_GNC, "request");
const carSetUpdate = makeActionCreator(SET_UPDATE, "request");
const getBrandRequest = makeActionCreator(GET_BRAND_REQUEST);
const getBrandSuccess = makeActionCreator(GET_BRAND_SUCCESS, "response");
const carSetInitialStateRestart = makeActionCreator(INITIAL_STATE_RESTART);

export const ActionsTypes = {
  INITIAL_STATE_RESTART,
  CAR_REQUEST,
  CAR_SUCCESS,
  CAR_ERROR,
  STATE_RESTART,
  SET_BRAND,
  SET_YEAR,
  SET_MODEL,
  SET_VERSION,
  SET_GNC,
  GET_CAR_REQUEST,
  GET_CAR_SUCCESS,
  SET_UPDATE,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS
};

export const Actions = {
  carSetInitialStateRestart,
  carRequest,
  carSuccess,
  carError,
  restartState,
  carSetBrand,
  carSetYear,
  carSetModel,
  carSetVersion,
  carSetGnc,
  getCarRequest,
  getCarSuccess,
  carSetUpdate,
  getBrandRequest,
  getBrandSuccess
};

export const ActionsCars = {
  restartState,
  carSetInitialStateRestart
};
