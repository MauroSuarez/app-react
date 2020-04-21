import { makeActionCreator } from '../../../utils/redux';

export const SET_COLLAPSED = 'SET_COLLAPSED';
export const CHANGE_OPEN_KEYS = 'CHANGE_OPEN_KEYS';
export const CHANGE_CURRENT = 'CHANGE_CURRENT';
export const CLEAR_MENU = 'CLEAR_MENU';
export const SET_URL = 'SET_URL';
export const HOME_REQUEST = 'HOME_REQUEST';
export const SET_PATH = 'SET_PATH';

const setCollapsed = makeActionCreator(SET_COLLAPSED);
const changeOpenKeys = makeActionCreator(CHANGE_OPEN_KEYS, 'request');
const changeCurrent = makeActionCreator(CHANGE_CURRENT, 'request');
const clearMenu = makeActionCreator(CLEAR_MENU);
const setUrl = makeActionCreator(SET_URL, 'request');
const dashboardRequest = makeActionCreator(HOME_REQUEST);
const setPath = makeActionCreator(SET_PATH, 'request');

export const ActionsTypes = {
    SET_COLLAPSED,
    CHANGE_OPEN_KEYS,
    CHANGE_CURRENT,
    CLEAR_MENU,
    SET_URL,
    HOME_REQUEST,
    SET_PATH
};

export const Actions = {
    setCollapsed,
    changeOpenKeys,
    changeCurrent,
    clearMenu,
    setUrl,
    dashboardRequest,
    setPath
};
