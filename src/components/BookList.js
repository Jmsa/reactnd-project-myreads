import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf';

class BookList extends Component {

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
        const books = this.props.books;

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
                                           title={shelf}
                                           key={index}/>
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