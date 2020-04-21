import { makeActionCreator } from '../../../utils/redux';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_TYPE_PASS_LOGIN = 'SET_TYPE_PASS_LOGIN';
export const SET_ICON_PASS_LOGIN = 'SET_ICON_PASS_LOGIN';

const loginRequest = makeActionCreator(LOGIN_REQUEST,'request');
const loginSuccess = makeActionCreator(LOGIN_SUCCESS, 'response');
const loginError = makeActionCreator(LOGIN_ERROR, 'request');
const setUsername = makeActionCreator(SET_USER, 'request');
const signOut = makeActionCreator(SIGN_OUT);
const setPassword = makeActionCreator(SET_PASSWORD, 'request');
const setTypePassLogin = makeActionCreator(SET_TYPE_PASS_LOGIN, 'request');
const setIconPassLogin = makeActionCreator(SET_ICON_PASS_LOGIN, 'request');

export const ActionsTypes = {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SET_USER,
    SIGN_OUT,
    SET_PASSWORD,
    SET_TYPE_PASS_LOGIN,
    SET_ICON_PASS_LOGIN,
};

export const Actions = {
    loginRequest,
    loginSuccess,
    loginError,
    setUsername,
    signOut,
    setPassword,
    setTypePassLogin,
    setIconPassLogin,
};
