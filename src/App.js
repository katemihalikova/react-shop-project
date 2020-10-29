import React from 'react';
import './App.css';
import TopBar from './NavBar';
import Products from './ProductList';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import Product from './Product';
import Cart from './Cart'


function App() {

  return (
    
      <Router>
        <div className='App'>
        <TopBar></TopBar>
        <Products></Products>
        <Route path='/' exact component={App}> </Route>
        <Route path='/list' component={Products}> </Route>
        <Route path='/product:id' component={Product}> </Route>
        <Route path='/cart' component={Cart}> </Route>
        </div>
      </Router>
    
  );
}



export default App;

