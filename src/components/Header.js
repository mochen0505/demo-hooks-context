import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                <div style={{marginRight: 50}}><NavLink to='/'>Products</NavLink></div>
                <div><NavLink to='/cart'>Cart</NavLink></div>
            </div>
        </React.Fragment>
    )
};

export default Header
