import React from 'react';
import './Footer.css';
import Logo2 from './images/logo2.png'


function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="left_footer">
                            <div className="logo2"><img src={Logo2} alt="" /></div>

                            <p>Copyright ©2021 All rights reserved | This template is made by Pritam Paul Dip</p>
                        </div>
                        <div className="right_footer">
                            <ul>
                                <li><a href='home'>home</a></li>
                                <li><a href='shop'>shop</a></li>
                                <li><a href='product'>product</a></li>
                                <li><a href='cart'>cart</a></li>
                                <li><a href='checkout'>checkout</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
