import React, { Component } from 'react';
import { connect } from 'react-redux'
import { authApi } from '../../api/auth.api';
import ListCatalogueComponent from '../../components/Lists/ListCatalogue.component';
import ModalNotificationComponent from '../../components/Modals/ModalNotification.component';
import Modal1InputComponent from '../../components/Modals/Modal1Input.component';
import '../../css/pagesCSS/Homepage.page.css'
class Homepage extends Component {
  state = {
    listDataCatalogue: [],


    modalisShow: false,
    modalTitle: "",
    ModalNotification: "",

    modalProductId:undefined,
    modalInput1Isshow: false,
    modalInput1Note:"note",
    modalInput1Title: "",
    modalInput1Content: "",
    modalInput1Name1: "",
  }
  componentDidMount() {
    this.getDataCatelogue();
  }
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  }
  getDataCatelogue = async () => {
    await authApi.getAllCatalogue()
      .then(res => res)
      .then(data => {
        this.setState({ listDataCatalogue: data })
      })
      .catch(function (e) { console.log(e) })
  }

  btnDetails = (id) => {
    // console.log(this.props.signin)
    // console.log(id)
    this.props.history.push(`/product/${id}`)
  }
  btnOrders = (id) => {
    const { signin, history } = this.props;
    if (signin.account === null) {
      history.push('/signin')
    } else if (signin.account.roleId[0] === 3) {
      this.setState({
        modalInput1Isshow: true,
        modalInput1Title: "",
        modalInput1Content: "Do you order this iceCream ?",
        modalInput1Name1: "",
        modalInput1Note:"Note",
        modalProductId:id,
      })

    } else {
      this.setState({
        modalisShow: true,
        modalTitle: "Warning !",
        ModalNotification: "Not support...",
      })
    }
  }
  setOrder = () => {
    const { signin } = this.props;
    const { modalProductId, modalInput1Name1} = this.state;
    authApi.createOrders({accountId:signin.account.id, productId:modalProductId, note:modalInput1Name1})
    .then(data=>data)
    .then(data=>console.log(true))
    .catch(function(err){
      console.log(err)
    })
  }
  btnClose = () => {
    this.setState({
      modalisShow: false,
      modalTitle: "",
      ModalNotification: "",
    })
  }
  btnCloseModalInput1 = () => {
    this.setState({
      modalInput1Isshow: false,
      modalInput1Title: "",
      modalInput1Content: "",
      modalInput1Name1: "",
      modalInput1Note:"",
      modalProductId:undefined
    })
  }
  btnCreateModalInput1 = () => {
    this.setOrder();
    // this.props.history.push('')
    this.btnCloseModalInput1()
  }
  render() {
    const { listDataCatalogue, modalisShow, modalTitle, ModalNotification, modalInput1Isshow, modalInput1Title, modalInput1Content, modalInput1Name1,modalInput1Note } = this.state
    return (
      <div className="body-content">
        <ListCatalogueComponent
          listDataCatalogue={listDataCatalogue}
          btnOrders={this.btnOrders}
          btnDetails={this.btnDetails}
        />
        <ModalNotificationComponent
          isShow={modalisShow}
          title={modalTitle}
          notitication={ModalNotification}
          btnClose={() => this.btnClose()}
        />
        <Modal1InputComponent
          isShow={modalInput1Isshow}
          title={modalInput1Title}
          content={modalInput1Content}
          field1={modalInput1Note}
          nameInput1="modalInput1Name1"
          name1={modalInput1Name1}
          handleOnChange={this.handleOnChange}
          btnClose={() => this.btnCloseModalInput1()}
          btnCreate={() => this.btnCreateModalInput1()}
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
)(Homepage)