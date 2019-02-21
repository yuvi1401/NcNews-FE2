import React, { Component } from 'react';
import { Nav } from './Nav';
import { getArticleData } from '../api';

class singleArticle extends Component {
  state = {
    article: {}
  };
  render() {
    return (
      <div>
        <h1>{this.state.article.title}</h1>
        <h2>Topic : {this.state.article.topic}</h2>
        <h2>Author: {this.state.article.author}</h2>
        <h3>Body : {this.state.article.body}</h3>
        <h3>Date: {`${this.state.article.created_at}`.slice(0, 10)}</h3>
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
}

export default singleArticle;
