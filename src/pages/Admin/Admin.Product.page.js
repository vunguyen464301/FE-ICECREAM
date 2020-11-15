import React, { Component } from 'react'
import { authApi } from '../../api/auth.api'
import ListAdminProductComponent from '../../components/Lists/ListAdminProduct.component';
import ModalDetailProductComponent from '../../components/Modals/ModalDetailProduct.component';
import ModalAddProductComponent from '../../components/Modals/ModalAddProduct.component';
import ModalNotificationYesNo from '../../components/Modals/ModalNotificationYesNo.component';
export default class Product extends Component {
  state = {
    listCatalogue: undefined,
    listProduct: undefined,
    modalProductId: undefined,


    modalIsShow: false,
    modalImage: "",
    modalName: "",
    modalContent: "",
    modalPrice: 0,

    isShowWarning: false,
    title: "",
    content: "",

    modalIsShowCreate: false,
    modalCatalogueId: undefined,
    modalNameCreate: "",
    modalContentCreate: "",
    modalPriceCreate: 0,

    search: ""
  }
  setKey = (key) => {
    this.setState({ key: key })
  }
  async componentDidMount() {
    await this.getDataCatalogue();
  }
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });

  }
  getDataCatalogue = async () => {
    await authApi.getAllCatalogue()
      .then(res => res)
      .then(data => {
        this.setState({ listCatalogue: data })
      }
      )
      .catch(function (error) {
        console.log(error);
      });
  }
  deleteProduct = async () => {
    const { modalProductId } = this.state;
    await authApi.deleteProduct(modalProductId)
      .then(res => res)
      .then(data => {
        if (data) console.log('success')
        else console.log('fail')
      }
      )
      .catch(function (error) {
        console.log(error);
      });
    this.getDataCatalogue();
  }
  btnSearch = async (id) => {
    // console.log(this.state.search)
    const { search, listCatalogue } = this.state;
    await authApi.getProductByName(search, id)
      .then(res => res)
      .then(data => {
        let arr = [];
        listCatalogue.forEach(e => {
          if (e.id === id) {
            arr.push({
              ...e,
              listProduct: data
            })
          } else {
            arr.push(e)
          }
        })
        this.setState({ listCatalogue: arr })
      }
      )
      .catch(function (error) {
        console.log(error);
      });
  }
  btnAdd = (catalogueId) => {
    this.setState({
      modalIsShowCreate: true,
      modalCatalogueId: catalogueId
    })
  }
  btnCreateProduct = async () => {
    const { modalContentCreate, modalNameCreate, modalPriceCreate, modalCatalogueId } = this.state;
    await authApi.createProduct({ name: modalNameCreate, image: '', content: modalContentCreate, price: modalPriceCreate, catalogueId: modalCatalogueId, statusId: 1 })
      .then(res => res)
      .then(data => {
        // this.setState({ listCatalogue: data })
        console.log(data)
      }
      )
      .catch(function (error) {
        console.log(error);
      });

    this.btnCloseProductCreate();
    this.getDataCatalogue();

  }
  btnYesWarning = () => {
    this.deleteProduct();
    this.btnClose();
  }
  btnCloseProductCreate = () => {
    this.setState({
      modalIsShowCreate: false,
      modalCatalogueId: undefined,
      modalNameCreate: "",
      modalContentCreate: "",
      modalPriceCreate: 0,
    })
  }
  btnClose = () => {
    this.setState({
      isShowWarning: false,
      title: "",
      content: "",
      productId: undefined
    })
  }
  btnCloseDetail = (productId) => {
    const { modalContent, modalImage, modalName, modalPrice } = this.state;
    this.setState({
      modalIsShow: false,
      modalImage:"",
      modalContent: "",
      modalName: "",
      modalPrice: "",
    })
    let arr = [];
    let inputPathImage = modalImage.split('\\');
    let image = inputPathImage[inputPathImage.length - 1];
    this.state.listCatalogue.forEach(element => {
      if (element.listProduct.length > 0) {
        let arrListProduct = [];
        element.listProduct.forEach(item => {
          if (item.id === productId) {
            arrListProduct.push({
              ...item,
              image:image,
              content: modalContent,
              name: modalName,
              price: modalPrice
            })
          } else {
            arrListProduct.push(item)
          }
        })
        arr.push({
          ...element,
          listProduct: arrListProduct
        })
      } else {
        arr.push(element);
      }
    });
    this.setState({
      listCatalogue: arr
    })
  }
  btnDetails = async (productId, image, name, content, price) => {
    await this.setState({
      modalIsShow: true,
      modalImage: image,
      modalName: name,
      modalContent: content,
      modalPrice: price,
      modalProductId: productId
    })
  }
  btnRemove = async (productId) => {
    this.setState({
      isShowWarning: true,
      modalProductId: productId,
      title: "Warning delete !",
      content: "Do you want remove this account ?"
    })

  }
  btnDisable = async (productId) => {
    this.setState({
      modalIsShow: false
    })
    let arr = [];
    await this.state.listCatalogue.forEach(element => {
      if (element.listProduct.length > 0) {
        let arrListProduct = [];
        element.listProduct.forEach(item => {
          if (item.id === productId) {
            arrListProduct.push({
              ...item,
              statusId: item.statusId === 1 ? 2 : 1
            })
          } else {
            arrListProduct.push(item)
          }
        })
        arr.push({
          ...element,
          listProduct: arrListProduct
        })
      } else {
        arr.push(element);
      }
    });
    this.setState({
      listCatalogue: arr
    })
  }
  btnUpdate = async (product) => {
    await authApi.updateProduct(product)
      .then(res => res)
      .then(data => {
        // this.setState({ listCatalogue: data })
        console.log(data)
      }
      )
      .catch(function (error) {
        console.log(error);
      });
    this.getDataCatalogue();
    // console.log(product)
  }
  render() {
    const { listCatalogue,
      modalIsShowCreate,
      modalNameCreate,
      modalContentCreate,
      modalPriceCreate,
      modalIsShow,
      modalImage,
      modalName,
      modalContent,
      modalPrice,
      isShowWarning,
      title,
      content,
      modalProductId } = this.state;
    return (
      <div style={{ padding: "20px" }}>
        <ListAdminProductComponent
          listCatalogue={listCatalogue}
          handleOnChange={this.handleOnChange}
          btnSearch={this.btnSearch}
          btnAdd={this.btnAdd}
          btnDetails={this.btnDetails}
          btnRemove={this.btnRemove}
          btnDisable={this.btnDisable}
          btnUpdate={this.btnUpdate}
        />

        <ModalDetailProductComponent
          handleOnChange={this.handleOnChange}
          btnClose={() => this.btnCloseDetail(modalProductId)}
          // btnUploadImage={()=>this.btnUploadImage()}
          isShow={modalIsShow}
          image={modalImage}
          name={modalName}
          content={modalContent}
          price={modalPrice}
        />
        <ModalAddProductComponent
          handleOnChange={this.handleOnChange}
          btnClose={() => this.btnCloseProductCreate()}
          btnCreate={() => this.btnCreateProduct()}
          isShow={modalIsShowCreate}
          name={modalNameCreate}
          content={modalContentCreate}
          price={modalPriceCreate}
        />
        <ModalNotificationYesNo
          isShow={isShowWarning}
          title={title}
          content={content}
          btnClose={() => this.btnClose()}
          btnYes={() => this.btnYesWarning()}
        />
      </div>
    )
  }
}
