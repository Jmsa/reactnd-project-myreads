import React, {Component} from 'react';

class Book extends Component {

    // TODO: consider adding propTypes
    render() {
        const imageURL = this.props.imageLinks.thumbnail || this.props.imageLinks.smallThumbnail;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${imageURL}")`
                    }}/>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div>shelf: {this.props.shelf}</div>
                <div className="book-title">{this.props.title}</div>
                {this.props.authors && this.props.authors.map((author,index) => {
                    return (
                        <div className="book-authors" key={index}>{author}</div>
                    )
                })}
            </div>
        )
    }
}

export default Book;