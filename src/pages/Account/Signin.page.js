import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signInSuccess, signInFailure, signInWarning } from '../../services/actions/signin.action';
import FormSigninComponent from '../../components/Forms/FormSignin.component';
import ModalNotificationComponent from '../../components/Modals/ModalNotification.component';
import '../../css/pagesCSS/SignIn.page.css';
import { checkRole } from '../../securityConfig/checkRole.js';
class SigninPage extends Component {
  state = {
    username: "",
    password: "",
    modalNotification: {
      isShow: false,
      title: "",
      notitication: ""
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value.trim()
    });
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
  loginSuccess = account => {
    const { signInSuccess } = this.props;
    const { username, password } = this.state;
    signInSuccess(account);
    let auth = Buffer.from(username + ':' + password).toString('base64');
    localStorage.setItem('auth', auth);
    this.showNotification("Successfully !", "...");

  }
  loginFailure = err => {
    const { signInFailure } = this.props;
    localStorage.removeItem('auth');
    signInFailure(err);
    this.showNotification("Fail !", err);
  }

  btnSignin = () => {
    const { signIn } = this.props;
    const { username, password } = this.state;
    if (username.length === 0 || password.length === 0) {
      this.showNotification("Fail !", "Username or 2 password cannot be left blank");
    } else {
      signIn({ username, password }, this.loginSuccess, this.loginFailure);
    }
  }

  btnSignup = () => {
    this.props.history.push('/signup');

  }
  btnCloseNotification = () => {
    this.setState(prevState => {
      let modalNotification = { ...prevState.modalNotification };;
      modalNotification.isShow = false;
      return { modalNotification };
    })
  }
  btnGotoPage = () => {
    const { signin, history } = this.props;
    let localAuth = localStorage.getItem('auth')
    checkRole(signin, history, localAuth);
  }
  async componentDidMount() {
    // await this.btnGotoPage();
  }
  render() {
    const { signin } = this.props;
    const { username, password, modalNotification } = this.state;
    return (

      <div className="div-center">
        <div className="div-top">
          <FormSigninComponent
            handleOnChange={this.handleOnChange}
            btnSignup={() => this.btnSignup()}
            btnSignin={() => this.btnSignin()}
            username={username}
            password={password}
          />
          <ModalNotificationComponent
            isShow={modalNotification.isShow}
            title={modalNotification.title}
            notitication={modalNotification.notitication}
            btnClose={() => signin.isLoggedIn ? this.btnGotoPage() : this.btnCloseNotification()}
          />
        </div>
      </div>

    )
  }
}

const mapState = ({ signin }) => ({
  signin
})

const mapDispatch = {
  signIn,
  signInSuccess,
  signInWarning,
  signInFailure
}

export default connect(
  mapState,
  mapDispatch
)(SigninPage)