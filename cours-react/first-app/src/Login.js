import React, { Component } from 'react';
import { changeIsLogged, login } from './services/DataService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user : {
                login : '',
                password : ''
            }
         }
    }

    changeField = (event)=> {
        let tmpUser = {...this.state.user}
        tmpUser[event.target.getAttribute("name")] = event.target.value
        this.setState({
            user : tmpUser
        })
    }
    clickConnect = () => {
        if(login(this.state.user.login, this.state.user.password)){
            changeIsLogged(true)
            this.props.history.push("/personnes")
        }
        else {
            alert("Erreur de login")
        }
    }
    render() { 
        return ( 
            <div className="container">
                <div className="row m-1 justify-content-center">
                    <input type="text" onChange={this.changeField} className="col-6 form-control" name="login" placeholder="login" />
                </div>
                <div className="row m-1 justify-content-center">
                    <input type="password" onChange={this.changeField} className="col-6 form-control" name="password" placeholder="mot de passe" />
                </div>
                <div className="row m-1 justify-content-center">
                    <button onClick={this.clickConnect} className="col-6 btn btn-info">se connecter</button>
                </div>
            </div>
         );
    }
}
 
export default Login;