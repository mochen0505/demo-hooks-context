import React, { useReducer } from "react";
import ShopContext from './shop-context';
import { shopReducer, ADD_PRODUCT } from "./reducers";

const GlobalState = props => {

    const initialState = {
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
        cart: []
    };

    const [state, dispatch] = useReducer(shopReducer, initialState);

    const addProductToCart = id => {
        setTimeout(() => {
            dispatch({
                type: ADD_PRODUCT,
                id: id
            })
        }, 500);
    };

    return (
        <ShopContext.Provider
            value={{
                products: state.products,
                cart: state.cart,
                addProductToCart: addProductToCart
            }}
        >
            {props.children}
        </ShopContext.Provider>
    );
};

export default GlobalState
