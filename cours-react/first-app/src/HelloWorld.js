import React, {Component} from 'react';
import { ColorContext } from './ColorContext';
import SecondComponent from './SecondComponent';
import { firstPromise } from './services/ApiService';

export class HelloWorld extends Component {

    static contextType = ColorContext

    constructor(props) {
        super(props);
        this.state = {  
           loading : false,
           compteur : 1
        }
        //console.log("[construction]")
    }
    tick = () => {
        const numeroTick = setInterval(() => {
            this.setState({
                compteur : this.state.compteur + 1
            })
        }, 1000) 
        this.setState({
            numeroTick : numeroTick
        })
    }
    componentDidMount() {
        //#region Cours cycle de vie component
        // this.tick()
        // setTimeout(() => {
        //     this.setState({
        //         loading : false
        //     })
        // },3000)
        // firstPromise.then((res) => {
        //     alert(res)
        // }).catch((err) => {
        //     alert(err)
        // })
        //  console.log("[end first render]")
        //#endregion

        //Récupérer la valeur du context
       
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[update]')
        console.log("ancien state : " )
        console.log(this.state)
        console.log("nouveau state : " )
        console.log(nextState)
        console.log("ancien props : " )
        console.log(this.props)
        console.log("nouveau props : " )
        console.log(nextProps)
        // if(this.state != nextState || this.props != nextProps) {
        //     return true
        // }
        // return false
        return this.state != nextState || this.props != nextProps
    }
    componentWillUnmount() {
        console.log('[unmount component]')
        clearInterval(this.state.numeroTick)
    }
    render() {
        // console.log("[dom render]")
        
        return (
            <div>
                {this.state.loading ? 
                (<div>Loading...</div>)
                : 
                (<div style={{color : this.context}}>HelloWorld context : {this.context}</div>)
            }
            {this.state.compteur}
                <SecondComponent test="coucou"></SecondComponent>
            </div>
        );
    }
}
 