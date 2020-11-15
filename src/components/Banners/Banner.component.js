import React, { Component } from 'react'
import '../../css/componentsCSS/Banner.component.css';
import {
  Link
} from "react-router-dom";
export default class Banner extends Component {
  btnGoToPage = () => {
    const { account } = this.props;

    if (account !== undefined) {
      let roleId = account.roleId[0];
      if (roleId === 1) {
        return <>
          <Link to='/admin'  ><div className="btn-manager-account">Manager ADMIN
            <br></br>
                Hi {account.username}
          </div>
          </Link>
        </>
      } else
        if (roleId === 2) {
          return <>
            <Link to='/user'  ><div className="btn-manager-account">Manager User
              <br></br>
                Hi {account.username}
            </div>
            </Link>
          </>
        } else
          if (roleId === 3) {
            return <>
              <Link to='/customer'  ><div className="btn-manager-account">
                Manager Customer
                <br></br>
                Hi {account.username}
              </div>
              </Link>

            </>
          }

    }
  }
  // componentDidMount() {
  //   // this.btnGoToPage();
  // }
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="background-banner">
        {!isLoggedIn ? <Link to='/signin'><div className="btn-signin-signup" >Sign in/Sign up</div></Link> :
          this.btnGoToPage()
        }
        <div className="div-banner">
          <div style={{ display: "inline-table" }}>
            <img src={require("../../images/logo.png")} className="img-icon-banner" alt=""/>
          </div>
          <Link to='/' className="btn-banner"> <div className="text-banner">Home</div></Link>
        </div>
      </div>
    )
  }
}
