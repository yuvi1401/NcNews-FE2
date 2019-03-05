import React from 'react';
import Articles from './Articles.jsx';
import Article from './Article.jsx';
import Home from './Home.jsx';
//import Nav from './Nav.jsx';
import ArticlesByTopics from './Topics.jsx';
import AddArticle from './Addarticle';
//import AddTopic from './Addtopic'
import { Router } from '@reach/router';

class Main extends React.Component {
  componentDidMount() {
    const { user } = this.props;
    localStorage.setItem('user', JSON.stringify(user));
  }
  render() {
    const { user, topics } = this.props;
    //console.log(this.props);
    return (
      <Router className="main">
        <Home path="/" username={user.username} />
        <Articles path="/articles" />
        <Article path="/articles/:article_id" username={user.username} />
        <ArticlesByTopics path="/topics/:topic/articles" />
        <AddArticle
          path="/post-article"
          username={user.username}
          topics={topics}
        />
        {/* <AddTopic path='/post-topic'username={user.username}/> */}
        {/* <Articles path="/topics/:topic" user={user} />
       
        <Topics path="/topics" /> */}
      </Router>
    );
  }
}

export default Main;
