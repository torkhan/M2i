import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Home"
import FormAnnonce from "./FormAnnonce"
import Favoris from "./Favoris"
import DetailAnnonce from "./DetailAnnonce"
import Menu from './Menu';
import Login from './Login';
import { ThemeContext } from '../Tools/ThemeContext';
<<<<<<< HEAD
import Annonces from './Annonces';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: {
                color: 'black',
                bgColor: 'white'
            }
        }
    }
    changeTheme = (type) => {
=======
// class Navigation extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             theme: {
//                 color: 'black',
//                 bgColor: 'white'
//             }
//         }
//     }
//     changeTheme = (type) => {
//         if (type == "dark") {
//             this.setState({
//                 theme: {
//                     color: 'white',
//                     bgColor: 'black'
//                 }
//             });
//         } else if (type == "light") {
//             this.setState({
//                 theme: {
//                     color: 'black',
//                     bgColor: 'white'
//                 }
//             });
//         }
//     }

//     render() {
//         return (
//             <BrowserRouter>
//                 <div className="container-fluid">
//                     {/* Menu */}

//                     <Menu changeTheme={this.changeTheme}></Menu>
//                     <ThemeContext.Provider value={this.state.theme}>
//                         <Switch>
//                             <Route path="/" exact component={Home}></Route>
//                             <Route path="/addAnnonce" component={FormAnnonce}></Route>
//                             <Route path="/favoris" component={Favoris}></Route>
//                             <Route path="/detail/:id" component={DetailAnnonce}></Route>
//                             <Route path="/login" exact component={Login} ></Route>
//                             <Route path="/login/:url" component={Login} ></Route>
//                         </Switch>
//                     </ThemeContext.Provider>
//                 </div>
//             </BrowserRouter>
//         );
//     }
// }

const Navigation = (props) => {
    const [theme, setTheme] = useState({
        color: 'black',
        bgColor: 'white'
    })

    const changeTheme = (type) => {
>>>>>>> master
        if (type == "dark") {
            setTheme({
                color: 'white',
                bgColor: 'black'
            })
        } else if (type == "light") {
            setTheme({
                color: 'black',
                bgColor: 'white'
            })
        }
    }

    return (
        <BrowserRouter>
            <div className="container-fluid">
                {/* Menu */}

                <Menu changeTheme={changeTheme}></Menu>
                <ThemeContext.Provider value={theme}>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/addAnnonce" component={FormAnnonce}></Route>
                        <Route path="/favoris" component={Favoris}></Route>
                        <Route path="/detail/:id" component={DetailAnnonce}></Route>
                        <Route path="/login" exact component={Login} ></Route>
                        <Route path="/login/:url" component={Login} ></Route>
                    </Switch>
                </ThemeContext.Provider>
            </div>
        </BrowserRouter>
    )
}

export default Navigation;