import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
    

return(
    <div >
        <Link to='/product:id'>
        <h2>{props.name}</h2>
        </Link>
        <p>Description:{props.description} </p>
        <button>Share</button>
        <button>Notify me</button>
    </div>
);
    }

export default Product;