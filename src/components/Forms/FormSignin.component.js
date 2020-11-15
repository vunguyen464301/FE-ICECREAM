import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
export default class FormSignin extends Component {
  render() {
    const { handleOnChange, btnSignup, btnSignin, username, password } = this.props;
    return (
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
              <input type="password" placeholder="password" name='password'
                onChange={handleOnChange}
                value={password}
              />
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
              <Button onClick={() => btnSignup()} variant="light" className="button-signup">Sign up</Button>
              <Button onClick={() => btnSignin()} variant="primary" className="button-signin">Sign in</Button>
            </td>
          </tr>
          </tbody>  
        </table>
    )
  }
}
