import React, { Component } from 'react';

import moment from 'moment';
import { getCommnetsForArticleId, postComment, deleteComment } from '../api';
import './Comment.css';
import VotesOnComments from './Votingcomment.jsx';
class Comments extends Component {
  state = {
    comments: [],
    isLoading: false,
    body: ''
  };

  render() {
    const { username } = this.props;
    const { articleId } = this.props;

    const { comments, body } = this.state;
    return (
      <div>
        <h2>Add Comment</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="body"
            value={body}
            onChange={this.handleChange}
            placeholder="COMMENT"
            className="textarea"
            required
          />
          <div>
            <button className="button">post</button>
          </div>
        </form>
        <div />

        <h2>Comments</h2>
        {comments.length > 0 &&
          comments.map(comment => {
            return (
              <article key={comment.comment_id} className="comment">
                <h4 className="commentHeader">
                  {comment.author} | {moment(comment.created_at).fromNow()} |
                  {username === comment.author && (
                    <button
                      className="button button--delete"
                      onClick={() => this.handleDelete(comment.comment_id)}
                    >
                      Delete
                    </button>
                  )}
                  <div>
                    <VotesOnComments
                      votes={parseInt(comment.votes)}
                      commentId={comment.comment_id}
                      type={'comment'}
                      articleId={articleId}
                    />
                  </div>
                </h4>
                <section className="comment__body">{comment.body}</section>
              </article>
            );
          })}
      </div>
    );
  }
  componentDidMount() {
    const { articleId } = this.props;
    getCommnetsForArticleId(articleId).then(comments => {
      this.setState({
        comments: comments,
        isLoading: true
      });
    });
  }
  handleChange = event => {
    const { id, value } = event.target;
    this.setState(() => ({
      [id]: value
    }));
  };
  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;

    const { username, articleId } = this.props;

    postComment(articleId, { username, body }).then(comment => {
      comment.author = comment.username;
      this.setState({ comments: [comment, ...this.state.comments] });
    });
  };
  handleDelete = commentId => {
    const { articleId } = this.props;

    deleteComment(articleId, commentId)
      .then(() => {
        return getCommnetsForArticleId(articleId);
      })
      .then(comments => {
        this.setState({
          comments: comments,
          isLoading: true
        });
      });
  };
}

export default Comments;
