import React, { Component } from 'react';
import { ResultatNutriscore } from './resultatNutriscore';
import { Input } from 'antd';
import { getNomProduit } from './servicesNutriscore';
const { Search } = Input;

export class RechercheNutriscore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produit: undefined,
            loading: false
        }
    }
    search = (e) => {
        const codeBarre = e.target.value
       
        this.setState({
            loading: true

        })
        getNomProduit(codeBarre).then(produit => {
            let tmpProduit = {
                product_name: produit.product.product_name
                
            }
            console.log(tmpProduit)
            this.setState({
                produit: tmpProduit,
                loading: false

            })
            console.log(this.state.produit)
        } ).catch(err => {
            alert('aucun livre avec ce code')
            this.setState({
                loading: false
            })
        })


       

    }
    render() {
        return (<div className="col-6">

            <Search onPressEnter={this.search}  placeholder="Entrez le code barre" loading={this.state.loading} enterButton="Rechercher" size="large" />
            <ResultatNutriscore produit={this.state.produit}></ResultatNutriscore>
        </div>);
    }
}

