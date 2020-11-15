import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp, signUpSuccess, signUpFailure } from '../../services/actions/signup.action';
import FormSignupComponent from '../../components/Forms/FormSignup.component';
import ModalNotificationComponent from '../../components/Modals/ModalNotification.component';
import '../../css/pagesCSS/SignIn.page.css';
import {checkRole} from '../../securityConfig/checkRole.js';
class SignupPage extends Component {
  state = {
    username: "",
    password1: "",
    password2: "",
    modalNotification: {
      isShow: false,
      title: "",
      notitication: ""
    }
  }

  // async componentDidMount() {
  //   await this.btnGotoPage();
  // }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value.trim()
    });
  }
  btnGotoPage = async () => {
    const { signin, history } = this.props;
    let localAuth= localStorage.getItem('auth')
    checkRole(signin,history,localAuth);
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
  signUpSuccess = account => {
    const { signUpSuccess } = this.props;
    signUpSuccess(account);
    this.showNotification("Successfully", "...");
  }
  signUpFailure = err => {
    const { signUpFailure } = this.props;
    signUpFailure(err);
    this.setState(prevState => {
      let modalNotification = { ...prevState.modalNotification };;
      modalNotification.isShow = true;
      modalNotification.title = "Fail !";
      modalNotification.notitication = err;
      return { modalNotification };
    });
  }

  btnCloseNotification = () => {
    this.setState(prevState => {
      let modalNotification = { ...prevState.modalNotification };;
      modalNotification.isShow = false;
      return { modalNotification };
    })
  }
  btnSignup = () => {
    const { signUp } = this.props;
    const { username, password1, password2 } = this.state;
    if (username.length === 0 || password1.length === 0 || password2.length === 0) {
      this.showNotification("Fail !", "Username or 2 password cannot be left blank");
    } else if (password1 !== password2) {
      this.showNotification("Fail !", "password is not same as");
    }
    else {
      signUp({ username, password: password1 }, this.signUpSuccess, this.signUpFailure);
    }
  }
  btnSignin = () => {
    this.props.history.goBack();
  }
  render() {
    const { signup } = this.props;
    const { username, password1, password2, modalNotification } = this.state;
    return (
      <div className="div-center">
        <div className="div-top">
          <FormSignupComponent
            handleOnChange={this.handleOnChange}
            btnSignup={() => this.btnSignup()}
            btnSignin={() => this.btnSignin()}
            username={username}
            password1={password1}
            password2={password2}
          />
          <ModalNotificationComponent
            isShow={modalNotification.isShow}
            title={modalNotification.title}
            notitication={modalNotification.notitication}
            btnClose={() => signup.isCreate ? this.btnSignin() : this.btnCloseNotification()}
          />
        </div>
      </div>
    )
  }
}

const mapState = ({ signup, signin }) => ({
  signup,
  signin
})

const mapDispatch = {
  signUp,
  signUpSuccess,
  signUpFailure
}

export default connect(
  mapState,
  mapDispatch
)(SignupPage)