import React from 'react';
import './Cart.css';
import CartItem from './CartItem';
function Cart() {


    return (
        <div className = 'cart'>
            <div className="cart_left">
                <h2 className = 'cart_header'>shopping cart</h2>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>name</th>
                            <th>price</th>
                            <th>quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                       <CartItem />
                       <CartItem />
                       <CartItem />
                       <CartItem />
                    </tbody>
                </table>
            </div>
            <div className="right_cart">
                <div className="right_cart_wrapper">

                <h4>cart total</h4>
                <div className="cart_details">
                    <p>subtotal:</p>
                    <p>$140.00</p>
                </div>
                <div className="cart_details">
                    <p>delivery:</p>
                    <p>free</p>
                </div>
                <div className="cart_details">
                    <p>total:</p>
                    <p>$140.00</p>
                </div>
                <input type="submit" id='submit' />
            </div>
            </div>

        </div>
    )
}

export default Cart
