import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./Home"
import FormAnnonce from "./FormAnnonce"
import Favoris from "./Favoris"
import DetailAnnonce from "./DetailAnnonce"
import Menu from './Menu';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    {/* Menu */}
                    <Menu></Menu>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/addAnnonce" component={FormAnnonce}></Route>
                        <Route path="/favoris" component={Favoris}></Route>
                        <Route path="/detail/:id" component={DetailAnnonce}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
 
export default Navigation;