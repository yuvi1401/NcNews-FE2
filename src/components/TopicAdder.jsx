import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { postTopic } from '../api';

import './TopicAdder.css';

class AddTopic extends Component {
  state = {
    topic: {},
    slug: '',
    description: '',
    hasError: false
  };
  render() {
    const { slug, description, hasError } = this.state;

    //console.log(topics);
    return (
      <section>
        <h1> Create a Topic</h1>
        <form onSubmit={this.handleSubmit} className="topicForm">
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={this.handleChange}
            required
            placeholder="Enter Topic Name"
          />

          <textarea
            type="text"
            id="description"
            value={description}
            onChange={this.handleChange}
            placeholder="Topic description"
            required
            className="textArea"
          />
          {hasError && (
            <h3 style={{ color: 'red' }}>
              This topic already exist. Please add new Topic
            </h3>
          )}
          <button type="submit" id="button">
            POST
          </button>
        </form>
      </section>
    );
  }
  handleChange = event => {
    const { id } = event.target;

    const value =
      id === 'slug' ? event.target.value.toLowerCase() : event.target.value;
    this.setState({
      [id]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { slug, description } = this.state;
    postTopic(slug, description)
      .then(topic => {
        navigate(`/topics/${topic.slug}/articles`);
      })
      .catch(err =>
        this.setState({
          hasError: true
        })
      );
  };
}
export default AddTopic;
