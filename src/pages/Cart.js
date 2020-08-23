import React, { useContext } from 'react';
import Header from '../components/Header';
import Table from 'antd/es/table';
import { Context } from '../context/GlobalState';

const Cart = props => {

    const AppContext = useContext(Context)

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
                    dataSource={AppContext.state.cart}
                    rowKey='id'
                />
            </React.Fragment>
        )
}

export default Cart