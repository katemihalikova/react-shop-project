import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'


export default function TopBar() {

  return (
    <div className="top-bar">
      <Link to='/'>
        <h1>My Store</h1>
        </Link>
        <Link to='/cart'>
      <div className="button fancy-button"> <ShoppingCartIcon color="secondary"> </ShoppingCartIcon>Checkout</div>
      </Link>
    </div>
   
  )
}


     