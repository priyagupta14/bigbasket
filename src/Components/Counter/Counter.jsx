import React, { Component } from "react";
import "./Counter.css";

export default function Counter(props) {
  return (
    <div class="product-counter">
      <button onClick={props.onIncrement}>+</button>
      <p>{props.itemCount} in basket</p>
      <button onClick={props.onDecrement}>-</button>
    </div>
  );
}
