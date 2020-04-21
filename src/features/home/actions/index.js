import { makeActionCreator } from '../../../utils/redux';

export const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
export const PRODUCT_RESPONSE = 'PRODUCT_RESPONSE';
export const PRODUCT_ADD = 'PRODUCT_ADD';
export const PRODUCT_UPDATE = 'PRODUCT_UPDATE';
export const PRODUCT_DELETE = 'PRODUCT_DELETE';
export const SET_VISIBLE = 'SET_VISIBLE';
export const SET_DESCRIPCION = 'SET_DESCRIPCION';
export const SET_PRECIO = 'SET_PRECIO';
export const SET_CATEGORIA = 'SET_CATEGORIA';
export const SET_CANTIDAD = 'SET_CANTIDAD';
export const CLEAR_ALL = 'CLEAR_ALL';
export const SET_UPDATE = 'SET_UPDATE';
export const SET_ID = 'SET_ID';
export const SET_FILTER = 'SET_FILTER';

const setDescripcion = makeActionCreator(SET_DESCRIPCION, 'request');
const setPrecio = makeActionCreator(SET_PRECIO, 'request');
const setCategoria = makeActionCreator(SET_CATEGORIA, 'request');
const setCantidad = makeActionCreator(SET_CANTIDAD, 'request');
const productRequest = makeActionCreator(PRODUCT_REQUEST);
const productRespose = makeActionCreator(PRODUCT_RESPONSE,'response');
const productAdd = makeActionCreator(PRODUCT_ADD,'request');
const productDelete = makeActionCreator(PRODUCT_DELETE,'request');
const setVisible = makeActionCreator(SET_VISIBLE,'request');
const clearAll = makeActionCreator(CLEAR_ALL);
const productUpdate = makeActionCreator(PRODUCT_UPDATE,'request');
const setUpdate = makeActionCreator(SET_UPDATE,'request');
const setID = makeActionCreator(SET_ID,'request');
const setFilter = makeActionCreator(SET_FILTER,'request');


export const ActionsTypes = {
    PRODUCT_REQUEST,
    PRODUCT_RESPONSE,
    PRODUCT_ADD,
    PRODUCT_DELETE,
    SET_VISIBLE,
    SET_DESCRIPCION,
    SET_PRECIO,
    SET_CATEGORIA,
    SET_CANTIDAD,
    CLEAR_ALL,
    PRODUCT_UPDATE,
    SET_UPDATE,
    SET_ID,
    SET_FILTER
};

export const Actions = {
    productRequest,
    productRespose,
    productAdd,
    productDelete,
    setVisible,
    setDescripcion,
    setPrecio,
    setCategoria,
    setCantidad,
    clearAll,
    productUpdate,
    setUpdate,
    setID,
    setFilter
};
