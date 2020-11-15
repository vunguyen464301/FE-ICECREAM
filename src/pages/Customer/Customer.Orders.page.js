import React, { Component } from 'react'
import { connect } from 'react-redux'
import ModalNotificationYesNoComponent from '../../components/Modals/ModalNotificationYesNo.component'
import ListCustomerOrdersComponent from '../../components/Lists/ListCustomerOrders.component'
import { authApi } from '../../api/auth.api'
class Orders extends Component {
  state = {
    listOrdersDetail: undefined,
    accountId: undefined,

    modalOrdersDetailId: undefined,
    modalIshow: false,
    modalTitle: "",
    modalContent: "",
  }
  componentDidMount() {
    this.getDataOrders()
  }
  getDataOrders = async () => {
    const { signin } = this.props;
    if (signin.account !== null) {
      await authApi.getPageOrdersByAccountId(signin.account.id)
        .then(res => res.ordersDetail)
        .then(data => {
          this.setState({ listOrdersDetail: data })
        }
        )
        .catch(function (error) {
          console.log(error);
        });
    }

  }
  btnYesRemoveOrdersDetail = async () => {
    const { modalOrdersDetailId } = this.state;
    await authApi.deleteOrdersDetail(modalOrdersDetailId)
      .then(res => res)
      .then(data => {
        console.log(true)
      }
      )
      .catch(function (error) {
        console.log(error);
      });
    this.btnClose();
    this.getDataOrders();
  }

  btnRemove = (id) => {
    this.setState({
      modalOrdersDetailId: id,
      modalIshow: true,
      modalTitle: "Warning !!!",
      modalContent: "Are you sure delete this order?"
    })
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
        <ListCustomerOrdersComponent
          listOrdersDetail={listOrdersDetail}
          btnRemove={this.btnRemove}
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
const mapState = ({ signin }) => ({
  signin
})

export default connect(
  mapState,
  null
)(Orders)