import React from 'react';
import './Discount.css'

function Discount() {
    return (
        <>
        <div className="discount">
            <div className="container">
                <div className="discount_grid">
                <div className="discount_left">
                    <h1>subscribe for a <span>25% Discount</span></h1>
                    <p>Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.</p>
                </div>
                <div className="discount_right">
                    <div className="single_input">

                        <input type="email" placeholder='Your E-mail' />
                        <a href="subscirbe">subscribe</a>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Discount
