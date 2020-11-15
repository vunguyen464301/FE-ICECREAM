import React, { Component } from 'react'
import dataMenuUser from '../../utils/dataMenuUser.js';
import ListMenuAdmin from '../../components/Lists/ListMenuAdmin.component';
import UpdateAccountPasswordPage from '../Account/UpdateAccountPassword.page';
import ProfileAccountPage from '../Account/ProfileAccount.page';
import { signOut } from '../../services/actions/signin.action';
import { connect } from 'react-redux';
import OrdersPage from './User.Orders.page.js'
import {
  Route
} from "react-router-dom";
import '../../css/pagesCSS/User.page.css';
class UserPage extends Component {
  btnChoose = (id) => {
    const { signOut, history } = this.props;
    switch (id) {
      case 1:
        history.push('/user/orders');
        break;
      case 2:
        history.push('/user/profile');
        break;
      case 3:
        history.push('/user/');
        break;
      case 4:
        signOut();
        localStorage.removeItem('auth');
        history.push('/');
        break;
      default:
        console(id + " break");
        break;
    }
  }

  render() {
    const { match } = this.props;
    return (
      <div className="content">
        <ListMenuAdmin
          data={dataMenuUser}
          btnChoose={this.btnChoose}
        />
        <Route
          exact
          path={match.url}
          component={UpdateAccountPasswordPage} />
        <Route
          exact
          path={`${match.url}/orders`}
          component={OrdersPage} />
        <Route
          exact
          path={`${match.url}/profile`}
          component={ProfileAccountPage} />
      </div>
    )
  }
}
const mapState = ({ signin }) => ({
  signin
})

const mapDispatch = {
  signOut
}

export default connect(
  mapState,
  mapDispatch
)(UserPage)