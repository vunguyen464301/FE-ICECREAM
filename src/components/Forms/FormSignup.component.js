import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
export default class FormSignup extends Component {
  render() {
    const { username, password1, password2, handleOnChange, btnSignup, btnSignin } = this.props;
    return (
      <div>
        <table cellSpacing="0" cellPadding="5">
          <tbody>
            <tr>
              <td className="text-signin">
                Username
              </td>
              <td>
                <input type="text" placeholder="username" name='username'
                  onChange={handleOnChange}
                  value={username}
                />
              </td>
            </tr>
            <tr cellPadding="10">
              <td className="text-password">
                Password
              </td>
              <td>
                <input type="password" placeholder="password" name='password1'
                  onChange={handleOnChange}
                  value={password1}
                />
              </td>
            </tr>
            <tr cellPadding="10">
              <td className="text-password">
                Password again
              </td>
              <td>
                <input type="password" placeholder="password again" name='password2'
                  onChange={handleOnChange}
                  value={password2}
                />
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td>
                <Button onClick={() => btnSignin()} variant="light" className="button-signup">Sign in</Button>
                <Button onClick={() => btnSignup()} variant="primary" className="button-signin">Sign up</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
