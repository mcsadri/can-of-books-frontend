import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

class Bookshelf extends React.Component {
  render() {
    return (
      <Carousel>
        {this.props.books.map(book => (
          <Carousel.Item key={book._id}>
            <img
              className="d-block w-100"
              src={book.image}
              alt={book.title}
            />
            <Carousel.Caption>
              <h2>{book.title}</h2>
              <p>{book.description}</p><br />
              <p>{book.status}</p><br />
              <p>{book.favorite}</p><br />
              <p>{book.yearReleased}</p><br />
              <Button onClick={() => this.props.handleDeleteBook(book)}>Delete this book</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    )
  }
}

export default Bookshelf;