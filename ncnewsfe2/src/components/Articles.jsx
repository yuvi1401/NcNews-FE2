import React from 'react';
import './Articles.css';
import { getArticlesData, getSortedArticles } from '../api';

import { Link } from '@reach/router';
import moment from 'moment';
import { navigate } from '@reach/router';

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
        <div>
          <h3>Sort Articles by</h3>
          <ul>
            <button value="comment_count" onClick={this.handleChangeSort}>
              Comment Count
            </button>
            <button value="created_at" onClick={this.handleChangeSort}>
              Date Created
            </button>
            <button value="votes" onClick={this.handleChangeSort}>
              Votes
            </button>
          </ul>
        </div>
        <p>Total articles count = {`${articlesData.length}`}</p>
        <div className="articlesStyle">
          {articlesData.map(article => {
            return (
              //   <React.Fragment key={article.article_id}>

              <div key={article.article_id} className="articleStyle">
                <Link
                  to={`${article.article_id}`}
                  id="linkStyle"
                  style={{ textDecoration: 'none', color: '#080BB4' }}
                >
                  <h1>{article.title}</h1>

                  <h3>
                    Votes:{article.votes} {'  |  '} Topic: {article.topic}{' '}
                    {' | '} Comment Counts: {article.comment_count}
                  </h3>
                  <h3>Added On: {moment(article.created_at).fromNow()}</h3>
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
    getArticlesData()
      .then(articles => {
        this.setState({
          articlesData: articles,
          isLoading: false
        });
        //console.log(this.state.articlesData);
      })
      .catch(err => navigate('/404', { replace: true }));
  }

  handleChangeSort = event => {
    //console.log(event);

    const { value } = event.target;
    getSortedArticles(value).then(articles => {
      this.setState({
        articlesData: articles,
        isLoading: false
      });
    });
  };
}
export default Articles;
