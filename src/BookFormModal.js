import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddBook from './AddBook';

class BookFormModal extends React.Component {
  render() {
    return (


      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Book Information</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <AddBook handleCreateBook={this.props.handleCreateBook}></AddBook>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default BookFormModal;
