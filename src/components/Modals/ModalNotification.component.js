import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
export default class ModalNotification extends Component {
  render() {
    const { isShow, title, notitication, btnClose } = this.props;
    return (
      <Modal show={isShow} onHide={btnClose}>
        <Modal.Header closeButton onClick={() => btnClose()}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{notitication}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => btnClose()}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
