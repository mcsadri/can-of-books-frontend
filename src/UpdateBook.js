import React from 'react';
import { Form, Container, Modal, Button } from 'react-bootstrap';


class UpdateBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id : this.props.selectedBook?._id,
      title : this.props.selectedBook?.title,
      description: this.props.selectedBook?.description,
      status: this.props.selectedBook?.status,
      favorite: this.props.selectedBook?.favorite,
      yearReleased: this.props.selectedBook?.yearReleased,
      image: this.props.selectedBook?.image
    }
  }

  handleTitleChange = (event) => this.setState({ title: event.target.value });

  handleDescriptionChange = (event) => this.setState({ description: event.target.value });

  handleStatusChange = (event) => this.setState({ status: event.target.value });

  handleFavoriteChange = (event) => this.setState({ favorite: event.checked });

  handleYearChange = (event) => this.setState({ yearReleased: event.target.value });

  handleImageChange = (event) => this.setState({ image: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('this.state: ', this.state);
    this.props.handleUpdateBook(this.state);
    this.props.handleOnHide();
  }



  render() {
    return (
      <>
        <Modal show={this.props.showUpdate} onHide={this.props.handleOnHide}>
          <Modal.Header closeButton >
            <Modal.Title>Update a Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Book Title</Form.Label>
                <Form.Control
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                  type='text'
                  placeholder={this.state.title}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  onChange={this.handleDescriptionChange}
                  type='text'
                  placeholder={this.state.description}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Control
                  onChange={this.handleStatusChange}
                  type='text'
                  placeholder={this.state.status}
                />
              </Form.Group>

              <Form.Group>
                <Form.Check
                  onChange={this.handleFavoriteChange}
                  type="checkbox"
                  label="Favorite or nah?"
                  checked={this.state.favorite}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                  onChange={this.handleYearChange}
                  type='number'
                  placeholder={this.state.yearReleased}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Book pic</Form.Label>
                <Form.Control
                  onChange={this.handleImageChange}
                  type='text'
                  placeholder={this.state.image}
                />
              </Form.Group>
              <Button type='submit'>Submit!</Button>
            </Form>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

export default UpdateBook;