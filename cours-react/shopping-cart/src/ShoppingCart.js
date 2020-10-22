import React, { Component } from 'react';
import CartItems from './CartItems';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        const products = [
            { id: 1, title: 'product 1', price: 10, image: 'https://picsum.photos/200' },
            { id: 2, title: 'product 3', price: 30, image: 'https://picsum.photos/200' },
            { id: 3, title: 'product 2', price: 45, image: 'https://picsum.photos/200' },
        ]
        const carts= [
            { product: products[0], qty: 2 },
            { product: products[1], qty: 3 },
            { product: products[2], qty: 5 },
        ]
        this.state = {
            products: products,
            carts: carts,
            total: this.updateTotal(carts)
        }
    }

    //Méthode pour modifier la qty d'un produit
    updateQty = (productId, qty) => {
        const tmpCarts = [...this.state.carts]
        const itemCart = tmpCarts.find(i => i.product.id == productId)
        if (itemCart != undefined) {
            itemCart.qty = qty
            this.setState({
                carts: [...tmpCarts],
                total: this.updateTotal(tmpCarts)
            })
        }
    }

    //Méthode pour supprimer un produit du panier
    deleteFromCart = (productId) => {
        const tmpCarts = this.state.carts.filter(i => i.product.id != productId)
        this.setState({
            carts: tmpCarts,
            total: this.updateTotal(tmpCarts)
        })
    }

    //Méthode pour calculer le total du panier
    updateTotal = (carts) => {
        let total = 0
        for (let item of carts) {
            total += item.product.price * item.qty
        }
        return total
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* ici on affichera les produits du panier */}
                    <CartItems updateQty={this.updateQty} deleteFromCart={this.deleteFromCart} carts={this.state.carts}></CartItems>
                    <div className="col-4">
                        Total : {this.state.total}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;