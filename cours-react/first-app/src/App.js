import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { ListeContacts } from './contacts/ListeContacts';
import { Compteur } from './Compteur';
<<<<<<< HEAD
=======
import { HelloWorld } from './HelloWorld';
>>>>>>> master
import { Bonjour } from './bonjour';


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
<<<<<<< HEAD
      <ListeContacts />
      <Compteur />
      <Bonjour />
=======
      {/* <ListeContacts />
      <Compteur /> */}
      <HelloWorld />
      
>>>>>>> master
    </div>
  );
}

export default App;
