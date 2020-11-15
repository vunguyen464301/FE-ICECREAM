import React, { Component } from 'react';
import ListCardProductComponent from './ListCardProduct.component';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
export default class ListCatalogue extends Component {
  render() {
    const { listDataCatalogue, btnOrders, btnDetails } = this.props
    return (
      <div>
        <Tab.Container defaultActiveKey={1}>
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                {
                  listDataCatalogue.map(data =>
                    <Nav.Item key={data.id} >
                   
                      <Nav.Link eventKey={data.id} variant="secondary">
                        {data.name}
                      </Nav.Link>
                   
                    </Nav.Item>
                  )
                }
              </Nav>
            </Col>
          <Col sm={10}>
            <Tab.Content>
              <ListCardProductComponent
                listDataCatalogue={listDataCatalogue}
                btnOrders={btnOrders}
                btnDetails={btnDetails}
              />
            </Tab.Content>
          </Col>
          </Row>
        </Tab.Container>
      </div >
    )
  }
}
