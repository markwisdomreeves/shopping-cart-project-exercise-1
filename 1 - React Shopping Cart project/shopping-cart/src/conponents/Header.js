
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./css/Header.css";
import { DataContext } from "./Context";


export default class Header extends Component{

    static contextType = DataContext;

    /* Responsive menu drop down code */
    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {

        const { toggle } = this.state;
        const { cart } = this.context;

        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <FontAwesomeIcon icon={faBars} size="2x" className="icon-style" />
                </div>
                <div className="logo">
                    <h2><Link to="/">Smart Shop</Link></h2>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login-and-register">Login / Register</Link></li>
                        <li className="close" onClick={this.menuToggle}>
                           <FontAwesomeIcon icon={faTimes} size="2x" className="icon-style" />
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                          <FontAwesomeIcon icon={faShoppingCart} size="2x" className="icon-style" />
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}
