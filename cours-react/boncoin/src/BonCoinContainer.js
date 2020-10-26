import React, { Component } from 'react';
import { annonces } from "./services/DataServices"
import {AnnonceSearch} from "./AnnonceSearch"
export class BonCoinCOntainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            annonces: annonces,
            myInputValue: '',
            tmpAnnonce: ''
           

        }

    }
    search = (text) => {
        
        const tmpSearch = this.state.annonces.filter(a => a.titre.toLowerCase().includes(text.target.value))
        
            this.setState({
            tmpAnnonce : [...tmpSearch]
            })
       
        console.log (this.state.tmpAnnonce)
    }
    render() {
        return (<div>
            <input className="col form-contro col-5" onChange={this.search} placeholder="Entrez votre recherche" type="text"></input>
            <div className="row test">
              <AnnonceSearch tmpAnnonce={this.state.tmpAnnonce}></AnnonceSearch>
              </div>
        </div>);
    }
}

