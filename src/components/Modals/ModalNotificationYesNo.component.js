import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
export default class ModalNotificationYesNo extends Component {
  render() {
    const {isShow, title,content,btnClose, btnYes} = this.props;
    return (
      <div>
        <Modal show={isShow} onHide={btnClose}>
          <Modal.Header closeButton onClick={() => btnClose()}>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{content}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => btnClose()}>No</Button>
            <Button variant="outline-secondary" onClick={() => btnYes()}>Yes</Button>
          </Modal.Footer>

        </Modal>
      </div>
    )
  }
}
