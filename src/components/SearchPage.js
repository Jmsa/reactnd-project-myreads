import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './../BooksAPI'
import Book from "./Book";

class SearchPage extends Component {

    state = {
        query: '',
        results: []
    };

    updateQuery(value) {
        const query = value.trim();
        this.setState({query: query});
        if (query) {
            this.searchForBook(query);
        }
    };

    searchForBook(query) {
        BooksAPI.search(query)
            .then((searchResults) => {
                const results = searchResults || [];
                this.setState({results: results});
            });
    };

    render() {
        const {results, query} = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">

                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query}
                               onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {results.map((book, index) => {
                            return (
                                <li key={index}>
                                    <Book authors={book.authors}
                                          imageLinks={book.imageLinks}
                                          title={book.title}
                                          shelf={book.shelf}/>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;