import React, { Component } from 'react';
import { ResultatNutriscore } from './resultatNutriscore';
import { Input } from 'antd';
import { getNomProduit } from '../services/servicesNutriscore';
import Historique from './Historique';
const { Search } = Input;

export class RechercheNutriscore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produits:[],
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
               nom: produit.product.product_name,
                image: produit.product.image_front_thumb_url,
                ingredients: produit.product.ingredients_text,
                allergens: produit.product.allergens_from_ingredients,
                nutriscore: produit.product.nutriscore_grade
            }
           
            console.log(tmpProduit)
            this.setState({
                produit: tmpProduit,
                loading: false
            })
            
             let produits = [produit, ...produits]
            console.log(this.state.produit)
        } ).catch(err => {
            alert('aucun livre avec ce code')
            this.setState({
                loading: false
            })
        })
    }

    
    render() {
        return (<div className="col">

            <Search onPressEnter={this.search}  placeholder="Entrez le code barre" loading={this.state.loading} enterButton="Rechercher" size="large" />
            <ResultatNutriscore produit={this.state.produit}></ResultatNutriscore>
            
        </div>);
    }
}

