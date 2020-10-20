
import React, { Component } from 'react';

export class Pendu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            motATrouver: ["CRAYON", "GNOME", "ORAGE"],
            motEnCour: [],
            lettreUtilises: [],
            lettreRestantes: [],
            alphabet: "abcdefghijklmnopqrstuvwxyz".toUpperCase()

        }

    }
    tirageMot = () => {
        let hasard = Math.floor(Math.random() * this.state.motATrouver.length);
        let mot = this.state.motATrouver[hasard]
        this.setState({motEnCour : mot })
        console.log(mot)
        let sdfgh = "O"
        let position = mot.indexOf(sdfgh)

        console.log(position)
        console.log(this.state.motEnCour)

       

      
    //   let test2 = mot.indexOf(lettreUtilises)
    //     console.log(test2)
    }

    recupLettre = (e) => {
        let lettreTapee = { ...this.state.lettreUtilises }
        lettreTapee[e.target.getAttribute("name")] = e.target.value
        this.setState({lettreUtilises: lettreTapee  })
        console.log(this.state.lettreUtilises)
 
    }

    compare = () => {
        let sdfgh = "O"
       
        let position = this.state.motEnCour.indexOf(sdfgh)

        console.log(position)

    }

    render() {
        return (
            <div className="container">
                <h1>Jeux du pendu</h1>
                <h3>Réalisé dans la souffrance par vos Dévlégués préférés </h3>

                <h4>Mot à trouver</h4>
                <button className="btn btn-primary" onClick={this.tirageMot}>Commencez à zouer</button>
                <button className="btn btn-primary" onClick={this.Compare}>Compare</button>
                <h4>{this.setState.motEnCour}</h4>
                <div className="col text-center">
                    <div className="row">
                        <button onClick={this.recupLettre} className="btn btn-info" name="A" >A</button>
                        <button className="btn btn-info" name="B" onClick={this.recupLettre}>B</button>
                        <button className="btn btn-info" name="C" onClick={this.recupLettre}>C</button>
                        <button className="btn btn-info" name="D" onClick={this.recupLettre}>D</button>
                        <button className="btn btn-info" name="E" onClick={this.recupLettre}>E</button>
                        <button className="btn btn-info" name="F" onClick={this.recupLettre}>F</button>
                        <button className="btn btn-info" name="G" onClick={this.recupLettre}>G</button>
                        <button className="btn btn-info" name="H" onClick={this.recupLettre}>H</button>
                        <button className="btn btn-info" name="I" onClick={this.recupLettre}>I</button>
                        <button className="btn btn-info" name="J" onClick={this.recupLettre}>J</button>
                        <button className="btn btn-info" name="K" onClick={this.recupLettre}>K</button>
                        <button className="btn btn-info" name="L" onClick={this.recupLettre}>L</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-info" name="M" onClick={this.recupLettre}>M</button>
                        <button className="btn btn-info" name="N" onClick={this.recupLettre}>N</button>
                        <button className="btn btn-info" name="O" onClick={this.recupLettre}>O</button>
                        <button className="btn btn-info" name="P" onClick={this.recupLettre}>P</button>
                        <button className="btn btn-info" name="Q" onClick={this.recupLettre}>Q</button>
                        <button className="btn btn-info" name="R" onClick={this.recupLettre}>R</button>
                        <button className="btn btn-info" name="S" onClick={this.recupLettre}>S</button>
                        <button className="btn btn-info" name="T" onClick={this.recupLettre}>T</button>
                        <button className="btn btn-info" name="U" onClick={this.recupLettre}>U</button>
                        <button className="btn btn-info" name="V" onClick={this.recupLettre}>V</button>
                        <button className="btn btn-info" name="W" onClick={this.recupLettre}>W</button>
                        <button className="btn btn-info" name="X" onClick={this.recupLettre}>X</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-info" name="Y" onClick={this.recupLettre}>Y</button>
                        <button className="btn btn-info" name="Z" onClick={this.recupLettre}>Z</button>
                    </div>
                </div>
            </div>
        )
    }
}