import React, {useContext, useEffect} from 'react';
import Header from '../components/Header';
import Table from 'antd/es/table';
import Button from 'antd/es/button';
import { Context } from '../context/GlobalState';
import { GET_PRODUCT, ADD_PRODUCT } from "../context/actions";

const Products = props => {
    const AppContext = useContext(Context)
    const { dispatch } = AppContext

    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: GET_PRODUCT,
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
                ]
            })
        }, 500)
    }, [dispatch])

    const handleClick = (id) => {
        dispatch({
            type: ADD_PRODUCT,
            id: id,
        })
    };

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
                <Button type='primary' onClick={() => handleClick(rows.id)}>Add</Button>
            )
        },
    ];

    return (
        <React.Fragment>
            <Header/>
            <Table
                style={{margin: 50}}
                columns={columns}
                dataSource={AppContext.state.products}
                rowKey='id'
            />
        </React.Fragment>
    )
}

export default Products

