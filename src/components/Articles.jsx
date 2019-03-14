import React from 'react';
import './Articles.css';
import { getArticlesData, getSortedArticles } from '../api';

import { navigate } from '@reach/router';
import ArticlesSorted from './ArticlesSorting.jsx';
import ArticlesMap from './ArticlesMapping.jsx';

class Articles extends React.Component {
  state = {
    articlesData: [],
    isLoading: true
  };
  render() {
    const { articlesData, isLoading } = this.state;
    if (isLoading) return <h3>Loading...</h3>;
    return (
      <div>
        <div>
          <h3>Sort Articles by</h3>
          <ArticlesSorted handleChangeSort={this.handleChangeSort} />
        </div>

        <p>Total articles count = {`${articlesData.length}`}</p>
        <div>
          <ArticlesMap articlesData={this.state.articlesData} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    getArticlesData()
      .then(articles => {
        this.setState({
          articlesData: articles,
          isLoading: false
        });
      })
      .catch(err => navigate('/404', { replace: true }));
  }

  handleChangeSort = event => {
    const { value } = event.target;
    getSortedArticles(value).then(articles => {
      //console.log(articles);
      this.setState({
        articlesData: articles,
        isLoading: false
      });
    });
  };
}
export default Articles;
