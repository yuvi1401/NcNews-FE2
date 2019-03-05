import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { postTopic, getTopics } from '../api';
import AddArticle from './Addarticle.jsx';

class AddTopic extends Component {
  state = {
    topic: {},

    slug: '',
    description: ''
  };
  render() {
    const { topics, username } = this.props;
    //console.log(this.props);
    const { slug, description } = this.state;
    return (
      <section>
        <h1> Create a Topic</h1>
        <form onSubmit={this.handleSubmit}>
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
          />
          <button type="submit">POST</button>
        </form>
      </section>
    );
  }
  handleChange = event => {
    //console.log(event);
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
    postTopic(slug, description).then(topic => {
      // console.log(topic);
      navigate(`/topics/${topic.slug}/articles`);
    });
  };
}
export default AddTopic;
