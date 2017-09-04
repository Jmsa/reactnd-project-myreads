import React, {Component} from 'react';
import Book from "./Book";

class BookShelf extends Component {

    render() {
        const books = this.props.books;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title.heading}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book, index) => {
                            return (
                                <li key={index}>
                                    <Book authors={book.authors}
                                          imageLinks={book.imageLinks}
                                          title={book.title}
                                          shelf={book.shelf}
                                          key={index}/>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;