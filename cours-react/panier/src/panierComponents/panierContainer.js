import React, { Component } from 'react';
import { ListProduits } from './listeProduits';
export class PanierContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listeProduits : [{
                image : undefined,
                nomProduit : undefined,
                prix:undefined,
                quantite: undefined,
                total: undefined,
                id: 0
    
            }]
         }
    }




    render() { 
        return ( 
            <div className="container w-75">
                <h1 m-2>Votre panier</h1>
                <ListProduits />
            </div>
         );
    }
}
 
