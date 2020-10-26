import React, {Component} from 'react';

export class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {  
           loading : true
        }
        console.log("[construction]")
    }

    componentDidMount() {
        console.log("[end first render]")
        setTimeout(() => {
            this.setState({
                loading : false
            })
        },3000)
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
            </div>
        );
    }
}
 