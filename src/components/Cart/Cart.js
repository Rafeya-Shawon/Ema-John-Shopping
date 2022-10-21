import React from 'react';
import "./Cart.css"
const Cart = ({cart}) => {

    let total = 0;
    let shippingCharge = 0;
    for(const product of cart){
        total = total + product.price;
        shippingCharge = shippingCharge + product.shipping
    }
    const tax = total * 0.1;
    const grandTotal = total + shippingCharge + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shippingCharge}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;