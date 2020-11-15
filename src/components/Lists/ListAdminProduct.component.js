import React, { Component } from 'react'
import { Tab, Nav, Col, Row, InputGroup, FormControl, Button, Table } from 'react-bootstrap';
import ItemAdminProductComponent from '../Items/ItemAdminProduct.component'
// import {} from '../'
export default class ListAdminProduct extends Component {
  render() {
    const { search, handleOnChange, listCatalogue, btnSearch, btnDetails, btnRemove, btnDisable, btnUpdate, btnAdd } = this.props;
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
          {listCatalogue !== undefined ?
            <Row>
              <Col sm={2}>
                <Nav variant="pills" className="flex-column">
                  {listCatalogue.map(e =>
                    <Nav.Item key={e.id}>
                      <Nav.Link eventKey={e.id}>{e.name}</Nav.Link>
                    </Nav.Item>
                  )}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {listCatalogue.map(e =>
                    <Tab.Pane eventKey={e.id} key={e.id}>
                      <div className="mt-3">
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Find product"
                            aria-label="Find product"
                            aria-describedby="basic-addon2"
                            value={search}
                            name="search"
                            onChange={handleOnChange}
                          />
                          <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={() => btnSearch(e.id)}>Find</Button>
                          </InputGroup.Append>
                          <Button variant="primary" className="ml-5" onClick={() => btnAdd(e.id)}>add </Button>
                        </InputGroup>

                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th colSpan="1">id</th>
                              {/* <th colSpan="3">Image</th> */}
                              <th colSpan="2">Name</th>
                              <th colSpan="2">Price</th>
                              <th colSpan="1">CatalogueId</th>
                              <th colSpan="1">Details</th>
                              <th colSpan="1">Remove</th>
                              <th colSpan="1">Disable</th>
                              <th colSpan="1">Update</th>
                            </tr>
                          </thead>
                          <tbody>
                            {e.listProduct.map(d =>
                              <ItemAdminProductComponent
                                key={d.id}
                                data={d}
                                btnDetails={() => btnDetails(d.id, d.image, d.name, d.content, d.price)}
                                btnDisable={() => btnDisable(d.id)}
                                btnRemove={() => btnRemove(d.id)}
                                btnUpdate={() => btnUpdate(d)}
                              />
                            )}
                          </tbody>
                        </Table>

                      </div>
                    </Tab.Pane>
                  )}
                </Tab.Content>
              </Col>
            </Row> : <div className="div-center"><h3>NO DATA</h3></div>
          }

        </Tab.Container>
      </div>
    )
  }
}
