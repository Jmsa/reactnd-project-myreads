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
     * @param {string} book - Reference to the book
     * @param {string} value - The  shelf to move to
     */
    updateStatus = (book, value) => {
        book.shelf = value;

        BooksAPI.update(book, value).then(response => {
            this.setState(state => ({
                books: state.books.filter(b => b.id !== book.id).concat([book])
            }));
        });
    };

    render() {
        return (
            <div className="app">
                <Route path="/search" render={() => {
                    return (
                        <SearchPage books={this.state.books}
                                    onShelfChange={this.updateStatus}/>
                    )
                }}/>
                <Route exact path="/" render={() => {
                    return (
                        <BookList books={this.state.books}
                                  onShelfChange={this.updateStatus}/>
                    )
                }}/>
            </div>
        )
    }
}

export default BooksApp
