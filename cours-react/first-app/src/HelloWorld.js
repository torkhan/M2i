import React, {Component} from 'react';

export class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {  
           loading : true,
           compteur : 1
        }
        console.log("[construction]")
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
        this.tick()
        setTimeout(() => {
            this.setState({
                loading : false
            })
        },3000)

        console.log("[end first render]")
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
        console.log("[dom render]")
        return (
            <div>
                {this.state.loading ? 
                (<div>Loading...</div>)
                : 
                (<div>HelloWorld</div>)
            }
            {this.state.compteur}
            </div>
        );
    }
}
 