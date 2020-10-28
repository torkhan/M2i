import React, { Component } from 'react';
import { Input } from 'antd';
import { Book } from "./Book"
import { getAuthor, getBook } from './ApiService';
const { Search } = Input;


class ContainerBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: undefined,
            loading: false
        }
    }
    searchBook = (e) => {
        const isbn = e.target.value
        this.setState({
            loading: true
        })
        getBook(isbn).then(result => {
            let tmpBook = {
                title: result.title,
                authors: []
            }
            if (result.authors != undefined) {
                getAuthor(result.authors[0].key).then(resultAuthor => {
                    tmpBook.authors.push({ name: resultAuthor.name })
                    this.setState({
                        book: tmpBook,
                        loading: false
                    })
                })
            }
            this.setState({
                book: tmpBook,
                loading: false
            })
        }).catch(err => {
            alert('aucun livre avec ce code')
            this.setState({
                loading: false
            })
        })
        // const baseApi = "http://openlibrary.org" 
        // fetch(`${baseApi}/isbn/${isbn}.json`)
        // .then(res => res.json())
        // .then(result => {
        //     let tmpBook = {
        //         title : result.title,
        //         authors : []
        //     }
        //     if(result.authors != undefined) {
        //         fetch(`${baseApi}${result.authors[0].key}.json`).then(res=>res.json())
        //         .then(resultAuthor=> {
        //             tmpBook.authors.push({name : resultAuthor.name})
        //             this.setState({
        //                 book : tmpBook,
        //                 loading : false
        //             })
        //         })
        //     }
        //     this.setState({
        //         book : tmpBook,
        //         loading : false
        //     })
        // }).catch(err => {
        //     alert('aucun livre avec ce code')
        //     this.setState({
        //         loading : false
        //     })
        // })
    }
    render() {
        return (
            <div className="container">
                {/* Composant recherche */}
                <Search onPressEnter={this.searchBook} placeholder="Merci de saisir l'ISBN du livre" loading={this.state.loading} enterButton="Rechercher" size="large" />
                <Book book={this.state.book}></Book>
            </div>
        );
    }
}

export default ContainerBook;