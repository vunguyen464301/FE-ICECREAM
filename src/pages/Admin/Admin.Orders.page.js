import React, { Component } from 'react'
import ListAdminOrdersComponent from '../../components/Lists/ListAdminOrders.component'
import ModalNotificationYesNoComponent from '../../components/Modals/ModalNotificationYesNo.component'
import { authApi } from '../../api/auth.api'
export default class Orders extends Component {
  state = {
    listOrdersDetail: undefined,

    modalOrdersDetailId: undefined,
    modalIshow: false,
    modalTitle: "",
    modalContent: "",
  }
  componentDidMount() {
    this.getDataOrders()
  }
  getDataOrders = async () => {
    let arr = [];
    await authApi.getAllOrders()
      .then(res => res)
      .then(data => {
        data.forEach(element => {
          if (element.ordersDetail.length > 0) {
            // arr.push(element.ordersDetail);
            element.ordersDetail.forEach(i => {
              arr.push({
                ...i,
                accountId: element.account_id
              });
            })
          }
        });
      }
      )
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ listOrdersDetail: arr })
  }
  btnYesRemoveOrdersDetail = async () => {
    const { modalOrdersDetailId } = this.state;
    await authApi.deleteOrdersDetail(modalOrdersDetailId)
      .then(res => res)
      .then(data => {
        console.log(data)
      }
      )
      .catch(function (error) {
        console.log(error);
      });
    this.btnClose();
    this.getDataOrders();
  }
  btnDisable = (id) => {
    const { listOrdersDetail } = this.state;
    let arr = []
    listOrdersDetail.forEach(e => {
      if (e.id === id) {
        arr.push({
          ...e,
          statusId: e.statusId === 1 ? 2 : 1
        })
      } else {
        arr.push(e)
      }
    })
    this.setState({ listOrdersDetail: arr });
  }
  btnRemove = (id) => {
    this.setState({
      modalOrdersDetailId: id,
      modalIshow: true,
      modalTitle: "Warning !!!",
      modalContent: "Are you sure delete this order?"
    })
  }
  btnUpdate = async (item) => {
    await authApi.updateOrdersDetail(item)
    .then(res => res)
    .then(data => {
      console.log(data)
    }
    )
    .catch(function (error) {
      console.log(error);
    });
  this.getDataOrders();
  }
  btnClose = () => {
    this.setState({
      modalOrdersDetailId: undefined,
      modalIshow: false,
      modalTitle: "",
      modalContent: ""
    })
  }
  render() {
    const { listOrdersDetail, modalIshow, modalTitle, modalContent } = this.state;
    return (
      <div style={{ padding: "20px" }}>
        <ListAdminOrdersComponent
          listOrdersDetail={listOrdersDetail}
          btnDisable={this.btnDisable}
          btnRemove={this.btnRemove}
          btnUpdate={this.btnUpdate}
        />
        <ModalNotificationYesNoComponent
          isShow={modalIshow}
          title={modalTitle}
          content={modalContent}
          btnClose={() => this.btnClose()}
          btnYes={() => this.btnYesRemoveOrdersDetail()}
        />
      </div>
    )
  }
}
