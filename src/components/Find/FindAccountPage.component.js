import React, { Component } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap';
export default class FindAccountPage extends Component {
  render() {
    const { handleOnChange, btnFindAccountRole, value, name} = this.props;
    return (
      <div className="mt-3">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={value}
            name={name}
            onChange={handleOnChange}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={() => btnFindAccountRole()}>Find</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}
