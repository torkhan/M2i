import React, { Component } from 'react';
import CartItems from './CartItems';
import ListProducts from './ListProducts';
import "./ShoppingCart.css"

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        const products = [
            { id: 1, title: 'product 1', price: 10, image: 'https://picsum.photos/200' },
            { id: 2, title: 'product 3', price: 30, image: 'https://picsum.photos/200' },
            { id: 3, title: 'product 2', price: 45, image: 'https://picsum.photos/200' },
        ]

        this.state = {
            products: products,
            carts: [],
            total: 0
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
    recherche = (e) => {
       const tmprecherche = e.target.value 
       for(this.state.product of this.state.products){
        this.product.name.contains(tmprecherche) ? afficherRecherche = () =>{
            <div className="row">
                <div className="col-3">
                        <img src={this.state.product.image} />
                    </div>
                    <div className="col-3">
                        {this.state.product.title}
                    </div>
                    <div className="col-1">
                        {this.state.product.price} €
                    </div>
                    <input className="col-2 form-control" type="number" onChange={this.changeQty} defaultValue={this.props.item.qty} />
                    <div className="col-1">
                        {this.state.qty * this.state.product.price}
                    </div>
    
            </div>
        }
     : null
       }

    }
    afficherRecherche = () =>{
        <div className="row">
            <div className="col-3">
                    <img src={this.state.product.image} />
                </div>
                <div className="col-3">
                    {this.state.product.title}
                </div>
                <div className="col-1">
                    {this.state.product.price} €
                </div>
                <input className="col-2 form-control" type="number" onChange={this.changeQty} defaultValue={this.props.item.qty} />
                <div className="col-1">
                    {this.state.qty * this.state.product.price}
                </div>

        </div>
    }

    addToCart = (product) => { 
        let tmpCarts = []
        let found = false
        for(let item of this.state.carts) {
            if(item.product.id == product.id) {
                item.qty++
                found = true
            }
            tmpCarts.push({...item})
        }
        if(!found) {
            tmpCarts.push({product : product, qty : 1})
        }
        this.setState({
            carts : [...tmpCarts],
            total : this.updateTotal(tmpCarts)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* On affiche les produits */}
                    <ListProducts addToCart={this.addToCart} products={this.state.products}></ListProducts>
                    <div className="col-4">
                        <div className="row">
                            {/* ici on affichera les produits du panier */}
                            <CartItems updateQty={this.updateQty} deleteFromCart={this.deleteFromCart} carts={this.state.carts}></CartItems>
                            <div className="col-4">
                                Total : {this.state.total}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default ShoppingCart;