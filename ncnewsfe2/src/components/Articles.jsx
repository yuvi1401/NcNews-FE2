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
                className="articleStyle"
                style={{ backgroundColor: 'steelblue' }}
                Link
                to={article.article_id}
              >
                <h1>
                  {article.title}
                  {/* <Link to={article.title}>{article.title}</Link> */}
                </h1>
                <h2>
                  Votes:{article.votes} {'  |  '} Topics: {article.topic}
                </h2>
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
