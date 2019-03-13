import React from 'react';
import Articles from './Articles.jsx';
import Article from './Article.jsx';
import Home from './Home.jsx';

import ArticlesByTopics from './Topics.jsx';
import AddArticle from './ArticleAdder';
import AddTopic from './TopicAdder';
import { Router } from '@reach/router';
import Error from './Error.jsx';

class Main extends React.Component {
  componentDidMount() {
    const { user } = this.props;
    localStorage.setItem('user', JSON.stringify(user));
  }
  render() {
    const { user, topics, goHome, fetchTopics } = this.props;

    return (
      <Router className="main">
        <Home path="/" username={user.username} />
        <Articles path="/articles" />
        <Article path="/articles/:article_id" username={user.username} />
        <ArticlesByTopics path="/topics/:topic/articles" />
        <AddArticle
          path="/post-article/new"
          username={user.username}
          topics={topics}
        />
        <AddTopic
          path="/post-topic/new"
          username={user.username}
          topics={topics}
          fetchTopics={fetchTopics}
        />
        <Error default goHome={goHome} />
      </Router>
    );
  }
}

export default Main;
