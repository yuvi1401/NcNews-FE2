import React, { Component } from 'react';

import { Link, Router } from '@reach/router';
import moment from 'moment';
import { getCommentsForArticleId } from './api';
class Comments extends Component {
  state = {
    comments: [],
    isLoading: false
  };
  render() {
    const { username } = this.props;
    const { comments } = this.state;
    return (
      <div>
        <h2>Add Comment</h2>
        <input type="text" placeholder="add comment" id="textboxid" />
        <div>
          <button className="button">post</button>
        </div>
        <h2>Comments</h2>
        {comments.length > 0 &&
          comments.map(comment => (
            <article key={comment.comment_id} className="comment">
              <section className="comment__header">
                {comment.author} | {moment(comment.created_at).fromNow()} |
                {username === comment.author && (
                  <button
                    className="button button--delete"
                    onClick={() => this.handleDelete(comment.comment_id)}
                  >
                    Delete
                  </button>
                )}
                {/* <Voting
                  votes={parseInt(comment.votes)}
                  id={articleData.article_id}
                  commentId={comment.comment_id}
                  type={'comment'}
                /> */}
              </section>
              <section className="comment__body">{comment.body}</section>
            </article>
          ))}
      </div>
    );
  }
  componentDidMount() {
    getCommentsForArticleId().then(comments => {
      this.setState({
        comments: comments,
        isLoading: true
      });
      //console.log(this.state.articlesData);
    });
  }
}
export default Comments;
