import React from 'react';
import logo from './logo.svg';
import LoginStatus from './LoginStatus';
import ShopCart from './ShopCart';
import ExampleMobx from './ExampleMobx/index';
import ExampleDeBounce from './ExampleDeBounce/index'
import exampleBase from './exampleBase/index'
import WithLogin from './WithLogin';
import './App.css';

// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart);
function App() {
  return (
    <>
      <LoginStatus />
      <ShopCart />
      {/* <WithLoginStatus />
      <WithShopCart a="1" b="2"/> */}
      <ExampleMobx />
      <ExampleDeBounce />
    </>
  )
}

export default App;
