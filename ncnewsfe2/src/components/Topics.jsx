import React, { Component } from 'react';
import { getArticlesByTopics } from '../api';
import moment from 'moment';
import { Link } from '@reach/router';
import './Articles.css';
import { navigate } from '@reach/router';
class ArticlesByTopics extends Component {
  state = {
    articlesData: [],
    isLoading: true,
    err: false
  };
  render() {
    const { articlesData, isLoading, err } = this.state;
    //const {topic} = this.props;
    // if (isLoading) return <h3>Loading...</h3>;
    return !err && isLoading ? (
      <div>
        <h3>Loading...</h3>
      </div>
    ) : err ? (
      <section className="content-well">
        <h1 className="title title--noarticles">Oh no!</h1>
        <h2 className="description description--noarticles">
          There aren't any articles in this topic yet. <br />
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
    //const { topic } = this.props;
    //console.log(topic);
    this.fetchArticlesByTopics(this.props.topic);
  }
  componentDidUpdate(prevProps) {
    // console.log(prevProps);
    // console.log(this.props.topic);
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
        //console.log(this.state.articlesData);
      })
      .catch(err => {
        this.setState({ err: true });
      });
  };

  handleNavToPost = () => {
    this.setState({ err: false }, () => {
      navigate('/post-article');
    });
  };
}

export default ArticlesByTopics;
