import React, { useState } from 'react';
import one from './images/1.jpg';
import two from './images/2.jpg';
import three from './images/3.jpg';
import four from './images/4.jpg';
import './Product.css';

function Product() {
    const[num,setNum] = useState(0)
    const [url,setUrl] = useState(one);
    function upNum(){
        setNum(num + 1)
    }
    function downNum(){
        setNum(num - 1)

    }
    function changeImg(e){
        
        setUrl(e.target.src)
       
    }
    return (
        <div className = 'product'>
            <div className="product_left">
                <img src={url} alt="" />
                <div className="subImage">
                    <img src={one} onClick = {changeImg} alt="" />
                    <img src={two} onClick = {changeImg} alt="" />
                    <img src={three} onClick = {changeImg} alt="" />
                    <img src={four} onClick = {changeImg} alt="" />
                </div>

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
