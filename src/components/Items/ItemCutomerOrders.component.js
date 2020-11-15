import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
export default class ItemCustomerOrders extends Component {
  render() {
    const { data, btnRemove } = this.props;

    return (
      <tr key={data.id}>
        <td colSpan="1">{data.id}</td>
        <td colSpan="2">{data.name}</td>
        <td colSpan="5">{data.note}</td>
        <td colSpan="1">{data.price}</td>
        <td colSpan="1">{data.created_date}</td>
        <td colSpan="1"> <Button variant="danger" onClick={() => btnRemove()}>REMOVE</Button></td>
      </tr>

    )
  }
}
