import React from 'react';
import './Articles.css';
import { getArticlesData } from '../api';

import { Link, Router } from '@reach/router';

class Articles extends React.Component {
  state = {
    articlesData: [],
    isLoading: true
  };
  render() {
    const { articlesData, isLoading } = this.state;
    if (isLoading) return <h3>Loading...</h3>;
    return (
      <React.Fragment>
        <div className="articlesStyle">
          {articlesData.map(article => {
            return (
              //   <React.Fragment key={article.article_id}>

              <div
                key={article.article_id}
                className="articleStyle"
                style={{ backgroundColor: 'steelblue' }}
              >
                <Link
                  to={`${article.article_id}`}
                  style={{ textDecoration: 'none', color: '#080BB4' }}
                >
                  <h1>
                    {article.title}
                    {/* <Link to={article.title}>{article.title}</Link> */}
                  </h1>
                  {/* <Link to={`${article.article_id}`}>
                  ArticleId: {article.article_id}
                </Link> */}
                  <h3>
                    Votes:{article.votes} {'  |  '} Topic: {article.topic}{' '}
                    {' | '} Comment Counts: {article.comment_count}
                  </h3>
                  <h3>Added On: {`${article.created_at}`.slice(0, 10)}</h3>
                </Link>
              </div>

              //   </React.Fragment>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    getArticlesData().then(articles => {
      this.setState({
        articlesData: articles,
        isLoading: false
      });
      //console.log(this.state.articlesData);
    });
  }
}
export default Articles;
