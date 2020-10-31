import React from 'react';
import TopBar from './NavBar';
import Products from './ProductList';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Product from './Product';
import Cart from './Cart'
import { CartProvider } from './CartContext';
import ShippingCosts from './ShippingCosts';


function App() {

  return (
    <CartProvider>
      <Router>
        <div className='App'>
          <TopBar/>
          <div class="container">
            <Route path='/' exact component={Products}/>
            <Route path='/product/:id' component={Product}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/shipping' component={ShippingCosts}/>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}



export default App;

