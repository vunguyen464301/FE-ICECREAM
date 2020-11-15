import React, { Component } from 'react'
import { connect } from 'react-redux';
import FormUpdatePasswordComponent from '../../components/Forms/FormUpdatePassword.component'
import ModalNotificationComponent from '../../components/Modals/ModalNotification.component';
import '../../css/pagesCSS/UpdatePassword.page.css';
import { updateAccountPassword, signInSuccess, signInWarning } from '../../services/actions/signin.action';
class UpdateAccountPasswordPage extends Component {
  state = {
    passwordOld: "",
    passwordNew1: "",
    passwordNew2: "",
    modalNotification: {
      isShow: false,
      title: "",
      notitication: ""
    }
  }
  // async componentDidUpdate(){
  //   await this.btnGotoPage();
  // }

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
  btnCloseNotification = () => {
    this.setState(prevState => {
      let modalNotification = { ...prevState.modalNotification };;
      modalNotification.isShow = false;
      return { modalNotification };
    })
  }
  btnUpdatePassword = () => {
    const { signin, updateAccountPassword } = this.props;
    const { passwordOld, passwordNew1, passwordNew2 } = this.state;
    if(passwordOld.length===0||passwordNew1.length===0||passwordNew2.length===0){
      this.showNotification("Fail", "Password is not blank !")
    }else{
      if (passwordNew1 !== passwordNew2) {
        this.showNotification("Fail", "Password is not same as !")
      } else {
        updateAccountPassword({
          username:signin.account.username,
          passwordOld:passwordOld,
          passwordNew:passwordNew1
        },this.loginSuccess,this.loginWarning)
      }
    }
  }
  loginSuccess = (account) => {
    this.props.signInSuccess(account);
    //check password successful
    this.showNotification("Success", "Update account is successfully !");
  }
  loginWarning = (err) => {
    this.props.signInWarning(err);
    this.showNotification("Warning", err);
  }

  btnClear = () => {
    this.setState({
      passwordOld: "",
      passwordNew1: "",
      passwordNew2: ""
    })
  }

  render() {
    const { passwordOld, passwordNew1, passwordNew2, modalNotification } = this.state;
    return (
      <div>
        <div className="div-text">
          Update Password
        </div>
        <div className="div-center">
          <FormUpdatePasswordComponent
            handleOnChange={this.handleOnChange}
            btnUpdatePassword={() => this.btnUpdatePassword()}
            btnClear={() => this.btnClear()}
            passwordOld={passwordOld}
            passwordNew1={passwordNew1}
            passwordNew2={passwordNew2}
          />
          <ModalNotificationComponent
            isShow={modalNotification.isShow}
            title={modalNotification.title}
            notitication={modalNotification.notitication}
            btnClose={() => this.btnCloseNotification()}
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
  updateAccountPassword,
  signInSuccess,
  signInWarning
}

export default connect(
  mapState,
  mapDispatch
)(UpdateAccountPasswordPage)