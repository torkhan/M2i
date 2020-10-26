import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row m-1">
                <input type="text" className="col form-control" placeholder="search" onChange={(e) => {
                    this.props.search(e.target.value)
                }} />
            </div>
         );
    }
}
 
export default Search;