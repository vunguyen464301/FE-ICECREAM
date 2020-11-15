import React, { Component } from 'react'
import { Button, Modal, Table, Form } from 'react-bootstrap';
// import '../../css/componentsCSS/ModalLoading.component.css';
export default class ModalDetailAccount extends Component {
  render() {
    const { isShow, btnClose, title, fullname, email, gender, handleOnChange } = this.props;
    return (
      <Modal show={isShow} onHide={()=>btnClose()}>
        <Modal.Header closeButton onClick={() => btnClose()}>
          <Modal.Title >{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <th colSpan="1">Fullname</th>
                <td>
                  <Form.Group >
                    <Form.Control
                      type="text"
                      name="fullname"
                      value={fullname}
                      onChange={handleOnChange} />
                  </Form.Group>
                </td>
              </tr>
              <tr>
                <th colSpan="1">Email</th>
                <td>
                  <Form.Group >
                    <Form.Control
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleOnChange} />
                  </Form.Group>
                </td>
              </tr>
              {/* <tr>
                <th colSpan="1">Birthday</th>
                <td>
                  <Form.Group >
                    <Form.Control type="text"  value={birthday} onChange={handleOnChange}/>
                  </Form.Group>
                </td>
              </tr> */}
              <tr>
                <th colSpan="1">Gender</th>
                <td>
                  <Form.Group >
                    <Form.Control
                      type="text"
                      name="gender"
                      value={gender}
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
    )
  }
}
