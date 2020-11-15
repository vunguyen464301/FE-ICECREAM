import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
export default class ItemTableAccount extends Component {
  render() {
    const { id, username, fullname, email, roleId, statusId, created_date, btnRole, btnDetail, btnRemove, btnDisable, btnUpdate } = this.props;
    return (
      <tr>
        <td colSpan="1">{id}</td>
        <th colSpan="5">{username}</th>
        <td colSpan="5">{fullname ? fullname : ""}</td>
        <td colSpan="5">{email ? email : ""}</td>
        <td colSpan="1">
          <Button variant="secondary" onClick={() => btnRole()}>
            {roleId[0]===1?"ADMIN":roleId[0]===2?"USER":"CUSTOMER"}
          </Button>
        </td>
        <td colSpan="1">{created_date ? created_date : ""}</td>
        <td colSpan="1">
          <Button variant="primary" onClick={() => btnDetail()}>DETAIL</Button>
        </td>
        <td colSpan="1">
          <Button variant="danger" onClick={() => btnRemove()}>REMOVE</Button>
        </td>
        <td colSpan="1">
          <Button variant={statusId === 1 ? "warning" : "outline-warning"} onClick={() => btnDisable()}>{statusId === 1 ? "Disable" : "Enable"}</Button>
        </td>
        <td colSpan="1">
          <Button variant="outline-success" onClick={() => btnUpdate()} className="mr-2">Update</Button>
        </td>
      </tr>
    )
  }
}
