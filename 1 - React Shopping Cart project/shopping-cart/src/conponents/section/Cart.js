import React, { Component } from 'react';
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
import Colors from "./Colors";
import "../css/Details.css";
import "../css/Cart.css";


class Cart extends Component {
    static contextType = DataContext;

    componentDidMount() {
        this.context.addAllTotalCost();
    }

    render() {
        const { cart, increase, decrease, removeItem, total } = this.context;

        // checking if the cart is empty
        if (cart.length === 0) {
           return <h2 style={{textAlign: "center"}}>Cart is empty</h2>
        } else {
            return (
                <>
                    {
                        cart.map(item => (
                            <div className="details cart-item" key={item._id}>
                                <img src={item.src} alt="" />
                                <div className="box">
                                    <div className="row">
                                      <h2>{item.title}</h2>
                                      <span>${item.price * item.count}</span>
                                    </div>
                                    
                                    <Colors colors={item.colors} />
    
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count"
                                          onClick={()=> increase(item._id)}
                                          >
                                            +
                                        </button>
                                            <span>{item.count}</span>
                                        <button className="count"
                                          onClick={()=> decrease(item._id)}
                                          >
                                            -
                                        </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={()=> removeItem(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                        <Link to="/payment">Payment</Link>
                    <h3>Total: ${ total }</h3>
                    </div>
                </>
            )
        }
    }
}


export default Cart;