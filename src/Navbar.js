import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";
import "./Navbar.css";



function Navbar() {
  
  const [click, setClick] = useState();
function handleClick(){
  setClick(!click)
}
function navClose(){
  setClick(false)
}



// const navLinks = document.querySelectorAll('.nav_link');
// navLinks.forEach((link)=>{
//   // const[isActive,setActive] =useState('')
//   link.classList.remove('nav_link')
// })


  return (
    <>
    <div className="mobile_nav">
      <img src={Logo} alt="" />
      <i className = 'fa fa-bars' onClick = {handleClick}></i>
      
    </div>
      <div className={click ? "sideNav active":"sideNav"}>
        <div className="nav_close">
          <i className = 'fa fa-close' onClick ={navClose}></i>
        </div>
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </Link>

        <nav>
          <ul>
            <li>
              <a href="home" className="nav_link" to="/" onClick ={navClose}>
                home
              </a>
            </li>
            <li>
              <a href="shop" className="nav_link" to = 'shop' onClick ={navClose}>
                shop
              </a>
            </li>
            <li>
              <a href="product" to = 'product' className="nav_link" onClick ={navClose}>
                product
              </a>
            </li>
            <li>
              <a href="cart" to = '/cart' className="nav_link" onClick ={navClose}>
                cart
              </a>
            </li>
            <li>
              <a href="checkout" className="nav_link" to="/checkout" onClick ={navClose}>
                checkout
              </a>
            </li>
          </ul>
        </nav>
        <div className="nav_btn">
          <a href="#discount" className="discount">
            %discount%
          </a>
          <a href="#week" className="newWeek">
            new this week
          </a>
        </div>
        <div className="nav_fav">
          <a href="cart" to='/cart'>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>cart(0)
          </a>
          <a href="#fav">
            <i className="fa fa-star" aria-hidden="true"></i>favourite
          </a>
          <a href="search">
            <i className="fa fa-search" aria-hidden="true"></i>search
          </a>
        </div>
        <div className="nav_social">
          <a href="#github">
            <i className="fa fa-github"></i>
          </a>
          <a href="#instagram">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#facebok">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="#twitter">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
