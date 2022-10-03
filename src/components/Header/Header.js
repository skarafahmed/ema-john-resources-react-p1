import logo from '../../images/Logo.svg'
import './Header.css'
import React from 'react';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='menu'>
                <a href="/order"> Order</a>
                <a href="/order-review"> Order Review</a>
                <a href="/inventory"> Manage Inventory</a>
                <a href="/login"> Login</a>
            </div>
        </nav>
    );
};

export default Header;