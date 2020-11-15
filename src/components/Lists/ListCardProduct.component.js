import React, { Component } from 'react'
import { Tab } from 'react-bootstrap';
import ItemCardProductComponent from '../Items/ItemCardProduct.component';
export default class ListCardProduct extends Component {
  render() {
    const { listDataCatalogue, btnOrders, btnDetails } = this.props;

    return (
      listDataCatalogue.map(data =>
        <Tab.Pane key={data.id} eventKey={data.id}>
          {data.listProduct.map(item =>
            <ItemCardProductComponent
              key={item.id}
              item={item}
              btnOrders={btnOrders}
              btnDetails={btnDetails}
            />
          )}
        </Tab.Pane>
      )

    )
  }
}
