import React, { Component } from 'react';
import Products from "./section/Products";
import Details from "./section/Details";
import { Route } from "react-router";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Cart from "../conponents/section/Cart";
import LoginAndRegister from "./LoginAndRegister";
import Payment from "./section/Payment";


class Section extends Component {
    render() {
        return (
            <section>
                <Route exact path="/" component={Products} />
                <Route exact path="/product" component={Products} />
                <Route path="/product/:id" component={Details} />
                <Route path="/cart" component={Cart} />

                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/payment" component={Payment} />
                <Route path="/login-and-register" component={LoginAndRegister} />
            </section>
        )
    }
}


export default Section;