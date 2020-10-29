import React, { Component } from 'react';
import { RechercheNutriscore } from './rechercheNutriscore';

class ContainerNavigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
      
    }

    render() { 
        return ( 
            <div className="container">
                <h3>3560070472888</h3>
                <RechercheNutriscore></RechercheNutriscore>
            </div>
         );
    }
}
export default ContainerNavigation;