import React from 'react'
import './Shop.css'
import Shoppingcard from './Shoppingcard';

import one from './images/1.jpg';
import two from './images/2.jpg';
import three from './images/3.jpg';
import four from './images/4.jpg';
import five from './images/5.jpg';
import six from './images/6.jpg';
import seven from './images/7.jpg';
import eight from './images/8.jpg';

function Shop() {
    return (
        <div className = 'shopping'>
            <div className="shop_sidebar">
                <div className="catagories">

                <h4 className="c_header">catagories</h4>
                <ul>
                    <li>Chair</li>
                    <li>beds</li>
                    <li>accesories</li>
                    <li>furniture</li>
                    <li>home deco</li>
                    <li>dressings</li>
                    <li>tables</li>
                </ul>
             </div>
                <div className="brands">
                    <h4>Brands</h4>
                    <ul>
                        <li className = 'form_check'>
                            <input type="checkbox" className = 'form_check_input' id = 'amado'/>
                            <label className = 'form_check_label' htmlFor = 'amado'>amado</label>
                        </li>
                        <li className = 'form_check'>
                            <input type="checkbox" className = 'form_check_input' id = 'ikea'/>
                            <label className = 'form_check_label' htmlFor = 'ikea'>ikea</label>
                        </li>
                        <li className = 'form_check'>
                            <input type="checkbox" className = 'form_check_input' id = 'furniture'/>
                            <label className = 'form_check_label' htmlFor = 'furniture'>furniture inc</label>
                        </li>
                        <li className = 'form_check'>
                            <input type="checkbox" className = 'form_check_input' id = 'factory'/>
                            <label className = 'form_check_label' htmlFor = 'factory'>the factory</label>
                        </li>
                        <li className = 'form_check'>
                            <input type="checkbox" className = 'form_check_input' id = 'artdeco'/>
                            <label className = 'form_check_label' htmlFor = 'artdeco'>artdeco</label>
                        </li>
                    </ul>
                </div>
                <div className="color">
                    <h4>color</h4>
                    <ul className="all_colors">
                        <li className = 'white'></li>
                        <li className = 'gray'></li>
                        <li className = 'black'></li>
                        <li className = 'blue'></li>
                        <li className = 'red'></li>
                        <li className = 'yellow'></li>
                        <li className = 'orange'></li>
                        <li className = 'lightgray'></li>
                    </ul>
                </div>
                <div className="price">
                    <h4>price</h4>
                    <input type="range" name="" id="" />
                </div>
            </div>

            <div className="shopSection">
                <div className="shop_header">
                    <div className="left_header">
                        <p>showing 1-8 of 25</p>
                        <div className="icons">
                        <i className="fa fa-th" aria-hidden="true"></i>
                            <i className = 'fa fa-bars'></i>
                        </div></div>
                        <div className="right_header">
                            <div className="sort_by">
                                <p>sort by</p>
                                <select name="select" id="sortByDate">
                                    <option value="">Date</option>
                                    <option value="">Newest</option>
                                    <option value="">popular</option>

                                </select>
                            </div>
                            <div className="view">
                                <p>view</p>
                                <select name="select" id="view">
                                    <option value="">12</option>
                                    <option value="">24</option>
                                    <option value="">48</option>
                                    <option value="">96</option>

                                </select>
                            </div>
                        
                    </div>


                </div>
                <div className="all_shopping_card">
                    <Shoppingcard 
                    image = {one}
                    />
                    <Shoppingcard 
                    image = {two}
                    />
                    <Shoppingcard 
                    image = {three}
                    />
                    <Shoppingcard 
                    image = {four}
                    />
                   <Shoppingcard 
                    image = {five}
                    />
                     <Shoppingcard 
                    image = {six}
                    />
                      <Shoppingcard 
                    image = {seven}
                    />
                      <Shoppingcard 
                    image = {eight}
                    />
                </div>
            </div>
        
            
        </div>
    )
}


export default Shop
