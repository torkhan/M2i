import React from 'react';
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


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Home /> */}
      {/* <ListeContacts />
      <Compteur /> */}
      {/* <HelloWorld /> */}
      {/* <Personne nom="abadi" prenom="ihab" adresse="tourcoing" />
      <Personne nom="toto" prenom="tata" adresse="tourcoing" />
      <Personne /> */}
      {/* <PlusOuMoin/> */}
      {/* <Pendu /> */}
      {/* <Personnes></Personnes> */}
      {/* <Todos></Todos> */}
      {/* <ContainerPersonnes></ContainerPersonnes> */}
      <BrowserRouter>
        <header className="container-fluid">
          <nav className="container">
              <ul className="row">
                <li className="col">
                    <Link to='/'>Todo</Link>
                </li>
                <li className="col">
                    <Link to='/pendu'>Pendu</Link>
                </li>
                <li className="col">
                    <Link to='/plusoumoin'>Plus ou moin</Link>
                </li>
                <li className="col">
                    <Link to='/personnes'>Personnes</Link>
                </li>
              </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Todos}></Route>
            <Route path="/pendu" exact component={Pendu}></Route>
            <Route path="/pendu/:id" component={Pendu}></Route>
            <Route path="/plusoumoin" component={PlusOuMoin}></Route>
            <Route path="/personnes" component={ContainerPersonnes}></Route>
          </Switch>
        </header>
      </BrowserRouter>
    </div>  
  );
}

export default App;
