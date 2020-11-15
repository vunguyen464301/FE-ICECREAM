import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import ItemCustomerOrdersComponent from '../Items/ItemCutomerOrders.component'
export default class ListCustomerOrders extends Component {
  render() {
    const { listOrdersDetail, btnRemove } = this.props;
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="1">id</th>
            <th colSpan="2">name</th>
            <th colSpan="5">note</th>
            <th colSpan="1">price</th>
            <th colSpan="1">Created date</th>
            <th colSpan="1">REMOVE</th>
          </tr>
        </thead>
        <tbody>

          {listOrdersDetail !== undefined ? listOrdersDetail.map(data =>
            <ItemCustomerOrdersComponent
              key={data.id}
              data={data}
              btnRemove={() => btnRemove(data.id)}
            />
          ) : <tr><td><div className="div-center"><h3>NO DATA</h3></div></td></tr>}

        </tbody>
      </Table>
    )
  }
}
