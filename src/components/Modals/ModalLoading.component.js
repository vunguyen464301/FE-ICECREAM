import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import '../../css/componentsCSS/ModalLoading.component.css';
export default class ModalLoading extends Component {
  render() {
    const { loading } = this.props;
    return (
      <Modal show={loading}  >
        <div className="div-container">
          <h1>
            <div className="spinner-border">
              <span className="sr-only">Loading...</span>
            </div>
          </h1>
        </div>
      </Modal>
    )
  }
}
