import React, { Component } from 'react';
import './Article.css';
import { Nav } from './Nav';
import { getArticleData, changeVoteOnArticle } from '../api';

class singleArticle extends Component {
  state = {
    article: {},

    voteChange: 0
  };
  render() {
    const { article, voteChange } = this.state;
    return (
      <div
        className="articleDataStyle"
        style={{ backgroundColor: 'steelblue' }}
      >
        <h1>{article.title}</h1>
        <h2>
          Topic : {article.topic} {'  |  '} Author: {article.author}
        </h2>
        {/* <h2>Author: {article.author}</h2> */}
        <p id="article_body">{article.body}</p>
        <p>Date: {`${article.created_at}`.slice(0, 10)}</p>
        <div>
          <button
            className="button"
            onClick={() => this.handleVoteChange(1)}
            disabled={voteChange === 1}
          >
            Vote Up
          </button>
          {/* <p>Votes: {parseInt(`${article.votes + voteChange}`)}</p> */}
          <p>Votes: {`${voteChange}`}</p>
          <button
            className="button"
            onClick={() => this.handleVoteChange(-1)}
            disabled={voteChange === -1}
          >
            Vote Down
          </button>
        </div>
        <h2>Add Comment</h2>
        <input type="text" placeholder="add comment" id="textboxid" />
        <div>
          <button className="button">post</button>
        </div>
        <h2>Comments</h2>
      </div>
    );
  }
  componentDidMount() {
    getArticleData(this.props.article_id).then(article => {
      this.setState({
        article
      });
    });
  }
  handleVoteChange(voteChangeNum) {
    const articleId = this.props.article_id;
    //console.log(this.props.article_id);
    //console.log(articleId);
    changeVoteOnArticle(articleId, voteChangeNum).then(() => {
      this.setState(state => {
        return { voteChange: state.article.votes + voteChangeNum };
      });
      console.log(this.state);
    });
  }
}

export default singleArticle;
