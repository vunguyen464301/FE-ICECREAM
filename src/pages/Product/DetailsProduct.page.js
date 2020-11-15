import React, { Component } from 'react';
import {  Button, InputGroup, FormControl } from 'react-bootstrap';
import Modal1InputComponent from '../../components/Modals/Modal1Input.component';
import ModalNotificationComponent from '../../components/Modals/ModalNotification.component';
import ListCommentProductFeedbackComponent from '../../components/Lists/ListCommentProductFeedback.component'
import '../../css/pagesCSS/DetailsProduct.page.css';
import { connect } from 'react-redux'
import { authApi } from '../../api/auth.api';
class DetailsProduct extends Component {
  state = {
    page: 0,
    dataProduct: undefined,
    dataProductFeedback: [],

    modalisShow: false,
    modalTitle: "",
    ModalNotification: "",

    modalProductId: undefined,
    modalInput1Isshow: false,
    modalInput1Note: "note",
    modalInput1Title: "",
    modalInput1Content: "",
    modalInput1Name1: "",

    content: "",
  }

  componentDidMount() {
    const { match } = this.props;
    this.getDataProduct(match.params.id);
    this.getDataProductFeedback(match.params.id, 0)
  }
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  }
  createProductFeedback = async () => {
    const { signin, match } = this.props;
    const { content } = this.state;
    await authApi.createProductFeedback({ productId: match.params.id, accountId: signin.account.id, content: content })
  }
  setOrder = () => {
    const { signin } = this.props;
    const { modalProductId, modalInput1Name1 } = this.state;
    authApi.createOrders({ accountId: signin.account.id, productId: modalProductId, note: modalInput1Name1 })
      .then(data => data)
      .then(data => console.log(true))
      .catch(function (err) {
        console.log(err)
      })
  }
  getDataProduct = async (productId) => {
    await authApi.getProductbyId(productId)
      .then(data => data)
      .then(data => {
        this.setState({ dataProduct: data })
      })
      .catch(function (err) {
        console.log(err)
      })
  }
  getDataProductFeedback = async (productId, page) => {
    await authApi.getFindPageByProductId(productId, page)
      .then(data => data.content)
      .then(data => {
        this.setState({ dataProductFeedback: data })
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  btnOrders = () => {
    const { signin, history, match } = this.props;
    if (signin.account === null) {
      history.push('/signin')
    } else if (signin.account.roleId[0] === 3) {
      this.setState({
        modalInput1Isshow: true,
        modalInput1Title: "",
        modalInput1Content: "Do you order this iceCream ?",
        modalInput1Name1: "",
        modalInput1Note: "Note",
        modalProductId: match.params.id,
      })

    } else {
      this.setState({
        modalisShow: true,
        modalTitle: "Warning !",
        ModalNotification: "Not support...",
      })
    }
  }
  btnSendProductFeedback = async () => {
    const { signin, history, match } = this.props;
    const { content, page } = this.state;
    if (signin.account === null) {
      history.push('/signin')
    } else if (signin.account.roleId[0] === 3) {
      if (content.trim().length !== 0) {
        await this.createProductFeedback();
        await this.getDataProductFeedback(match.params.id, page);
      } else {
        this.setState({
          modalisShow: true,
          modalTitle: "Warning !",
          ModalNotification: "Dont blank !",
        })
      }
    } else {
      this.setState({
        modalisShow: true,
        modalTitle: "Warning !",
        ModalNotification: "Not support...",
      })
    }
  }
  btnCloseModalInput1 = () => {
    this.setState({
      modalInput1Isshow: false,
      modalInput1Title: "",
      modalInput1Content: "",
      modalInput1Name1: "",
      modalInput1Note: "",
      modalProductId: undefined
    })
  }
  btnCreateModalInput1 = () => {
    this.setOrder();
    this.btnCloseModalInput1()
  }
  btnClose = () => {
    this.setState({
      modalisShow: false,
      modalTitle: "",
      ModalNotification: "",
    })
  }
  btnNextPage = async () => {
    const { match } = this.props;
    await this.setState(prevState => ({ page: prevState.page + 1 }))
    const { page } = this.state;
    await this.getDataProductFeedback(match.params.id, page);
  }
  btnPreviousPage = async () => {
    const { match } = this.props;
    await this.setState(prevState => ({ page: prevState.page - 1 }))
    const { page } = this.state;
    await this.getDataProductFeedback(match.params.id, page);
  }

  render() {
    const { dataProduct,
      dataProductFeedback,
      page,
      modalInput1Isshow,
      modalInput1Title,
      modalInput1Content,
      modalInput1Note,
      modalInput1Name1,
      modalisShow,
      modalTitle,
      ModalNotification,
      content
    } = this.state;
    return (
      <div className="body-content">
        <div className="div-center">
          <h3>{dataProduct !== undefined ? dataProduct.name : null}</h3>
        </div>
        <div className="wrapper">
          <div className="item1">
            {
              dataProduct !== undefined ?
                <img className="div-img-product"
                  src={dataProduct.image.length > 0 ? require(`../../images/${dataProduct.image}`) : require("../../images/Pineapple ice cream(300x300).jpg")} alt=""/>
                : null
            }

            <Button variant="outline-primary" onClick={() => this.btnOrders()}
              className="btn-orders"
            >Order </Button>
          </div>
          <div className="item2">
            <div className="div-content-product">
              {dataProduct !== undefined ? dataProduct.content : null}
            </div>
          </div>
        </div>
        <h3 className="div-center">Write feedback</h3>
        <InputGroup>

          <FormControl as="textarea" aria-label="With textarea" onChange={this.handleOnChange} name="content" value={content} />
          <InputGroup.Prepend>
            <Button variant="outline-primary" onClick={() => this.btnSendProductFeedback()}>Send</Button>
          </InputGroup.Prepend>
        </InputGroup>
        <div className="div-content-productfeedback">
          <ListCommentProductFeedbackComponent
            data={dataProductFeedback}
          />
          <div className="div-center">
            {
              dataProductFeedback.length > 0 ?
                <Button variant="primary" className="btn-nextPage" onClick={() => this.btnNextPage()} >Next</Button> : null
            }
            {page !== 0 ?
              <Button variant="primary" className="btn-previousPage" onClick={() => this.btnPreviousPage()}>Previous</Button> : null}
          </div>
        </div>
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
)(DetailsProduct)