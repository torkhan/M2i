import React, { Component } from 'react';
import Produit from './Produit';
import { RechercheNutriscore } from './rechercheNutriscore';

class ListeProduits extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state != nextState || this.props != nextProps
    }
    render() { 
        return ( 
            <div className="container">
                {this.props.ListeProduits.map(produit=>(
                    <RechercheNutriscore> key={produit.id} produit={produit}</RechercheNutriscore>
                ))}
            </div>
         );
    }
}
 
export default ListeProduits;