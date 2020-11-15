import React, { Component } from 'react'
import { Button} from 'react-bootstrap';
export default class ItemAdminOrders extends Component {
  render() {
    const { data, btnDisable, btnRemove, btnUpdate } = this.props;
    return (
      <tr key={data.id}>
        <td colSpan="1">{data.id}</td>
        <td colSpan="2">{data.name}</td>
        <td colSpan="1">{data.accountId}</td>
        <td colSpan="5">{data.note}</td>
        <td colSpan="1">{data.price}</td>
        <td colSpan="1">{data.created_date}</td>
        <td colSpan="1"> <Button variant={data.statusId === 1 ? "outline-warning" : "warning"} onClick={() => btnDisable()}>disable</Button></td>
        <td colSpan="1"> <Button variant="danger" onClick={() => btnRemove()}>REMOVE</Button></td>
        <td colSpan="1"> <Button variant="outline-success" onClick={() => btnUpdate()} className="mr-2">Update</Button></td>
      </tr>

    )
  }
}
