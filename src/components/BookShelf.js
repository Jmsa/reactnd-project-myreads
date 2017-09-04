import React, {Component} from 'react';
import Book from "./Book";

// TODO: Consider making a functional component.
// TODO: Consider replacing "No books to display" with something more contextually aware

class BookShelf extends Component {

    render() {
        const {books, onShelfChange, title} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books.length > 0 &&
                            books.map((book, index) => {
                                return (
                                    <li key={index}>
                                        <Book authors={book.authors}
                                              imageLinks={book.imageLinks}
                                              title={book.title}
                                              shelf={book.shelf}
                                              key={index}
                                              onShelfChange={(shelf) => {
                                                  onShelfChange(book.id, shelf);
                                              }}/>
                                    </li>
                                )
                            })
                        }

                        {
                            books.length === 0 &&
                            <li>No books to display</li>
                        }

                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;