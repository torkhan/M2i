import React, {Component}  from 'react'

export class PenduMoi extends Component{
    constructor(props){
        super(props);
        this.state = {
            boutons : []
        }
    }
    start = () => {
        this.renderBoutons()
    }

    clickBoutons = () => {

    }

    renderBoutons = () => {
        let boutons = []
        for ( let c=65; c<=90;c++){
        boutons.push(<div onClick={this.clickBoutons} className="col btn btn-info" >{String.fromCharCode(c)}</div>)
        }
        this.setState({
            boutons : [...boutons]
        })
    }


    render(){
        return(
            <div className = "container w-75">
                <div className= "col btn btn-primary" onClick={this.start}>Demarrage</div>
                <div className = "row">
                    {this.state.boutons}
                </div>
                
            </div>

        )
    }

}