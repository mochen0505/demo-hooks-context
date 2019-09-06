import React, { useState, useReducer } from "react";
import ShopContext from './shop-context';

const GlobalState = props => {
    // current state, a function that allows us to update state
    const [products] = useState([
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
    ]);
    const [cart, setCart] = useState([

    ]);

    const addProductToCart = id => {
        let updatedCart;
        updatedCart = [...cart];
        updatedCart.push(products.filter((item) => (item.id === id))[0]);
        setTimeout(() => {
            setCart(updatedCart);
        }, 500);
    };

    return (
        <ShopContext.Provider
            value={{
                products: products,
                cart: cart,
                addProductToCart: addProductToCart
            }}
        >
            {props.children}
        </ShopContext.Provider>
    );
};

export default GlobalState
