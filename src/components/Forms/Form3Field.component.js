import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
export default class FormUpdatePassword extends Component {
  render() {
    const { btnSubmit, titleButton, onChange, form } = this.props

    return (
      <div >
        <table cellSpacing="0" cellPadding="5">
          <tbody>
            <tr >
              <td className="text-signin">
                {form.field1.title}
              </td>
              <td>
                <input type={form.field1.type}
                  placeholder={form.field1.placeholder}
                  name={form.field1.name}
                  onChange={onChange}
                  value={form.field1.value}
                />
              </td>
            </tr>
            <tr >
              <td>
                {form.field2.title}
              </td>
              <td>
                <input type={form.field2.type}
                  placeholder={form.field2.placeholder}
                  name={form.field2.name}
                  onChange={onChange}
                  value={form.field2.value}
                />
              </td>
            </tr>
            <tr >
              <td >
                {form.field3.title}
              </td>
              <td>
                <input type={form.field3.type}
                  placeholder={form.field3.placeholder}
                  name={form.field3.name}
                  onChange={onChange}
                  value={form.field3.value}
                />
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <Button onClick={() => btnSubmit()} variant="light" className="button-signup">{titleButton}</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
