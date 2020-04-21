import { makeActionCreator } from '../../../utils/redux';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_TYPE_PASS_REGISTER = 'SET_TYPE_PASS_REGISTER';
export const SET_ICON_PASS_REGISTER = 'SET_ICON_PASS_REGISTER';
export const STATE_RESTART = 'STATE_RESTART';

const registerRequest = makeActionCreator(REGISTER_REQUEST,'request');
const registerSuccess = makeActionCreator(REGISTER_SUCCESS, 'response');
const registerError = makeActionCreator(REGISTER_ERROR, 'request');
const setUsername = makeActionCreator(SET_USER, 'request');
const signOut = makeActionCreator(SIGN_OUT);
const setPassword = makeActionCreator(SET_PASSWORD, 'request');
const setEmail = makeActionCreator(SET_EMAIL, 'request');
const setTypePassLogin = makeActionCreator(SET_TYPE_PASS_REGISTER, 'request');
const setIconPassLogin = makeActionCreator(SET_ICON_PASS_REGISTER, 'request');
const restartState = makeActionCreator(STATE_RESTART);

export const ActionsTypes = {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    SET_USER,
    SIGN_OUT,
    SET_PASSWORD,
    SET_TYPE_PASS_REGISTER,
    SET_ICON_PASS_REGISTER,
    SET_EMAIL,
    STATE_RESTART
};

export const Actions = {
    registerRequest,
    registerSuccess,
    registerError,
    setUsername,
    signOut,
    setPassword,
    setTypePassLogin,
    setIconPassLogin,
    setEmail,
    restartState
};

export const ActionsRegister = {
    restartState
};