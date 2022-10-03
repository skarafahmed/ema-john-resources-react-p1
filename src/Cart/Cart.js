import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    console.log(cart);
    //cart e shob product add hoy and array format e thakar karone, prottekta value [] pass kore dynamically access kore update dewa hoyeche ekhane.
    let price = 0;
    let shippingCharge = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        price = price + product.price * product.quantity;
        shippingCharge = shippingCharge + product.shipping;
    }
    let tax = parseFloat((price * 0.05).toFixed(2));

    const totalPrice = price + shippingCharge + tax;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Price: ${price}</p>
            <p>Shipping Charge:: ${shippingCharge}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${totalPrice}</h3>
        </div>
    );
};

export default Cart;