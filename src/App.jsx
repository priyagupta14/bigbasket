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
import AllOrders from './Components/AllOrders/AllOrder';
import Checkout from './Components/Checkout/Checkout';
import { ThemeContext } from './ThemeContext';
import groupByCategory from './Utils/GroupBy/groupByCategory';
import apiUtil from './Utils/api/api';
// import HookCounter from './Components/HookCounter/HookCounter';

const App = () => {
  // const [AllProduct, setProduct] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState({});
  const [theme, setTheme] = useState('light');
  const [categorized, setCategories] = useState({});

  const [error1, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pastOrder, setPastOrder] = useState([]);

  // const groupByCategory = (items) => items.reduce((acc, product) => {
  //   const { category } = product;
  //   if (!acc[category]) {
  //     acc[category] = [];
  //   }
  //   acc[category].push(product);
  //   return acc;
  // }, {});

  useEffect(async () => {
    let result = await apiUtil.getItems();
    const products = result;
    console.log({ mockresponse: products });
    if (products) setIsLoaded(true);
    else {
      setError(result.error);
      setIsLoaded(true);
    }
    const allProducts = products.map((eachProduct) => ({
      ...eachProduct,
      inCartCount: 0,
      url: banana,
    }));
    const categorizedProduct = groupByCategory(allProducts);
    setCategories(categorizedProduct);
    // setProduct(allProducts);

    result = await apiUtil.getOrders();
    const pastProducts = result;
    if (pastProducts) setIsLoaded(true);
    else {
      setError(result.error);
      setIsLoaded(true);
    }
    setPastOrder(pastProducts);
  }, []);

  const onDecrement = (id, category) => {
    const newProduct = categorized[category].map((product) => (product.id === id
      ? {
        ...product,
        count:
              product.inCartCount >= 0 && product.inCartCount > 0
                ? product.count + 1
                : product.count,
        inCartCount:
              product.inCartCount > 0
                ? product.inCartCount - 1
                : product.inCartCount,
      }
      : product));

    const newCount = categorized[category].find((product, index) => {
      if (product.id === id) {
        return product.count < newProduct[index].count;
      }
      return false;
    })
      ? cartCount - 1
      : cartCount;

    categorized[category] = newProduct;
    setCategories(categorized);
    // console.log(82, categorized);
    setCartCount(newCount);
    const newCartItem = categorized[category].filter(
      (product) => product.inCartCount > 0,
    );
    cartItem[category] = newCartItem;
    setCartItem(cartItem);
  };

  const onIncrement = (id, category) => {
    const newProduct = categorized[category].map((eachProduct) => (eachProduct.id === id
      ? {
        ...eachProduct,
        inCartCount:
              eachProduct.count > 0
                ? eachProduct.inCartCount + 1
                : eachProduct.inCartCount,
        count:
              eachProduct.count > 0 ? eachProduct.count - 1 : eachProduct.count,
      }
      : eachProduct));
    const newCount = categorized[category].find((product, index) => {
      if (product.id === id) return product.count > newProduct[index].count;
      return false;
    })
      ? cartCount + 1
      : cartCount;
    // const newCategory = {
    //   ...categorized,
    //   category: newProduct,
    // };
    // console.log('newCategory', newCategory);
    categorized[category] = newProduct;
    setCategories(categorized);
    setCartCount(newCount);
    const newCartItem = categorized[category].filter(
      (product) => product.inCartCount > 0,
    );
    cartItem[category] = newCartItem;
    setCartItem(cartItem);
  };

  const orderCart = async (items) => {
    const allOrders = await apiUtil.postOrders(items);
    if (!allOrders.error) {
      pastOrder.push(allOrders.data);
      console.log('pastorder with new', pastOrder);
      setPastOrder(pastOrder);
      setCartItem({});
      setCartCount(0);
    }
  };

  if (error1) {
    return <div>error1.message</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <NavBar data-testid="nav-bar" itemInCart={cartCount} />
      </ThemeContext.Provider>
      <button
        type="button"
        className="toggle-button"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <img src={setting} alt="setting" data-testid="settings" />
      </button>
      <Switch>
        <Route path="/" exact>
          <Home
            categorizedProduct={categorized}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        </Route>
        <Route path="/cart">
          <Cart productList={cartItem} cartCount={cartCount} />
        </Route>
        <Route path="/allOrders">
          <AllOrders order={pastOrder} />
        </Route>
        <Route path="/checkout">
          <Checkout productList={cartItem} orderCart={orderCart} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
