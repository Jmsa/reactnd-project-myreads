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
                    const results = this.matchResultsWithCurrentBooks(searchResults, this.props.books);
                    this.setState({results: results});
                }
                else {
                    this.setState({results: []});
                }
            });
    };

    // TODO: Consider making this more generic and moving out into a helper module.
    /**
     * @description Ensure that all results are either matched to current book shelves or set have their shelve
     * set to "none".
     * @constructor
     * @param {array} searchResults - New results returned from the api to evaluate.
     * @param {array} currentBooks - Books that are current in a shelve to compare against.
     */
    matchResultsWithCurrentBooks(searchResults, currentBooks){
        return searchResults.map((searchResultBook)=>{
            currentBooks.forEach((currentBook)=>{
                if(currentBook.id === searchResultBook.id){
                    searchResultBook.shelf = currentBook.shelf;
                } else {
                    searchResultBook.shelf = "none";
                }
            });

            return searchResultBook;
        });
    }

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