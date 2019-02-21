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
        <h2>Topic : {this.state.article.title}</h2>
        <h2>Body : {this.state.article.body}</h2>
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
