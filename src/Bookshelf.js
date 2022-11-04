import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

class Bookshelf extends React.Component {
  render() {
    return (
      <div class="carouselDiv">
        <Carousel>
          {this.props.books.map(book => (
            <Carousel.Item key={book._id}>
              <img
                className="d-block w-75"
                src={book.image}
                alt={book.title}
              />
              <Carousel.Caption>
                <h2>{book.title}</h2>
                <p>Written by: {book.description ? book.description : 'none provided'}</p>
                <p>Status: {book.status ? book.status : 'none provided'}</p>
                <p>Favorite: {book.favorite ? 'Yes' : 'No'}</p>
                <p>Release date: {book.yearReleased ? book.yearReleased : 'none provided'}</p>
                <Button onClick={() => this.props.handleSelectBook(book)}>Update information about this book</Button>
                <br />
                <br />
                <Button onClick={() => this.props.handleDeleteBook(book)}>Delete this book</Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default Bookshelf;