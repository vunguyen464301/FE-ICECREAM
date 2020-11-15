import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
export default class FormUpdatePassword extends Component {
  render() {
    const { passwordOld, passwordNew1, passwordNew2, handleOnChange, btnUpdatePassword, btnClear } = this.props
    return (
      <div>
        <table cellSpacing="0" cellPadding="5">
          <tbody>
            <tr>
              <td className="text-signin">
                Old Password
                </td>
              <td>
                <input type="password" placeholder="Old Password" name='passwordOld'
                  onChange={handleOnChange}
                  value={passwordOld}
                />
              </td>
            </tr>
            <tr cellPadding="10">
              <td className="text-password">
                New Password
                </td>
              <td>
                <input type="password" placeholder="New Password" name='passwordNew1'
                  onChange={handleOnChange}
                  value={passwordNew1}
                />
              </td>
            </tr>
            <tr cellPadding="10">
              <td className="text-password">
                Re-type new Password
                </td>
              <td>
                <input type="password" placeholder="Re-type new Password" name='passwordNew2'
                  onChange={handleOnChange}
                  value={passwordNew2}
                />
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <Button onClick={() => btnUpdatePassword()} variant="light" className="button-signup">Submit</Button>
                <Button onClick={() => btnClear()} variant="primary" className="button-signin">Clear</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
