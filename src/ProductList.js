import React from 'react'
import { Link } from 'react-router-dom'
import ProductAlert from './ProductAlert';

import products from './products'

const Products = (props) => {

  let share = () => {
    window.alert('The product has been shared!');
  };

  let onNotify = () => {
    window.alert('You will be notified when the product goes on sale');
  };


   return(
    <div className='App'>
      
      <h2>Products</h2>
      {products.map((product, productId) =>( 

        <div>

          <h3>
            <Link to={`/product/${productId}`} title={"product.name + ' details'"}>
              {product.name}
            </Link>
          </h3>

          <p>
          Description: {product.description}
          </p>

          <button onClick={share}>
          Share
          </button>

          <ProductAlert product={product} notify={onNotify}/>

        </div>
      
      ))}
      
    </div>
  );
}
export default Products;


