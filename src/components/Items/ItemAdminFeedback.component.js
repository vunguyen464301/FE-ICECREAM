import React, { Component } from 'react'
import {  Button } from 'react-bootstrap';
export default class ItemAdminFeedback extends Component {
  render() {
    const {data, btnRemove} = this.props;
    return (
      <tr key={data.id}>
        <td colSpan="1">{data.id}</td>
        <td colSpan="1">{data.productId}</td>
        <td colSpan="2">{data.productName}</td>
        <td colSpan="1">{data.accountId}</td>
        <td colSpan="2">{data.accountName}</td>
        <td colSpan="3">{data.content}</td>
        <td colSpan="1">{data.created_date}</td>
        <td colSpan="1">
          <Button variant="danger" onClick={() => btnRemove()}>REMOVE</Button>
        </td>
      </tr>
    )
  }
}
