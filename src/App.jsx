import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Cart from './Components/Cart/Cart';
import AllOrders from './Components/AllOrders/AllOrders';
import Checkout from './Components/Checkout/Checkout';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: 'banana',
          url:
            'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg',
          count: 0,
          price: 50,
        },
        {
          id: 2,
          name: 'apple',
          url:
            'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1',
          count: 0,
          price: 30,
        },
        {
          id: 3,
          name: 'apple',
          url:
            'https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432664914-strawberry-facts1.jpg',
          count: 0,
          price: 30,
        },
      ],
      cartCount: 0,
      cartItems: [],
      pastOrder: [
        {
          orderId: 1,
          noOfItems: 3,
          date: 'Sun 04 Mar 2018',
          amount: 120,
          items: [
            {
              id: 1,
              name: 'Banana',
              count: 0,
              quantity: 1,
              price: 40,
            },
            {
              id: 2,
              image: './assets/apple.png',
              name: 'Apple',
              count: 0,
              quantity: 1,
              price: 40,
            },
          ],
        },
        {
          orderId: 2,
          noOfItems: 2,
          date: 'Sun 03 Mar 2018',
          amount: 80,
          items: [
            {
              id: 1,
              image: './assets/banana.png',
              name: 'Banana',
              count: 0,
              quantity: 1,
              price: 40,
            },
          ],
        },
      ],
    };
  }

  onIncrement = (id) => {
    console.log('Incrementing', id);
    let newState = {
      ...this.state,
      cartCount: this.state.cartCount + 1,
      products: this.state.products.map((eachProduct) => {
        if (eachProduct.id === id) {
          return { ...eachProduct, count: eachProduct.count + 1 };
        }
        return eachProduct;
      }),
    };
    newState = {
      ...newState,
      cartItems: newState.products.filter(
        (eachProduct) => eachProduct.count > 0,
      ),
    };

    this.setState(newState, () => console.log(45, this.state));
  };

  onDecrement = (id) => {
    console.log('Decrementing', id);
    const newState = {
      ...this.state,
      cartCount: (this.state.products.find((eachProduct) => {
        if (eachProduct.id === id) return eachProduct.count > 0;
        return false;
      })) ? this.state.cartCount - 1 : this.state.cartCount,
      products: this.state.products.map((eachProduct) => {
        if (eachProduct.id === id && eachProduct.count > 0) {
          return { ...eachProduct, count: eachProduct.count - 1 };
        }
        return eachProduct;
      }),
    };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar itemInCart={this.state.cartCount} />
          <Switch>
            <Route path="/" exact>
              <Home
                productList={this.state.products}
                onIncrement={this.onIncrement}
                onDecrement={this.onDecrement}
              />
            </Route>
            <Route path="/cart">
              <Cart productList={this.state.cartItems} />
            </Route>
            <Route path="/allOrders">
              <AllOrders order={this.state.pastOrder} />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
