import React, { Component } from 'react'
import '../../css/componentsCSS/ItemMenuAdmin.component.css';
export default class ItemMenuAdmin extends Component {
    render() {
        const {name,color,backgroundColor,btnChoose}=this.props;
        return (
            <button style={{
                backgroundColor:backgroundColor,
                color:color,
            }}
            className="div-button-item-admin"
                onClick={()=>btnChoose()}
                >
                {name}
            </button>
        )
    }
}
