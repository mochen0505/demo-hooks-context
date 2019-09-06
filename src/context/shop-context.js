import React from 'react';

// equal to initial state in reducer
export default React.createContext({
    products: [],
    cart: [],
    addProductToCart: () => {}
});
