import React, { Component } from 'react';
import Header from '../components/Header';
import Table from 'antd/es/table';
import ShopContext from "../context/shop-context";

class Cart extends Component {
    static contextType = ShopContext;

    render() {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Price',
                dataIndex: 'price',
                key: 'price',
            },
        ];

        return (
            <React.Fragment>
                <Header/>
                <Table
                    style={{margin: 50}}
                    columns={columns}
                    dataSource={this.context.cart}
                    rowKey='id'
                />
            </React.Fragment>
        )
    }
}

export default Cart