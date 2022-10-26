import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class AddBook extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: event.target.formTitle.value,
      description: event.target.formDesc.value,
      status: event.target.formStatus.value,
      favorite: event.target.formFav.value,
      yearReleased: event.target.formYearReleased.value,
      image: event.target.formImage.value
    }
    console.log(`Here's your new book!: `, newBook);

  }
  render() {
    return(
      <Container>

        <Form onSubmit={this.onSubmit}>
          TODO: define onSubmit
        <Form.Group controlId='formTitle'>
          <Form.Label>Book Title</Form.Label>
          <Form.Control
          type='text'
          placeholder='Book title here'
          />
        </Form.Group>

        <Form.Group controlId='formDesc'>
          <Form.Label>Author</Form.Label>
          <Form.Control
          type='text'
          placeholder='Author of the book'
          />
        </Form.Group>

        <Form.Group controlId='formStatus'>
          <Form.Label>Status</Form.Label>
          <Form.Control
          type='text'
          placeholder='Where\s the book?'
          />
        </Form.Group>

        <Form.Check
        type="checkbox"
        label="Favorite or nah?"
        />

        <Form.Group controlId='formYearReleased'>
          <Form.Label>Release Date</Form.Label>
          <Form.Control
          type= 'number'
          placeholder='Year book was released'
          />
        </Form.Group>

        <Form.Group controlId='formImage'>
          <Form.Label>Book pic</Form.Label>
          <Form.Control
          type= 'text'
          placeholder='Link to book pic'
          />
        </Form.Group>
        <Button type="submit">Create book</Button>
        </Form>

      </Container>

    )
  }
}

export default AddBook;