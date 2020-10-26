import React, { Component } from 'react';
import { favoris, isLogged } from '../services/DataService';
import Annonces from './Annonces';

class Favoris extends Component {
    constructor(props) {
        super(props);
        if(!isLogged) {
            this.props.history.push("/login/favoris")
        }
        this.state = { 
            annonces : favoris
         }
    }
    render() { 
        return ( 
        <div className="container">
            <Annonces annonces={this.state.annonces}></Annonces>
        </div> 
        );
    }
}
 
export default Favoris;