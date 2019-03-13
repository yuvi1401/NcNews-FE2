import React, { Component } from 'react';
import { getArticlesByTopics } from '../api';

import './Articles.css';

import ArticlesMap from './ArticlesMapping.jsx';

class ArticlesByTopics extends Component {
  state = {
    articlesData: [],
    isLoading: true,
    err: false
  };
  render() {
    const { articlesData, isLoading, err } = this.state;

    return !err && isLoading ? (
      <div>
        <h3>Loading...</h3>
      </div>
    ) : err ? (
      <section className="content-well">
        <h1 className="title title--noarticles">Oh no!</h1>
        <h2 className="description description--noarticles">
          There aren't any articles in {this.props.topic} topic yet. <br />
          Do you want to add one?
        </h2>
        <button className="button" onClick={this.handleNavToPost}>
          Post article
        </button>
        <br />
      </section>
    ) : (
      <div>
        <p>Total articles count = {`${articlesData.length}`}</p>
        <ArticlesMap articlesData={this.state.articlesData} />
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticlesByTopics(this.props.topic);
  }
  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      this.fetchArticlesByTopics(this.props.topic);
    }
  }

  fetchArticlesByTopics = topic => {
    getArticlesByTopics(topic)
      .then(articles => {
        this.setState({
          articlesData: articles,
          isLoading: false,
          err: false
        });
      })
      .catch(err => {
        this.setState({ err: true });
      });
  };

  handleNavToPost = () => {
    this.setState({ err: false }, () => {
      this.props.navigate('/post-article/new', {
        state: { topic: this.props.topic }
      });
    });
  };
}

export default ArticlesByTopics;
