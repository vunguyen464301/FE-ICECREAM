import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import ItemTableAccountComponent from '../Items/ItemTableAccount.component';
export default class ListTableAccount extends Component {
  render() {
    const { dataTable, btnRole, btnDetail, btnRemove, btnDisable, btnUpdate } = this.props;

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="1">id</th>
              <th colSpan="5">Username</th>
              <th colSpan="5">Fullname</th>
              <th colSpan="5">Email</th>
              <th colSpan="1">Role</th>
              <th colSpan="1">Created date</th>
              <th colSpan="1">Details</th>
              <th colSpan="1">Remove</th>
              <th colSpan="1">Disable</th>
              <th colSpan="1">Update</th>
            </tr>
          </thead>
          <tbody>
          {dataTable.map(d=>
            <ItemTableAccountComponent 
            key={d.id}
            id={d.id}
            username={d.username}
            fullname={d.details!==null?d.fullname:null}
            email={d.details!==null?d.email:null}
            roleId={d.roleId}
            statusId={d.statusId}
            created_date={d.created_date}
            btnRole={()=>btnRole(d.username)}
            btnDetail={()=>btnDetail(d.username)}
            btnRemove={()=>btnRemove(d.id)}
            btnDisable={()=>btnDisable(d.username)}
            btnUpdate={()=>btnUpdate(d)}
            />)}
          </tbody>
        </Table>
      </div>
    )
  }
}
