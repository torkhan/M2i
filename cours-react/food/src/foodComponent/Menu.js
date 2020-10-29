import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="navbar navbar-expand-lg">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item m-2">
                        <Link to='/'>Recherche</Link>
                    </li>
                    <li className="nav-item m-2">
                        <Link to='/historique'>Historique</Link>
                    </li>
                    <li className="nav-item m-2">
                        <Link to='/login'>Log</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;