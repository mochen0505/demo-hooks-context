import React, { Component } from 'react';
import Header from '../components/Header';
import Table from 'antd/es/table';
import Button from 'antd/es/button';
import ShopContext from '../context/shop-context';

class Products extends Component {
    static contextType = ShopContext;

    handleClick = (id) => {
        this.context.addProductToCart(id)
    };

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
            {
                title: 'Operation',
                dataIndex: 'operation',
                key: 'operation',
                render: (text, rows) => (
                    <Button type='primary' onClick={() => this.handleClick(rows.id)}>Add</Button>
                )
            },
        ];

        return (
            <ShopContext.Consumer>
                {context => (
                    <React.Fragment>
                        <Header/>
                        <Table
                            style={{margin: 50}}
                            columns={columns}
                            dataSource={context.products}
                            rowKey='id'
                        />
                    </React.Fragment>
                )}
            </ShopContext.Consumer>
        )
    }
}

export default Products

