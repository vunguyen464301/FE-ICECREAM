import React, { Component } from 'react'
import { Table} from 'react-bootstrap';
import ItemAdminFeedbackComponent from '../../components/Items/ItemAdminFeedback.component';
export default class ListAdminFeedback extends Component {
  render() {
    const { listProductFeedback, btnRemove} = this.props;
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="1">id</th>
              <th colSpan="1">productId</th>
              <th colSpan="2">productName</th>
              <th colSpan="1">AccountId</th>
              <th colSpan="2">AccountName</th>
              <th colSpan="3">Content</th>
              <th colSpan="1">Created Date</th>
              <th colSpan="1">Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              listProductFeedback.map(e =>
                <ItemAdminFeedbackComponent
                data={e}
                btnRemove={()=>btnRemove(e.id)}
                />
              )
            }

          </tbody>
        </Table>
      </div>
    )
  }
}
