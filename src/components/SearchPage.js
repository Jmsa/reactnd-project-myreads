import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './../BooksAPI'
// import Book from "./Book";
import BookShelf from './BookShelf';

class SearchPage extends Component {

    // TODO: Once a book is moved during search add an animation or move back to the overall view.

    state = {
        query: '',
        results: []
    };

    /**
     * @description Cleans up new search value and resets state or searches for new query.
     * @constructor
     * @param {string} value - The new query string to look up. If empty resets the results.
     */
    updateQuery(value) {
        const query = value.trim();
        this.setState({query: query});
        if (query) {
            this.searchForBook(query);
        } else {
            this.setState({results: []})
        }
    };

    /**
     * @description Search for a book based on input
     * @param {string} query - The query to use when searching
     */
    searchForBook(query) {
        BooksAPI.search(query, 20)
            .then((searchResults) => {
                if (searchResults.length > 0) {
                    const results = searchResults || [];
                    this.setState({results: results});
                }
                else {
                    this.setState({results: []});
                }
            });
    };

    render() {
        const {results, query} = this.state;
        const {onShelfChange} = this.props;

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
                    <BookShelf books={results}
                               title="Search Results"
                               onShelfChange={(id, shelf) => {
                                   onShelfChange(id, shelf);
                               }}/>
                </div>
            </div>
        )
    }
}

export default SearchPage;