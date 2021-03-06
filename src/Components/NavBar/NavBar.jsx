/* eslint-disable react/prop-types */
/* eslint-disable import/order */
import React, { Component } from 'react';
import MyBasket from '../MyBasket/MyBasket';
import './NavBar.css';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
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
            <MyBasket itemInCart={this.props.itemInCart} />
          </Link>
        </div>
      </div>
    );
  }
}
