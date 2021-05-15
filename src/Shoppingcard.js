import React from 'react';
import './Shoppincard.css'


function Shoppingcard({image}) {
    return (
        <>
            <div className="shoppingcard">
                <img src={image} alt="" />
                <div className="card_body">
                    <div className="left_body">
                        <div className="line"></div>
                        <h5>180</h5>
                        <p>mordern chair</p>
                    </div>
                    <div className="right_body">
                        <div className="stars">
                            <i className = 'fa fa-star'></i>
                            <i className = 'fa fa-star'></i>
                            <i className = 'fa fa-star'></i>
                            <i className = 'fa fa-star'></i>
                            <i className = 'fa fa-star'></i>
                        </div>
                        
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shoppingcard
