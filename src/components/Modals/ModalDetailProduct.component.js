import React, { Component } from 'react'
import { Button, Modal, Table, Form } from 'react-bootstrap';
export default class ModalDetailProduct extends Component {
  render() {
    const { isShow, title, handleOnChange, btnClose, image, name, content, price } = this.props;
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
                  <th colSpan="1">Image</th>
                  <td>
                    <Form.Group >
                      {/* <Form.Control
                        type="text"
                        // name="modalName"
                        // value={name}
                        // onChange={handleOnChange} 
                        /> */}
                      {/* <Button variant="outline-danger" onClick={() => btnUploadImage()}>Upload</Button> */}
                      <Form.Control
                        onChange={handleOnChange} 
                        type="file" 
                        name="modalImage" 
                        placeholder="choose file" 
                        // value={image}
                        />
                      <div className="div-card-content">
                        {image}
                      </div>
                    </Form.Group>
                  </td>
                </tr>
                <tr>
                  <th colSpan="1">Name</th>
                  <td>
                    <Form.Group >
                      <Form.Control
                        type="text"
                        name="modalName"
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
                        name="modalContent"
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
                        name="modalPrice"
                        value={price}
                        onChange={handleOnChange} />
                    </Form.Group>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => btnClose()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
