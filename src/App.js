import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Cart from "./Cart";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import Discount from "./Discount";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Product from "./Product";
import Productarea from "./Productarea";
import Shop from "./Shop";

export default function App() {
  return (
    <>

      <Router> 
        <main>
        <Navbar />
          <Switch >
            <Route exact path = '/'>
              <Shop />
            </Route>
            <Route path='/checkout'>
              <Checkout />
            </Route>
              <Route path ='/home'>
                <Shop />
              </Route>
            <Route path ='/cart'>
              <Cart />
            </Route>
            <Route path ='/preview'>
              <Product />
            </Route>
        
            <Route path='/'>
              <Productarea />
            </Route>

          </Switch>
        </main>
        <Discount />
        <Footer />
      </Router>
    </>
  );
}
