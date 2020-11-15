import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
export default class ItemAdminProduct extends Component {
  render() {
    const {data, btnDetails, btnDisable, btnRemove, btnUpdate}= this.props;
    return (

        <tr key={data.id}>
          <td colSpan="1">{data.id}</td>
          {/* <th colSpan="5">{image}</th> */}
          <td colSpan="2">{data.name}</td>
          <td colSpan="2">{data.price}</td>
          <td colSpan="1">{data.catalogueId}</td>
          <td colSpan="1">
            <Button variant="primary" onClick={() => btnDetails()}>DETAIL</Button>
          </td>
          <td colSpan="1">
            <Button variant="danger" onClick={() => btnRemove()}>REMOVE</Button>
          </td>
          <td colSpan="1">
            <Button variant={data.statusId === 1 ? "outline-warning" : "warning"} onClick={() => btnDisable()}>disable</Button>
          </td>
          <td colSpan="1">
            <Button variant="outline-success" className="mr-2" onClick={() => btnUpdate()}>Update</Button>
          </td>
        </tr>
   
    )
  }
}
