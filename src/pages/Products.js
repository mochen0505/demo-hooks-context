import React, {useContext} from 'react';
import Header from '../components/Header';
import Table from 'antd/es/table';
import Button from 'antd/es/button';
import ShopContext from '../context/shop-context';

const Products = props => {
    const context = useContext(ShopContext);

    const handleClick = (id) => {
        context.addProductToCart(id)
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
                dataSource={context.products}
                rowKey='id'
            />
        </React.Fragment>
    )
};

export default Products

