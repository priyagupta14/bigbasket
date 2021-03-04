import React, { Component } from "react";
import "./TableRow.css";
export default class TableRow extends Component {
  render() {
    return (
      <div>
        <table class="table-row" border="1">
          <tr>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.price}</td>
            <td>{this.props.item.count}</td>
            <td>{this.props.item.price * this.props.item.count}</td>
          </tr>
        </table>
      </div>
    );
  }
}
