import React, { Component } from 'react';
import { annonces, search } from '../services/DataService';
import Annonces from './Annonces';
import Search from './Search';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            annonces : annonces
         }
    }

    search = (text) => {
        this.setState({
            annonces : search(text)
        })
    }
    render() { 
        return ( 
            <div className="container">
                <Search search={this.search}></Search>
                <Annonces annonces={this.state.annonces}></Annonces>
            </div>
         );
    }
}
 
export default Home;