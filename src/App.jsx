/* eslint-disable no-unused-vars */
import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import banana from './assets/images/banana.jpg';
import setting from './assets/images/setting.png';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Cart from './Components/Cart/Cart';
import AllOrders from './Components/AllOrders/AllOrders';
import Checkout from './Components/Checkout/Checkout';
import { ThemeContext } from './ThemeContext';
// import HookCounter from './Components/HookCounter/HookCounter';

export default function App() {
  const [AllProduct, setProduct] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [theme, setTheme] = useState('light');
  const [categorized, setCategories] = useState({});

  const [error1, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
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

  const groupByCategory = (items) => items.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  useEffect(async () => {
    const { data, error } = await axios.get('/items');
    const products = data.data;
    if (products) setIsLoaded(true);
    else { setError(error); setIsLoaded(true); }
    const allProducts = products.map((eachProduct) => ({
      ...eachProduct,
      inCartCount: 0,
      url: banana,
    }));
    const categorizedProduct = groupByCategory(allProducts);
    setCategories(categorizedProduct);
    setProduct(allProducts);
  }, []);

  const onDecrement = (id, category) => {
    const newProduct = categorized[category].map((product) => (product.id === id ? {
      ...product,
      inCartCount: product.inCartCount > 0 ? product.inCartCount - 1 : product.inCartCount,
      count: product.inCartCount > 0 ? product.count + 1 : product.count,
    } : product));
    categorized[category] = newProduct;
    setCategories(categorized);
    const newCount = (categorized[category].find(
      (product) => { if (product.id === id) return product.inCartCount > 0; return false; },
    )) ? cartCount - 1 : cartCount;
    setCartCount(newCount);
    const newCartItem = categorized[category].filter((product) => product.inCartCount > 0);
    setCartItem(newCartItem);
  };

  const onIncrement = (id, category) => {
    const newProduct = categorized[category].map((eachProduct) => (
      eachProduct.id === id ? {
        ...eachProduct,
        inCartCount: eachProduct.count > 0 ? eachProduct.inCartCount + 1 : eachProduct.inCartCount,
        count: eachProduct.count > 0 ? eachProduct.count - 1 : eachProduct.count,
      } : eachProduct
    ));
    categorized[category] = newProduct;
    setCategories(categorized);

    const newCount = (categorized[category].find(
      (product) => {
        if (product.id === id) return (product.count > 0 && product.inCartCount > 0); return false;
      },
    )) ? cartCount + 1 : cartCount;
    setCartCount(newCount);
    const newCartItem = categorized[category].filter((product) => product.inCartCount > 0);
    setCartItem(newCartItem);
  };

  if (error1) {
    return (
      <div>error1.message</div>
    );
  }
  if (!isLoaded) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div>
      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          <NavBar itemInCart={cartCount} />
        </ThemeContext.Provider>
        <button type="button" className="toggle-button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <img src={setting} alt="setting" />
        </button>
        <Switch>
          <Route path="/" exact>
            <Home
              categorizedProduct={categorized}
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
