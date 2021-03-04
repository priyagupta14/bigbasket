import React, { Component } from "react";
import MyBasket from "../MyBasket/MyBasket";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div class="navbar">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          E-Shopper
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/allOrders"
        >
          All Orders
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/cart">
          <MyBasket itemInCart={this.props.itemInCart} />
        </Link>
      </div>
    );
  }
}
