import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateBook from './UpdateBook';

class UpdateFormModal extends React.Component {
  render() {
    return (


      <Modal show={this.props.showUpdate} onHide={this.props.handleOnHide}>
        <Modal.Header closeButton>
          <Modal.Title>Update Book Information</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <UpdateBook 
          handleUpdateBook={this.props.handleUpdateBook}
          selectedBook={this.props.selectedBook} 
          handleOnHide={ this.props.handleOnHide}
          />

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleOnHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default UpdateFormModal;
