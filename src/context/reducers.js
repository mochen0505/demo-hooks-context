import { GET_PRODUCT, ADD_PRODUCT } from './actions';

export const defaultState = {
    products: [],
    cart: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return getProducts(action.products, state)
        case ADD_PRODUCT:
            return addProductToCart(action.id, state);
        default:
            return state;
    }
};

const getProducts = (products, state) => {
    return {
        ...state,
        products: products
    };

}

const addProductToCart = (id, state) => {
    let updatedCart;
    updatedCart = [...state.cart];
    updatedCart.push(state.products.filter((item) => (item.id === id))[0]);

    return {
        ...state,
        cart: updatedCart
    };
};
