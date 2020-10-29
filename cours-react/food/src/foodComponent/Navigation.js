import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ContainerFood from "./ContainerFood"
import Menu from './Menu';
import Login from './Login';
import Historique from './Historique';



class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Menu></Menu>
                    <Switch>
                        <Route path="/" exact component={ContainerFood}></Route>
                        <Route path="/historique" component={Historique}></Route>
                        <Route path="/login" exact component={Login} ></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Navigation;