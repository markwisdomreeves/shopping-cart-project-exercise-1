
import React, { Component } from 'react';
import { productData } from "./data";


export const DataContext = React.createContext();


export class DataProvider extends Component {

    state = {
        products: productData,
        cart: [],
        total: 0
    };

    // Adding items to the cart. 
    addCartItem = (id) => {
        const { products, cart } = this.state;

        const check = cart.every(item => {
            return item._id !== id
        })
        // checking for duplicate items in the cart
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({
                cart: [...cart, ...data]
            })
        } else {
            alert("This product has already been added to the cart.");
        }
    };


    increase = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.addAllTotalCost();
    };

    decrease = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({cart: cart});
        this.addAllTotalCost();
    };

    removeItem = id => {
        if (window.confirm('Are you sure you want to remove this item.')) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
            }
        })
        this.setState({ cart: cart });
        this.addAllTotalCost();
        }
    };

    addAllTotalCost =() => {
        const { cart } = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        }, 0)
        this.setState({ total: res })
    };

    /* storing / saving the cart data to LocalStorage
        when the componentDidUpdate
    */
    componentDidUpdate() {
        localStorage.setItem('cartData', JSON.stringify(this.state.cart))
        localStorage.setItem('cartTotal', JSON.stringify(this.state.total))
    }

    /* Getting / Receiving the cart data from LocalStorage
        when the componentDidMount
    */
    componentDidMount() {
        const cartData = JSON.parse(localStorage.getItem('cartData'));
        if (cartData !== null) {
            this.setState({ cart: cartData });
        }
        const cartTotal = JSON.parse(localStorage.getItem('cartTotal'));
        if (cartTotal !== null) {
            this.setState({ total: cartTotal });
        }
    }


    render() {
        const { products , cart, total} = this.state;
        const { 
               addCartItem, 
               increase, 
               decrease, 
               removeItem,
               addAllTotalCost 
            } = this;

        return (
            <DataContext.Provider value={{
                products, 
                addCartItem, 
                cart, 
                increase,
                decrease,
                removeItem,
                total,
                addAllTotalCost
            }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
