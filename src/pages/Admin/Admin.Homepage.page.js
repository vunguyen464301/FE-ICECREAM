import React, { Component } from 'react';
import ListMenuAdmin from '../../components/Lists/ListMenuAdmin.component';
import dataMenuAdmin from '../../utils/dataMenuAdmin.js';
import UpdateAccountPasswordPage from '../Account/UpdateAccountPassword.page';
import ProfileAccountPage from '../Account/ProfileAccount.page';
import UserPage from './Admin.User.page';
import CustomerPage from './Admin.Customer.page';
import ProductPage from './Admin.Product.page';
import FeedbackPage from './Admin.Feedback.page';
import OrderPage from './Admin.Orders.page';
import { connect } from 'react-redux';
import { signOut } from '../../services/actions/signin.action';
import { checkRole } from '../../securityConfig/checkRole.js';
import {
  Route
} from "react-router-dom";
import '../../css/pagesCSS/Admin.page.css';
class AdminPage extends Component {

  btnChoose = (id) => {
    const { signOut, history } = this.props;
    switch (id) {
      case 1:
        history.push('/admin/user');
        break;
      case 2:
        history.push('/admin/customer');
        break;
      case 3:
        history.push('/admin/product');
        break;
      case 4:
        history.push('/admin/feedback');
        break;
      case 5:
        history.push('/admin/order');
        break;
      case 6:
        history.push('/admin/profile');
        break;
      case 7:
        history.push('/admin/');
        break;
      case 8:
        signOut();
        localStorage.removeItem('auth');
        history.push('/');
        break;
      default:
        console(id + " break");
        break;
    }
  }
  btnGotoPage = () => {
    const { signin, history } = this.props;
    let localAuth = localStorage.getItem('auth')
    checkRole(signin, history, localAuth);
  }
  componentDidMount() {
    // this.btnGotoPage();
    this.btnGotoPage();
    // console.log(signin)
  }

  render() {
    const { match } = this.props;

    return (
      <div className="content">
        <ListMenuAdmin
          data={dataMenuAdmin}
          btnChoose={this.btnChoose}
        />
        <Route
          exact
          path={match.url}
          component={UpdateAccountPasswordPage} />
        <Route
          exact
          path={`${match.url}/user`}
          component={UserPage} />
        <Route
          exact
          path={`${match.url}/customer`}
          component={CustomerPage} />
        <Route
          exact
          path={`${match.url}/product`}
          component={ProductPage} />
        <Route
          exact
          path={`${match.url}/feedback`}
          component={FeedbackPage} />
        <Route
          exact
          path={`${match.url}/order`}
          component={OrderPage} />
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
)(AdminPage)