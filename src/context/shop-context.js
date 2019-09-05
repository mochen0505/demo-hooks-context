import React from 'react';

// equal to initial state in reducer
export default React.createContext({
    products: [
        {
            id: 1,
            name: 'Just Dance',
            price: '39.99'
        },
        {
            id: 2,
            name: 'Zelda',
            price: '59.99'
        },
        {
            id: 3,
            name: 'Pokemon',
            price: '49.99'
        },
        {
            id: 4,
            name: 'Mario',
            price: '59.99'
        },
    ],
    cart: [],
    addProductToCart: () => {}
});