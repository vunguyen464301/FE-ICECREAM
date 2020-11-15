import React, { Component } from 'react';
import ItemMenuAdmin from '../Items/ItemMenuAdmin.component';
import '../../css/componentsCSS/ListMenuAdmin.component.css';

export default class ListMenuAdmin extends Component {
  render() {
    const { data, btnChoose } = this.props;
    return (
      <div className="list-menu">
        {
          data.map(
            d => <ItemMenuAdmin
              key={d.id}
              name={d.name}
              color={d.color}
              backgroundColor={d.backgroundColor} 
              btnChoose={()=>btnChoose(d.id)}/>)
        }
      </div>
    )
  }
}
