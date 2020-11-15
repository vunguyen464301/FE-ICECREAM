import React, { Component } from 'react';
import { connect } from 'react-redux'
import ModalNotificationComponent from '../../components/Modals/ModalNotification.component';
import { signInSuccess } from '../../services/actions/signin.action';
import FormUpdateProfile from '../../components/Forms/Form3Field.component';
import { authApi } from '../../api/auth.api'
import '../../css/pagesCSS/ProfileAccount.page.css';
class ProfileAccount extends Component {
  state = {
    modalNotification: {
      isShow: false,
      title: "",
      notitication: ""
    },

    form3field: {
      field1: {
        title: "Fullname",
        type: "text",
        placeholder: "Input fullname",
        name: "form3field_field1_fullname",
        value: ""
      },
      field2: {
        title: "Email",
        type: "text",
        placeholder: "Input email",
        name: "form3field_field2_email",
        value: ""
      },
      field3: {
        title: "Gender",
        type: "text",
        placeholder: "Input email",
        name: "form3field_field3_gender",
        value: ""
      }
    }

  }
  componentDidMount() {
    this.setProfile();
  }

  handleOnChangeField = async (e) => {
    let targetName = "" + e.target.name;
    let value = e.target.value;
    let form = await targetName.split("_");
    let nameForm = form[0];
    let nameField = form[1];
    await this.setState(prevState => {
      let form = {
        ...prevState[nameForm]
      }
      form[nameField].value = value;
      return { form }
    })
  }

  setProfile = async () => {
    const { signin } = this.props;
    await this.setState(prevState => {
      let form = {
        ...prevState.form3field
      }
      form.field1.value = signin.account.fullname;
      form.field2.value = signin.account.email;
      form.field3.value = signin.account.gender;
      return { form }
    })
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

  btnSave = async () => {
    const{signin,signInSuccess} = this.props;
    const{form3field}=this.state;
    let account={...signin.account, fullname:form3field.field1.value, email:form3field.field2.value,gender:form3field.field3.value};
    await authApi.updateAccount(account)
      .then(res => res)
      .then(data => {
       signInSuccess(data)
      }
      )
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { modalNotification, form3field } = this.state;
    return (
      <div>
        <div className="div-text">
          Update Account
        </div>
        <div className="div-center">
          <FormUpdateProfile
            btnSubmit={() => this.btnSave()}
            titleButton={"Save"}
            form={form3field}
            onChange={this.handleOnChangeField}
          />
        </div>

        <ModalNotificationComponent
          isShow={modalNotification.isShow}
          title={modalNotification.title}
          notitication={modalNotification.notitication}
          btnClose={() => this.btnCloseNotification()}
        />
      </div>
    )
  }
}
const mapState = ({ signin }) => ({
  signin
})
const mapDispatch = {
  signInSuccess,
}

export default connect(
  mapState,
  mapDispatch
)(ProfileAccount)