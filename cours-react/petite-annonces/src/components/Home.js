import React, { Component } from 'react';
import { annonces } from '../services/DataService';
import Annonces from './Annonces';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            annonces : annonces
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
 
export default Home;