/* eslint-disable react/prop-types */
/* eslint-disable import/order */
import React, { useContext } from 'react';
import MyBasket from '../MyBasket/MyBasket';
import './NavBar.css';
import { ThemeContext } from '../../ThemeContext';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme === 'light' ? 'light-navbar' : 'dark-navbar'}>
      <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
        <br />
        E-Shopper
      </Link>
      <div className="left-side-navbar">
        <Link
          style={{ textDecoration: 'none', color: 'white' }}
          to="/allOrders"
        >
          <br />
          All Orders
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/cart">
          <MyBasket itemInCart={props.itemInCart} />
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
