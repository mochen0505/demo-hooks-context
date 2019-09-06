export const ADD_PRODUCT = 'ADD_PRODUCT';

const addProductToCart = (id, state) => {
    let updatedCart;
    updatedCart = [...state.cart];
    updatedCart.push(state.products.filter((item) => (item.id === id))[0]);
    return {
        ...state,
        cart: updatedCart
    }
};

export const shopReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(action.id, state);
        default:
            return state;
    }
};
