import React, { Component } from 'react'
import ModalNotificationYesNoComponent from '../../components/Modals/ModalNotificationYesNo.component';
import ListAdminFeedbackComponent from '../../components/Lists/ListAdminFeedback.component';
import { authApi } from '../../api/auth.api'
export default class Feedback extends Component {
  state = {
    listProductFeedback: [],

    modalProductFeedbackId: undefined,
    modalIsShow: false,
    modalTitle: "",
    modalContent: ""
  }
  componentDidMount() {
    this.getDataFeedback();
  }
  getDataFeedback = async () => {
    await authApi.getProductFeedbackAll()
      .then(res => res)
      .then(data => {
        this.setState({ listProductFeedback: data })
      }
      )
      .catch(function (error) {
        console.log(error);
      });
  }
  btnYesRemoveProductFeedback = async () => {
    const { modalProductFeedbackId } = this.state
    await authApi.deleteFroductFeedback(modalProductFeedbackId)
      .then(res => res)
      .then(data => {
        console.log(data)
      }
      )
      .catch(function (error) {
        console.log(error);
      });
      this.getDataFeedback();
      this.btnClose();
  }
  btnClose = () => {
    this.setState({
      modalProductFeedbackId: undefined,
      modalIsShow: false,
      modalTitle: "",
      modalContent: ""
    })
  }
  btnRemove = (id) => {
    this.setState({
      modalProductFeedbackId: id,
      modalIsShow: true,
      modalTitle: "Warning !",
      modalContent: "Are you sure delete this product feedback ?"
    })
  }
  render() {
    const { listProductFeedback, modalIsShow, modalTitle, modalContent } = this.state
    return (
      <div style={{ padding: "20px" }}>
        <ListAdminFeedbackComponent
        listProductFeedback={listProductFeedback}
        btnRemove={this.btnRemove}
        />

        <ModalNotificationYesNoComponent
          isShow={modalIsShow}
          title={modalTitle}
          content={modalContent}
          btnClose={() => this.btnClose()}
          btnYes={() => this.btnYesRemoveProductFeedback()}
        />
      </div>
    )
  }
}
