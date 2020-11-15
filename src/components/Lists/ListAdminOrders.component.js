import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import ItemAdminOrdersComponent from '../Items/ItemAdminOrders.component'
export default class ListAdminOrders extends Component {
  render() {
    const { listOrdersDetail, btnDisable, btnRemove, btnUpdate } = this.props;
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="1">id</th>
            <th colSpan="2">name</th>
            <th colSpan="1">ByAccountId</th>
            <th colSpan="5">note</th>
            <th colSpan="1">price</th>
            <th colSpan="1">Created date</th>
            <th colSpan="1">Disable</th>
            <th colSpan="1">REMOVE</th>
            <th colSpan="1">Update</th>
          </tr>
        </thead>
        <tbody>

          {listOrdersDetail !== undefined ? listOrdersDetail.map(data =>
            <ItemAdminOrdersComponent
              key={data.id}
              data={data}
              btnDisable={() => btnDisable(data.id)}
              btnRemove={() => btnRemove(data.id)}
              btnUpdate={() => btnUpdate(data)}
            />
          ) : <tr><td><div className="div-center"><h3>NO DATA</h3></div></td></tr>}

        </tbody>
      </Table>
    )
  }
}
