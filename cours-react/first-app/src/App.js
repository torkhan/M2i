import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Home } from './Home';
import { ListeContacts } from './contacts/ListeContacts';
import { Compteur } from './Compteur';
import { HelloWorld } from './HelloWorld';
import { PlusOuMoin } from './PlusOuMoin';
import { Pendu } from './Pendu';
import { ContainerPersonnes } from './Personnes/ContainerPersonnes';
import { Todos } from './Todos';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden : false
    }
  }

  componentDidMount() {
    // this.setState({
    //   appState : false
    // })
  }

  hide = () => {
    this.setState({
      hidden : true
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.hide}>Hide HelloWorld</button>
        {this.state.hidden ? null : <HelloWorld></HelloWorld>}
      </div>  
    );
  }
}

export default App;
