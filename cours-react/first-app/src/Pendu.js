import React, { Component} from 'react';
import "./Pendu.css"
import { getPersonneById } from './services/DataService';
export class Pendu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mots : ["dotnet", "javascript", "google", "microsoft"],
            motCache : undefined,
            masque : undefined,
            nombreClickMax: 10,
            boutons : [],
            joueur : getPersonneById(props.match.params.id)
         }
    }
    start = () => {
        //trouver un  mot aléatoire
        const rand = Math.floor(Math.random() * (this.state.mots.length-1))
        const tmpMot = this.state.mots[rand].toUpperCase()
        let tmpMasque = ""
        for(let i=0; i < tmpMot.length; i++) {
            tmpMasque+= "_"
        }
        this.setState({
            motCache : tmpMot,
            masque : tmpMasque,
            nombreClickMax : 10
        })
        this.renderButton()
    }

    clickButton = (e) => {
        // e.target.classList.remove("btn-info")
        // e.target.classList.add('btn-danger')
        let tmpBoutons = [...this.state.boutons]
        for(let bouton of tmpBoutons) {
            if(bouton.valueButton == e.target.innerText) {
                bouton.classCss = "col btn btn-danger"
            }
        }
        this.setState({
            boutons : [...tmpBoutons]
        })
        this.searchValue(e.target.innerText)
    }

    searchValue = (value) => {
        let tmpMasque = ""
        let found = false
        if(this.state.motCache != undefined) {
            for(let i=0; i < this.state.motCache.length; i++) {
                if(this.state.motCache[i] == value) {
                    tmpMasque += this.state.motCache[i]
                    found = true
                }else {
                    tmpMasque += this.state.masque[i]  
                }
            }
            let resteClick = found ? this.state.nombreClickMax : (this.state.nombreClickMax-1)
            this.setState({
                masque : tmpMasque,
                nombreClickMax : resteClick
            })
            this.testWin(tmpMasque)
        }
    }

    testWin = (newMasque) => {
        if(newMasque == this.state.motCache) {
            alert("Bravo vous avez gagné")
            //Redirection vers le jeu du plus ou moin
            this.props.history.push('/plusoumoin')
        }
    }

    renderButton = () => {
        let boutons = []
        for(let c = 65 ; c <= 90; c++){
            // boutons.push(<button onClick={this.clickButton} className="btn col btn-info">{String.fromCharCode(c)}</button>)
            boutons.push({valueButton : String.fromCharCode(c), classCss : "btn col btn-info"})
        }  
        this.setState({
            boutons:[...boutons]
        })
    }


    render() { 
        return (  
            <div className="container">
                {this.state.joueur != undefined ? 
                (<div className="row m-1 justify-content-center">
                    <div className="col">
                        {this.state.joueur.nom} {this.state.joueur.prenom}
                    </div>
                </div>)
                : null
            }
                <div className="row m-1 justify-content-center">
                    <button onClick={this.start} className="col btn btn-success">Démarrer</button>
                </div>
                <div className="row m-1 justify-content-center">
                    <div className="col masque">
                        {/* ici on affiche le masque */}
                        {this.state.masque}
                    </div>
                </div>
                <div className="row m-1">
                    {/* on affiche les boutons */}
                    {this.state.boutons.map(b=>(<button onClick={this.clickButton} className={b.classCss}>{b.valueButton}</button>))}
                </div>
                <div className="row m-1">
                    <div className="col">
                        Il vous reste {this.state.nombreClickMax} click pour trouver
                        {/* on affiche le score */}
                    </div>
                </div>
            </div>
        );
    }
}
