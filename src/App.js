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

    render() {
        return (
            <div className="app">
                <Route path="/search" component={SearchPage}/>
                <Route exact path="/" render={() => {
                    return (
                        <BookList books={this.state.books}/>
                    )
                }}/>
            </div>
        )
    }
}

export default BooksApp
