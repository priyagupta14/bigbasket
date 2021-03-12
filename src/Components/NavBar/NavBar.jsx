import React, { useContext } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';

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
          <p>
            {`My Cart 
            ${props.itemInCart}`}
          </p>
          {/* <MyBasket itemInCart={props.itemInCart} /> */}
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
NavBar.propTypes = {
  itemInCart: PropTypes.number.isRequired,
};
