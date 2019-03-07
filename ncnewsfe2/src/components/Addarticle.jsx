import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { postArticle } from '../api';
import Nav from './Nav.jsx';
import './Addarticle.css';

class AddArticle extends Component {
  state = {
    title: '',
    body: '',
    topic: ''
  };
  render() {
    const { topics, path } = this.props;
    //console.log(this.props);
    //const topics = this.props.location.state.topics;

    const { title, body, topic } = this.state;
    return (
      <div>
        {path === '/post-article' ? (
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
          <select id="topic" value={topic} onChange={this.handleChange}>
            <option defaultselected="true">Select a Topic</option>
            {topics.map(topic => {
              return (
                <option key={topic.slug} value={topic.slug}>
                  {topic.slug}
                </option>
              );
            })}
          </select>
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
    postArticle(topic, { title, body, username }).then(article => {
      navigate(`/articles/${article.article_id}`);
    });
  };
}
export default AddArticle;
