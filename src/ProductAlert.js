import React from 'react'

const ProductAlert = (props) => {

    let product = props.product;

    if (product.price > 700) {
      return(
        <p>
          <button onClick={props?.notify}>Notify Me</button>
        </p>
      );
    } else {
      return null;
    }

}

export default ProductAlert;