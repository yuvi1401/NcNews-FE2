import React, { Component } from 'react';

import { postTopic, getTopics } from '../api';
import AddArticle from './Addarticle.jsx';
class AddTopic extends Component {
  state = {
    topic: {},
    isComplete: false,
    slug: '',
    description: ''
  };
  render() {
    const { topics, user } = this.props;
    const { isComplete, slug, description } = this.state;
    return !isComplete ? (
      <section>
        <h1> Create a Topic</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={this.handlechnge}
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
    ) : (
      <>({isComplete && <AddArticle user={user} topics={topics} />})</>
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
    postTopic(slug, description).then(topic => {
      this.setState(() => ({ topic, postComplete: true }));
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isComplete !== this.state.isComplete) {
      this.props.getTopics();
    }
  }
}
export default AddTopic;
