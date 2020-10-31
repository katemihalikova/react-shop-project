import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import products from './products';

const Product = (props) => {

    let id = props.match.params.id;
    let product = products[id];

    const {cart, setCart} = useContext(CartContext);

    let addToCart = () => {
        setCart([...cart, product]);
        window.alert('Your product has been added to the cart!');
    }

return(
    <div>
        <h2>Product Details</h2>

        <h3>{ product.name }</h3>
        <h4>${ product.price.toFixed(2) }</h4>
        <p>{ product.description }</p>

        <button onClick={addToCart}>Buy</button>
    </div>
);
    }

export default Product;