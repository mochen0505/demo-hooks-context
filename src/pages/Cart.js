import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Table from 'antd/es/table';
import ShopContext from "../context/shop-context";

const Cart = props => {
    const context = useContext(ShopContext);

    useEffect(() => {
        console.log(context)
    }, []);

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
                dataSource={context.cart}
                rowKey='id'
            />
        </React.Fragment>
    )
}

export default Cart
