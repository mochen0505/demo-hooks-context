import React, { Component } from "react";
import ShopContext from './shop-context';

export default class GlobalState extends Component {
    state = {
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

    addProductToCart = id => {
        let updatedCart;
        updatedCart = [...this.state.cart];
        updatedCart.push(this.state.products.filter((item) => (item.id === id))[0]);
        setTimeout(() => {
            this.setState({
                cart: updatedCart
            })
        }, 500);
    };

    render() {
        return (
            <ShopContext.Provider
                value={{
                    products: this.state.products,
                    cart: this.state.cart,
                    addProductToCart: this.addProductToCart
                }}
            >
                {this.props.children}
            </ShopContext.Provider>
        );
    }
}