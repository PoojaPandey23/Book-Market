import './App.css';

import { Fragment, useState } from 'react';
import Books from './components/Books/Books';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import CartProvider from './store/CartProvider';

function App() {

  const [CartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {CartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <Books></Books>
    </CartProvider>
  );
}

export default App;
