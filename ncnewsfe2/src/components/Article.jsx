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
        <p>{article.body}</p>
        <p>Date: {`${article.created_at}`.slice(0, 10)}</p>
        <div className="buttonArea">
          <button
            disabled={voteChange === 1}
            onClick={() => this.handleVoteChange(1)}
          >
            Votes Up
          </button>
          <p>Votes: {parseInt(`${article.votes + voteChange}`)}</p>
          <button
            disabled={voteChange === -1}
            onClick={() => this.handleVoteChange(-1)}
          >
            Votes Down
          </button>
        </div>
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
    const { articleId } = this.props.article_id;
    console.log(this.props.article_id);
    changeVoteOnArticle(voteChangeNum, articleId).then(() => {
      this.setState(prevState => {
        return { voteChange: prevState.article.vote + voteChangeNum };
      });
    });
  }
}

export default singleArticle;
