import React, { Component } from "react";
import MyBasket from "../MyBasket/MyBasket";
import "./NavBar.css";
export default class NavBar extends Component {
  render() {
    return (
      <div class="navbar">
        <h1>E-Shopper</h1>
        <MyBasket itemInCart={this.props.itemInCart} />
      </div>
    );
  }
}
