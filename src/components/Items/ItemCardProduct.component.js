import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';;
export default class ItemCardProduct extends Component {
  render() {
    const { item, btnOrders, btnDetails } = this.props;
    return (
      <Card className="div-card" >
        <Card.Img className="div-card-img" 
        onClick={() => btnDetails(item.id)} 
        variant="top" 
        src={item.image.length>0?require(`../../images/${item.image}`):require( "../../images/Pineapple ice cream(300x300).jpg")} />
        <Card.Body>
          <Card.Title className="div-card-name">{item.name}</Card.Title>
          <Card.Text className="div-card-content">
            {item.content}
          </Card.Text>
          <Button variant="outline-primary" onClick={() => btnOrders(item.id)}>Order </Button>
          <Button variant="outline-danger" className="float-right" onClick={() => btnDetails(item.id)}>Detail </Button>
        </Card.Body>
      </Card>
    )
  }
}
