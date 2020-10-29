import React from 'react'
import Product from './Product'

const Products = (props) => {

    const products = [
    { id: 1, name: 'Phone XL', price: '799', description: 'A large phone with one of the best screens' },
    { id: 2, name: 'iPhone Mini', price: '788', description: 'A great phone with one of the best cameras' },
    { id: 3 , name: 'iPhone Standard', price: '799', description: 'A great phone with one of the best displays' }
   ];


   return(
    <div className='App'>
      
      <h2>Products</h2>
      <h2 > {products.map((product) =>( 
      <Product id={product.id} name={product.name} price={product.price} description={product.description}/>))}</h2>
      
    </div>
  );
}
export default Products;


