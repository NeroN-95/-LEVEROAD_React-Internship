import * as actions from '../actions/';

const initialState = {
    isLoading: true,
    products: []
};

const findProduct = (state, id, editProduct) => {
    const findObject = state[id];
    console.log('-- findObject --', findObject);
    console.log('-- editProduct --', editProduct);
}

const shop = (state = initialState, action) => {
    const {payload} = action;
    switch (action.type) {
        case actions.GET_PRODUCTS_START:
            return {
                ...state,
                products: payload,
                isLoading: true,
            }

        case actions.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: payload,
                isLoading: false,
            }

        case actions.GET_PRODUCTS_ERROR:
            return {
                ...state,
                products: payload,
                isLoading: false,
            }
        case actions.EDITOR_PRODUCT: findProduct({...state.products}, payload.id, payload.product)

        default:
            return state
    }
}

export default shop;
