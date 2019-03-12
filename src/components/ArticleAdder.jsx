import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { postArticle } from '../api';
//import Nav from './Nav.jsx';
import './ArticleAdder.css';

class AddArticle extends Component {
  state = {
    title: '',
    body: '',
    topic: '',
    hasError: false
  };
  render() {
    const { topics, path } = this.props;

    const { title, body, topic, hasError } = this.state;
    return (
      <div>
        {path === '/post-article/new' ? (
          <h1>Post an Article</h1>
        ) : (
          <h1>Post an Article in new topic</h1>
        )}
        <form onSubmit={this.handleSubmit} className="articleForm">
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
            required
            placeholder="Article Title"
          />
          <textarea
            type="text"
            id="body"
            value={body}
            onChange={this.handleChange}
            required
            placeholder="ArticleBody"
          />
          <select
            id="topic"
            value={topic}
            onChange={this.handleChange}
            required
          >
            <option defaultselected="true">Select a Topic</option>
            {topics.map(topic => {
              return (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </option>
              );
            })}
          </select>
          {hasError && (
            <h4 style={{ textDecoration: 'none', color: 'red' }}>
              This is required!
            </h4>
          )}
          <button type="submit" id="button">
            Post
          </button>
        </form>
      </div>
    );
  }
  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username } = this.props;
    const { title, body, topic } = this.state;
    postArticle(topic, { title, body, username })
      .then(article => {
        navigate(`/articles/${article.article_id}`);
      })
      .catch(err =>
        this.setState({
          hasError: true
        })
      );
  };
}
export default AddArticle;
