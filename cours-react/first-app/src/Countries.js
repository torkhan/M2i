import React, { Component } from 'react';

class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            countries : []
         }
    }

    componentDidMount() {
        // fetch("https://restcountries.eu/rest/v2/name/bel")
        // .then((res) => res.json())
        // .then((result) =>{
        //     this.setState({ countries: result });
        // })
    }
    changeCountry = (e) => {
        let country = e.target.value
        if(country != '') {
            fetch("https://restcountries.eu/rest/v2/name/"+country)
            .then((res) => res.json())
            .then((result) =>{
                this.setState({ countries: result });
            })
        }
        this.setState({
            countries : []
        })
    }
    render() { 
        return (  
            <div>
                <div>
                    <input type="text" onChange={this.changeCountry}  />
                </div>
                {this.state.countries.map((country, index) => (
                    <div key={index}>{country.name}</div>
                ))}
            </div>
        );
    }
}
 
export default Countries;