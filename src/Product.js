import React, { useState } from 'react';
import './Product.css';
import one from './images/1.jpg';

function Product() {
    const[num,setNum] = useState(0)

    function upNum(){
        setNum(num + 1)
    }
    function downNum(){
        setNum(num - 1)

    }
    return (
        <div className = 'product'>
            <div className="product_left">
                <img src={one} alt="" />
            </div>
            <div className="product_right">
                <div className="product_price_line_top">
                    <div className="line"></div>
                    <p>$180.00</p>
                    </div>
                    <h2>white modern chair</h2>
                    
                    <div className="review">
                        <div className="stars">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <p>write a review</p>
                    </div>
                    <div className="stock">
                        <div className="round"></div>
                       <p>in stock</p>
                    
                </div>
            <p className="product_details">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet <br/> culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit<br/> consequatur, autem, nostrum pariatur enim?
            </p>
           <div className="qty">
               <p>qty </p>
               <div className="number_qty">
                  {num}
               </div>
               <div className="updown">
                   <i className = 'fa fa-caret-up' onClick ={upNum}></i>
                   <i className = 'fa fa-caret-down'onClick ={downNum}></i>
               </div>
           </div>
           <button className="add_cart">add to cart</button>
            </div>
        </div>
    )
}

export default Product
