import React, { Component } from 'react'
import { Button, Modal, Table, Form } from 'react-bootstrap';
export default class ModalAddProduct extends Component {
  render() {
    const { isShow, title, handleOnChange, btnCreate, btnClose, name, content, price } = this.props;
    return (
      <div>
        <Modal show={isShow} onHide={() => btnClose()}>
          <Modal.Header closeButton onClick={() => btnClose()}>
            <Modal.Title >{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <th colSpan="1">Name</th>
                  <td>
                    <Form.Group >
                      <Form.Control
                        type="text"
                        name="modalNameCreate"
                        value={name}
                        onChange={handleOnChange} />
                    </Form.Group>
                  </td>
                </tr>
                <tr>
                  <th colSpan="1">Content</th>
                  <td>
                    <Form.Group >
                      <Form.Control
                        type="text"
                        name="modalContentCreate"
                        value={content}
                        onChange={handleOnChange} />
                    </Form.Group>
                  </td>
                </tr>
                <tr>
                  <th colSpan="1">Price</th>
                  <td>
                    <Form.Group >
                      <Form.Control
                        type="number"
                        name="modalPriceCreate"
                        value={price}
                        onChange={handleOnChange} />
                    </Form.Group>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => btnCreate()}>Create</Button>
            <Button variant="outline-secondary" onClick={() => btnClose()}>Close</Button>
          </Modal.Footer>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
