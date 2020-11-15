import React, { Component } from 'react'
import { authApi } from '../../api/auth.api';
import { Button } from 'react-bootstrap';
import FindAccountPage from '../../components/Find/FindAccountPage.component'
import ListTableAccountComponent from '../../components/Lists/ListTableAccount.component'
import ModalNotificationYesNo from '../../components/Modals/ModalNotificationYesNo.component'
import ModalDetailAccountComponent from '../../components/Modals/ModalDetailAccount.component'
export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTable: [],

      findUsername: "",
      findRoleId: 2,
      findPage: 0,

      isShow: false,

      id: null,
      isShowWarning: false,
      title: "",
      content: "",

      username: "",
      fullname: "",
      email: "",
      gender: "",
    };
  }
  componentDidMount() {
    const { findUsername, findRoleId } = this.state;
    this.getPageAccount(findUsername, findRoleId, 0);
  }
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value.trim()
    });
  }
  btnFindAccountRole = async () => {
    await this.setState({ findPage: 0 })
    await this.setPage();
  }
  btnRole = (username) => {
    const { dataTable } = this.state;
    let d = [];
    dataTable.forEach(element => {
      if (element.username === username) {
        d.push({ ...element, roleId: [element.roleId[0] === 3 ? 2 : 3] })
      } else {
        d.push(element);
      }
    });
    this.setStatedefaultandData(d);
  }
  btnDetail = (username) => {
    const { dataTable } = this.state;
    let result = dataTable.filter(d => d.username === username);
    this.setState({
      fullname: result[0].fullname,
      email: result[0].email,
      gender: result[0].gender,
      username: username,
      isShow: true
    })
  }
  btnRemove = (id) => {
    this.setState({
      isShowWarning: true,
      id: id,
      title: "Warning delete !",
      content: "Do you want remove this account ?"
    })
  }
  btnDisable = (username) => {
    const { dataTable } = this.state;
    let d = [];
    dataTable.forEach(element => {
      if (element.username === username) {
        d.push({ ...element, statusId: element.statusId === 1 ? 2 : 1 })
      } else {
        d.push(element);
      }
    });
    this.setStatedefaultandData(d);
  }
  btnUpdate = async (account) => {
    await authApi.updateAccount(account).then(res => res)
      .then(data => {
        console.log(true);
      }
      )
      .catch(function (error) {
        console.log(error);
      });
    await this.setPage();
  }
  btnCloseModalDetail = () => {
    const { dataTable, username, fullname, email, gender } = this.state;
    let data = [];
    dataTable.forEach(element => {
      if (element.username === username) {
        data.push({ ...element, fullname: fullname, email: email, gender: gender })
      } else {
        data.push(element);
      }
    });
    this.setStatedefaultandData(data);
  }
  btnCloseModalWarning = () => {
    this.setState({
      id: null,
      title: "",
      content: "",
      isShowWarning: false
    });
  }
  btnYesWarning = () => {
    this.deleteAccount()
    this.btnCloseModalWarning();
  }
  btnNextPage = async () => {
    await this.setState(prev => ({ findPage: prev.findPage + 1 }))
    this.setPage();
  }
  btnPrevPage = async () => {
    await this.setState(prev => ({ findPage: prev.findPage - 1 }))
    this.setPage();
  }
  setPage = () => {
    const { findUsername, findRoleId, findPage } = this.state;
    this.getPageAccount(findUsername, findRoleId, findPage);
  }
  getPageAccount = async (username, roleId, page) => {
    await authApi.getPageAccountByName(username, roleId, page).then(res => res.content)
      .then(data => {
        this.setState({ dataTable: data });
      }
      )
      .catch(function (error) {
        console.log(error);
      });
  }
  setStatedefaultandData = (d) => {
    this.setState({
      id: null,
      title: "",
      content: "",
      username: "",
      fullname: "",
      email: "",
      gender: "",
      isShow: false,
      isShowWarning: false,
      dataTable: d
    })
  }
  deleteAccount = async () => {
    const { id } = this.state;
    await authApi.deleteAccountId(id).then(res => res)
      .then(data => {
        if (data) {
          this.setPage();
        } else {
          console.log("Fail !")
        }
      }
      )
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const { dataTable, isShow, isShowWarning, fullname, email, gender, title, content, findUsername, findPage } = this.state;
    return (
      <div>
        <FindAccountPage
          value={findUsername}
          name="findUsername"
          handleOnChange={this.handleOnChange}
          btnFindAccountRole={() => this.btnFindAccountRole()}
        />
        <div style={{ height: "400px" }}>
          {dataTable.length !== 0 ?
            <ListTableAccountComponent
              dataTable={dataTable}
              btnRole={this.btnRole}
              btnDetail={this.btnDetail}
              btnRemove={this.btnRemove}
              btnDisable={this.btnDisable}
              btnUpdate={this.btnUpdate}
            /> : <div className="div-center"><h3>NO DATA</h3></div>}
        </div>
        <div className="pb-2">
          <div className="div-center">
            {findPage !== 0 ? <Button variant="outline-primary" onClick={() => this.btnPrevPage()} className="mr-2">Previous</Button> : null}
            {dataTable.length > 0 ? <Button variant="outline-primary" onClick={() => this.btnNextPage()} className="ml-2">Next</Button> : null}
          </div>
        </div>

        <ModalNotificationYesNo
          isShow={isShowWarning}
          title={title}
          content={content}
          btnClose={() => this.btnCloseModalWarning()}
          btnYes={() => this.btnYesWarning()}
        />
        <ModalDetailAccountComponent
          isShow={isShow}
          title="Detail"
          fullname={fullname}
          email={email}
          gender={gender}
          handleOnChange={this.handleOnChange}
          btnClose={() => this.btnCloseModalDetail()}
        />
      </div>
    )
  }
}
