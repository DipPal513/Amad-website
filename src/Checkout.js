import React from 'react'
import './Checkout.css'

function Checkout() {
    return (
        <>
            <div className="checkout_all">
                <div className="checkout">
                    <h1 className='header'>Checkout</h1>
                    <form action="" className='checkout_form'>
                        <div className="form_single">
                            <input type="text" placeholder='First Name' />
                            <input type="text" placeholder='Last Name' />
                        </div>
                        <div className="form_single">
                            <input type="text" placeholder='Company Name' />
                        </div>
                        <div className="form_single">
                            <input type="email" placeholder='email' />
                        </div>
                        <div className="form_single">
                            <select name="" id="country">
                                <option value="">united states</option>
                                <option value="">bangladesh</option>
                                <option value="">france</option>
                                <option value="">germany</option>
                                <option value="">india</option>
                                <option value="">australia</option>
                                <option value="">brazil</option>
                                <option value="">canada</option>



                            </select>
                        </div>
                        <div className="form_single">
                            <input type="text" placeholder='adress' />
                        </div>
                        <div className="form_single">
                            <input type="text" placeholder='town' />
                        </div>
                        <div className="form_single">
                            <input type="text" placeholder='zip code' />
                            <input type="number" placeholder='phone number' />
                        </div>
                        <div className="form_single">
                            <textarea name="" id="comment" cols="30" rows="10" placeholder='Leave a comment about your order'></textarea>
                        </div>
                        <label>
                            <input type="checkbox" />
                    create a account
                  </label>
                        <label>
                            <input type="checkbox" />
                    ship to different adress
                  </label>
                    </form>
                </div>   
                <div className="cart_total">

                    <h3>cart total</h3>
                    <div className="cart_single">
                        <p>subtotal:</p>
                        <p>$140.00</p>
                    </div>
                    <div className="cart_single">
                        <p>delivary:</p>
                        <p>free</p>
                    </div>
                    <div className="cart_single">
                        <p>total:</p>
                        <p>$140.00</p>
                    </div>
                    <div className="cart_bottom">
                        <label>
                            <input type="checkbox" />
                      cash on delivary
                  </label>
                        <label>
                            <input type="checkbox" />
                      paypal
                  </label>
                      
                    </div>
                    <input type="submit" id='checkout_submit' />
                </div>
            </div>
        </> 
    )
}

export default Checkout;
