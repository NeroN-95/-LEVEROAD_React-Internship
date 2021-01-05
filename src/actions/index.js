export const GET_PRODUCTS_START = "GET_PRODUCTS_START";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS"
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";
export const EDITOR_PRODUCT = "EDITOR_PRODUCT";

export const getProducts = (payload) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload
});

export const getIdProduct = (id, product) => ({
    type: EDITOR_PRODUCT,
    id,
    product
});

export const editProductSave = (id, product) => ({
    type: EDITOR_PRODUCT,
    payload: {
        id,
        product
    }
});

