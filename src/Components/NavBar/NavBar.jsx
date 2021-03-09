/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import MyBasket from '../MyBasket/MyBasket';

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
          <p>MyBasket</p>
          <MyBasket itemInCart={props.itemInCart} />
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
