import React, { Component } from 'react';

export class ApiBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isHidden : true
        }
    }
    // componentDidMount() {
    //     fetch("https://openlibrary.org/isbn/9780140328721.json")
    //     .then((res) => res.json())
    //     .then((result) =>{console.log(result)
    //         this.setState({ countries: result });
    //     }).catch((er) => console.log(er))
    // }
    displayBook = (e) => {
        let book = e.target.value  
        if(book != ''){
            fetch("https://openlibrary.org/isbn/"+book+".json")
            .then((res) => res.json())
            .then((result) => {
                this.setState({ books : result })
            } )
        }
     }
     validation = (e) => {
         e.preventDefault();
        
         let book = e.target.value 
         if(e.target.length == 13){
             this.setState({
                 isHidden : false
             })

         }
     }

    render() {
        return (<div>
            <div>
                <form>
                <input type="text" onChange={this.displayBook}></input>
                <button onClick={this.validation} className="btn btn-succes col-2" type="submit">Valider</button>
                </form>
            </div>
            <div >{this.state.books.title}</div>
        </div>);
    }
}

