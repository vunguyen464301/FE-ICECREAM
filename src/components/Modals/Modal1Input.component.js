import React, { Component } from 'react'
import { Button, Modal, Table, Form } from 'react-bootstrap';
export default class Modal1Input extends Component {
	render() {
		const { isShow, title, content, field1, nameInput1, name1, handleOnChange, btnClose , btnCreate } = this.props;
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
									<th colSpan="1">Content</th>
									<td>
										{content}
									</td>
								</tr>
								<tr>
									<th colSpan="1">{field1}</th>
									<td>
										<Form.Group >
											<Form.Control
												type="text"
												name={nameInput1}
												value={name1}
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
