import React, { Component } from 'react';
import './Article.css';
//import { Nav } from './Nav';
import { getArticleData, deleteArticle } from '../api';
import Votes from './Votes.jsx';
import Comments from './Comment.jsx';
import moment from 'moment';
import { navigate } from '@reach/router';

class singleArticle extends Component {
  state = {
    article: {}
  };
  render() {
    const { username } = this.props;
    const { article } = this.state;
    return (
      <div
        className="articleDataStyle"
        // style={{ backgroundColor: 'steelblue' }}
      >
        <h1>{article.title}</h1>
        <h2>
          Topic : {article.topic} {'  |  '} Author: {article.author} |{' '}
          {username === article.author && (
            <button
              className="button button--delete"
              onClick={() => this.handleDelete(article.article_id)}
            >
              Delete
            </button>
          )}
        </h2>
        {/* <h2>Author: {article.author}</h2> */}
        <p id="article_body">{article.body}</p>
        <p>Date: {moment(article.created_at).fromNow()}</p>
        <Votes articleId={article.article_id} articleVotes={article.votes} />

        <Comments articleId={this.props.article_id} username={username} />
      </div>
    );
  }

  articleData = getArticleData(this.props.article_id)
    .then(article => {
      this.setState({
        article
      });
    })
    .catch(err => navigate('/404'));

  handleDelete = articleId => {
    deleteArticle(articleId)
      .then(() => {
        navigate('/articles');
      })
      .catch(err => navigate('/404'));
  };
}

export default singleArticle;
