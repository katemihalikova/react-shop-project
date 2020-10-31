import React from 'react'

const ShippingCosts = () => {

  let shippingCosts = [
    {
      "type": "Overnight",
      "price": 25.99
    },
    {
      "type": "2-Day",
      "price": 9.99
    },
    {
      "type": "Postal",
      "price": 2.99
    }
  ];

  return (
    <div>
      <h3>Shipping Prices</h3>

      {shippingCosts?.map(shipping => (
        <div className="shipping-item">
          <span>{ shipping.type }</span>
          <span>${ shipping.price.toFixed(2) }</span>
        </div>
      ))}
    </div>
  );

}

export default ShippingCosts;