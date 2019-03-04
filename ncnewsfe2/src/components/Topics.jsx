import React, { Component } from 'react';
import { getArticlesByTopics } from '../api';
import moment from 'moment';
import { Link } from '@reach/router';
import './Articles.css';
//import { navigate } from '@reach/router';
class ArticlesByTopics extends Component {
  state = {
    articlesData: [],
    isLoading: true
  };
  render() {
    const { articlesData, isLoading } = this.state;
    if (isLoading) return <h3>Loading...</h3>;
    return (
      <div>
        <p>Total articles count = {`${articlesData.length}`}</p>

        <div className="articlesStyle">
          {articlesData.map(article => {
            return (
              <div
                key={article.article_id}
                className="articleStyle"
                // style={{ backgroundColor: 'steelblue' }}
              >
                <Link
                  to={`/articles/${article.article_id}`}
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
            );
          })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { topic } = this.props;
    console.log(topic);
    getArticlesByTopics(topic).then(articles => {
      this.setState({
        articlesData: articles,
        isLoading: false
      });
      //console.log(this.state.articlesData);
    });
  }
  componentDidUpdate(prevProps) {
    // console.log(prevProps);
    // console.log(this.props.topic);
    if (this.props.topic !== prevProps.topic) {
      getArticlesByTopics(this.props.topic).then(articles => {
        this.setState({
          articlesData: articles,
          isLoading: false
        });
        //console.log(this.state.articlesData);
      });
    }
  }
}

export default ArticlesByTopics;
