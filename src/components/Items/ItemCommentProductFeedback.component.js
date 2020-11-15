import React, { Component } from 'react'

export default class ItemCommentProductFeedback extends Component {
    render() {
      const { accountName, content, date} = this.props;
        return (
            <li>
            <div className="comment-main-level">
              <div className="comment-avatar">
                <img src={require("../../images/uploaded/noavatar.gif")} alt="no"/>
              </div>
              <div className="comment-box">
                <div className="comment-head">
                  <h6 className="comment-name by-author"><a href="http://creaticode.com/blog">{accountName}</a></h6>
                  <span>{date}</span>
                  <i className="fa fa-reply"></i>
                  <i className="fa fa-heart"></i>
                </div>
                <div className="comment-content">
                  {content}
                            </div>
              </div>
            </div>
          </li>
        )
    }
}
