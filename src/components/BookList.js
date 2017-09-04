import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf';

class BookList extends Component {

    // Define potential shelves.
    // TODO: Look at making these enums or pulling them from the API response instead of hard-coding.
    shelves = [
        {
            name: `currentlyReading`,
            heading: `Currently Reading`
        },
        {
            name: `wantToRead`,
            heading: `Want to Read`
        },
        {
            name: `read`,
            heading: `Read`
        },
    ];

    render() {
        const {books, onShelfChange} = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.shelves.map((shelf, index) => {
                            return (
                                <BookShelf books={books.filter((book) => book.shelf === shelf.name)}
                                           title={shelf.heading} key={index}
                                           onShelfChange={(book, value) => {
                                               onShelfChange(book, value);
                                           }}/>
                            )
                        })}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookList;