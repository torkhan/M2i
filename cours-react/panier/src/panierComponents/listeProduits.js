import React, { Component } from 'react';
import { Produit } from './produit';
export class ListProduits extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Produit />
            </div>
         );
    }
}
 
