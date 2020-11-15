import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom";
import { signIn, signInSuccess, signInFailure, signInWarning } from '../services/actions/signin.action';
import SigninPage from './Account/Signin.page';
import AdminPage from './Admin/Admin.Homepage.page';
// import UserPage from './Admin/User.page';
import CustomerPage from './Customer/Customer.Homepage.page';
import SignupPage from './Account/Signup.page';
import UserPage from './User/User.Homepage.page';
import DetailsProductPage from './Product/DetailsProduct.page';
import BannerComponent from '../components/Banners/Banner.component';
import FooterComponent from '../components/Footers/Footer.component';
import ModalLoadingComponent from '../components/Modals/ModalLoading.component';
import ModalNotificationComponent from '../components/Modals/ModalNotification.component';
import Homepage from './Homepage/Homepage.page'
import '../css/pagesCSS/Index.page.css';
class IndexPage extends Component {
  state = {
    modalNotification: {
      isShow: false,
      title: "",
      notitication: ""
    },
    stateAuth: ""
  }
  async componentDidMount() {
    await this.checkIsLoggedIn();

  }

  showNotification = (title, content) => {
    this.setState(prevState => {
      let modalNotification = { ...prevState.modalNotification };;
      modalNotification.isShow = true;
      modalNotification.title = title;
      modalNotification.notitication = content;
      return { modalNotification };
    })
  }
  checkIsLoggedIn = async () => {
    const { signIn } = this.props;
    let auth = await localStorage.getItem('auth');
    this.setState({ stateAuth: auth })
    if (auth !== null) {
      let localAuth = atob(auth).split(':');
      await localStorage.removeItem('auth');
      await signIn({ "username": localAuth[0], "password": localAuth[1] }, this.loginSuccess, this.loginFailure);
    }
  }
  loginSuccess = account => {
    const { stateAuth } = this.state;
    const { signInSuccess } = this.props;
    // let auth = Buffer.from(username + ':' + password).toString('base64');
    localStorage.setItem('auth', stateAuth);
    // this.showNotification("Successfully !", "...");
    signInSuccess(account);

  }
  loginFailure = err => {
    const { signInFailure } = this.props;
    signInFailure(err);
    localStorage.removeItem('auth');
    // this.showNotification("Fail !", err);
  }
  btnCloseNotification = () => {
    this.setState(prevState => {
      let modalNotification = { ...prevState.modalNotification };;
      modalNotification.isShow = false;
      return { modalNotification };
    })
  }
  btnOnclickHome = () => {
    // localStorage.removeItem('auth')
    // console.log(this.props)
    // this.props.history.push('/')

  }
  checkRouter = () => {
    const { signin } = this.props;
    //   setTimeout(function(){
    //     alert("Chào mừng bạn đến với freetuts.net");
    // }, 3000);
    if (signin.account !== null) {
      if (signin.account.roleId[0] === 1) {
        return <>
          <Route path="/admin" component={AdminPage} />
        </>
      } else if (signin.account.roleId[0] === 2) {
        return <>
          <Route path="/user" component={UserPage} />
        </>
      } else if (signin.account.roleId[0] === 3) {
        return <>
          <Route path="/customer" component={CustomerPage} />

        </>
      }
    }
    // else {
    //   return <>
    //     <Route path="/signin" component={SigninPage} />
    //     <Route path="/signup" component={SignupPage} />
    //   </>
    // }
  }

  render() {
    const { signin, signup } = this.props;
    const { modalNotification } = this.state;
    return (
      <div className="index-page">
        <BrowserRouter>
          <BannerComponent  account={signin.account !== null ? signin.account : undefined} isLoggedIn={signin.isLoggedIn} />
          <div className="content-page" >
            <Route path="/signin" component={SigninPage} />
            <Route path="/signup" component={SignupPage} />
            {this.checkRouter()}
            <Route
              exact
              path={'/'}
              component={Homepage} />
            <Route path="/product/:id" component={DetailsProductPage} />
          </div>

          <ModalLoadingComponent loading={signin.loading || signup.loading} />
          <ModalNotificationComponent
            isShow={modalNotification.isShow}
            title={modalNotification.title}
            notitication={modalNotification.notitication}
            btnClose={() => signin.isLoggedIn ? this.btnCloseNotification() : this.btnCloseNotification()}
          />
          <FooterComponent/>
        </BrowserRouter>
      </div>
    )
  }
}

const mapState = ({ signin, signup }) => ({
  signin,
  signup
});
const mapDispatch = {
  signIn,
  signInSuccess,
  signInWarning,
  signInFailure
}
export default connect(
  mapState,
  mapDispatch
)(IndexPage)