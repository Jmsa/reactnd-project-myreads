import React, {Component} from 'react';

class Book extends Component {

    // TODO: Consider adding propTypes

    /**
     * @description Change the shelf based on selection
     * @param {event} event - The browser event that occurred when the selection was changed
     */
    changeShelf(event) {
        this.props.onShelfChange(event.target.value);
    }

    render() {
        const {imageLinks, shelf, title, authors} = this.props;
        const imageURL = imageLinks.thumbnail || imageLinks.smallThumbnail;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${imageURL}")`
                    }}/>
                    <div className="book-shelf-changer">
                        <select value={shelf}
                                onChange={(event) => {
                                    this.changeShelf(event);
                                }}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                {authors && authors.map((author, index) => {
                    return (
                        <div className="book-authors" key={index}>{author}</div>
                    )
                })}
            </div>
        )
    }
}

export default Book;