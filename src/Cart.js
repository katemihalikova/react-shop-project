import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { CartContext } from './CartContext';

export default function Cart() {

    const history = useHistory();
    const {cart, setCart} = useContext(CartContext);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    let onSubmit = () => {
        alert(`Your order of ${cart.length} item${cart.length === 1 ? '' : 's'} has been accepted and will be send to ${name}, ${address}.`);

        setCart([]);
        history.push('/');
    }
    
    return (
        <div>
            <h3>Cart</h3>

            <p>
                <Link to="/shipping">Shipping Prices</Link>
            </p>

            {cart.map(item => (
                <div className="cart-item">
                    <span>{ item.name }</span>
                    <span>${ item.price.toFixed(2) }</span>
                </div>
            ))}

            {cart.length > 0 ? (
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                    </div>
        
                    <div>
                        <label htmlFor="address">Address</label>
                        <input id="address" type="text" value={address} onChange={(event) => setAddress(event.target.value)}/>
                    </div>
        
                    <button className="button" type="submit">Purchase</button>
                </form>
            ) : (
                <div>No items in cart...</div>
            )}
        </div>
    )
}
