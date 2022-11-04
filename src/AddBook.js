import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class AddBook extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    const defaultImage = 'https://images.unsplash.com/photo-1502078534399-8190479363f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80';
    const newBook = {
      title: event.target.formTitle.value,
      description: event.target.formDesc.value,
      status: event.target.formStatus.value,
      favorite: event.target.formFav.checked,
      yearReleased: event.target.formYearReleased.value,
      image: event.target.formImage.value.length > 0 ? event.target.formImage.value : defaultImage
    }
    console.log(`Here's your new book!: `, newBook);
    this.props.handleCreateBook(newBook);
    
  }
  render() {
    return (
      <Container>

        <Form onSubmit={this.onSubmit}>

          <Form.Group controlId='formTitle'>
            <Form.Label>Book Title</Form.Label>
            <Form.Control
              required
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

          <Form.Group controlId='formFav'>
          <Form.Check
            type="checkbox"
            label="Favorite or nah?"
          />
          </Form.Group>

          <Form.Group controlId='formYearReleased'>
            <Form.Label>Release Date</Form.Label>
            <Form.Control
              type='number'
              placeholder='Year book was released'
            />
          </Form.Group>

          <Form.Group controlId='formImage'>
            <Form.Label>Book pic</Form.Label>
            <Form.Control
              type='text'
              placeholder='enter a valid URL for a book image'
            />
          </Form.Group>
          <Button type="submit">Create book</Button>
        </Form>

      </Container>

    )
  }
}

export default AddBook;