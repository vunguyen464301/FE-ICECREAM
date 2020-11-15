import React, { Component } from 'react'
import '../../css/componentsCSS/ListCommentProductFeedback.component.css';
import ItemCommentProductFeedbackComponent from '../Items/ItemCommentProductFeedback.component';
export default class ListCommentProductFeedback extends Component {
  render() {
    // <Alert key={e.id} variant={"danger"}>
    //   {e.accountName} : {e.content}<br></br>
    //   {e.created_date}
    // </Alert>
    const { data } = this.props;
    return (
      <div className="comments-container">
        <h1>Feedback </h1>
        <ul id="comments-list" className="comments-list">
        {data.map(e=>
          <ItemCommentProductFeedbackComponent
          key={e.id}
          accountName={e.accountName}
          content={e.content}
          date={e.created_date}
          />)}
         
        </ul>
      </div>
    )
  }
}
