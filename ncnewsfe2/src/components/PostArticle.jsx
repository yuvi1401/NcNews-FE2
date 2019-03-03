import React, { Component } from 'React';
import { navigate } from '@reach/router';

class PostArticle extends Component {
  state = {
    title: '',
    body: '',
    topic: ''
  };
  render() {
    const { topics, path } = this.props;
    const { title, body, topic } = this.state;
    return (
      <div>
        {path === '/post-article' ? (
          <h1>Post an Article</h1>
        ) : (
          <h1>Post an Article in new topic</h1>
        )}
        <form onSubmit={this.handleSubmit} className="postForm">
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
            required
            placeholder="Article Title"
          />
          <textArea
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
                  {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
                </option>
              );
            })}
          </select>
          <button type="submit" className="button">
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
    const userId = this.props.user.user_id;
    const { title, body, topic } = this.state;
    PostArticle(topic, { title, body, userId }).then(article => {
      navigate(`/articles/${article.article_id}`);
    });
  };
}
export default PostArticle;
