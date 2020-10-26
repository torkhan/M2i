import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"
import { BonCoinCOntainer } from './BonCoinContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="container-fluid">
          <nav className="container bg-light">
              <ul className="row my-3">
                <li className="col text-left">
                    <Link to='/'>Home</Link>
                </li>
                <li className="col">
                    <Link to='*'>Ajout annonce</Link>
                </li>
                <li className="col">
                    <Link to='*'>Favoris</Link>
                </li>
               
              </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={BonCoinCOntainer}></Route>
          
          </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
