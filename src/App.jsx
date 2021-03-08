/* eslint-disable no-unused-vars */
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import banana from './assets/images/banana.jpg';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Cart from './Components/Cart/Cart';
import AllOrders from './Components/AllOrders/AllOrders';
import Checkout from './Components/Checkout/Checkout';
// import HookCounter from './Components/HookCounter/HookCounter';

export default function App() {
  const [AllProduct, setProduct] = useState([
    {
      id: 1,
      name: 'banana',
      url: banana,
      count: 0,
      price: 50,
      // category: 'fruits',
    },
    {
      id: 2,
      name: 'apple',
      url:
        'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1',
      count: 0,
      price: 30,
      // category: 'diary',
    },
    {
      id: 3,
      name: 'apple',
      url:
                  'https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432664914-strawberry-facts1.jpg',
      count: 0,
      price: 30,
    },
  ]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [pastOrder, setPastOrder] = useState([
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
  ]);
  const onDecrement = (id) => {
    const newProduct = AllProduct.map((product) => (product.id === id ? {
      ...product,
      count: product.count - 1,
    } : product));
    setProduct(newProduct);
    // const newCount = newProduct.find(
    //   (product) => ((product.id === id && product.count > 0) ? cartCount + 1 : cartCount),
    // );
    setCartCount(cartCount - 1);
    const newCartItem = newProduct.filter((product) => product.count > 0);
    setCartItem(newCartItem);
  };
  const onIncrement = (id) => {
    const newProduct = AllProduct.map((product) => (product.id === id ? {
      ...product,
      count: product.count + 1,
    } : product));
    setProduct(newProduct);
    setCartCount(cartCount + 1);
    const newCartItem = newProduct.filter((product) => product.count > 0);
    setCartItem(newCartItem);
  };
  return (
    <div>
      <BrowserRouter>
        <NavBar itemInCart={cartCount} />
        <Switch>
          <Route path="/" exact>
            <Home
              productList={AllProduct}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </Route>
          <Route path="/cart">
            <Cart productList={cartItem} />
          </Route>
          <Route path="/allOrders">
            <AllOrders order={pastOrder} />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
