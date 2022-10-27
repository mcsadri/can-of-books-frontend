import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class BookFormModal extends React.Component {
  render() {
    return (


      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{this.props.selectedBeast.description}</Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



    )
  }
}

export default BookFormModal;
