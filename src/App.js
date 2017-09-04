import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import './App.css'
import BookList from './components/BookList';
import SearchPage from './components/SearchPage';

class BooksApp extends React.Component {
    state = {
        books: [],
    };

    /**
     * @description when the app is mounted call aby setup methods
     */
    componentDidMount() {
        this.fetchAndStoreBooks();
    }

    /**
     * @description ask the api for the current set of books and store them in state
     */
    fetchAndStoreBooks() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState({books: books});
            });
    }

    /**
     * @description Represents a book
     * @param {string} id - The id of the book
     * @param {string} shelf - The  shelf to move to
     */
    updateShelf(id, shelf) {
        BooksAPI.update({id}, shelf)
            .then(() => {
                this.fetchAndStoreBooks();
            });
    }

    render() {
        return (
            <div className="app">
                <Route path="/search" render={() => {
                    return (
                        <SearchPage books={this.state.books}
                                    onShelfChange={(id, shelf) => {
                                        this.updateShelf(id, shelf);
                                    }}/>
                    )
                }}/>
                <Route exact path="/" render={() => {
                    return (
                        <BookList books={this.state.books}
                                  onShelfChange={(id, shelf) => {
                                      this.updateShelf(id, shelf);
                                  }}/>
                    )
                }}/>
            </div>
        )
    }
}

export default BooksApp
