import React from 'react';
import Articles from './Articles.jsx';
import Article from './Article.jsx';
import Home from './Home.jsx';
//import Nav from './Nav.jsx';
import ArticlesByTopics from './Topics';
// import Users from './Users';
// import ArticlePage from './ArticlePage';
// import UserPage from './UserPage';
import { Router } from '@reach/router';
class Main extends React.Component {
  componentDidMount() {
    const { user } = this.props;
    localStorage.setItem('user', JSON.stringify(user));
  }
  render() {
    const { user } = this.props;
    console.log(this.props);
    return (
      <Router className="main">
        <Home path="/" username={user.username} />
        <Articles path="/articles" />
        <Article path="/articles/:article_id" username={user.username} />
        <ArticlesByTopics path="/topics/:topic/articles" />
        {/* <Articles path="/topics/:topic" user={user} />
       
        <Topics path="/topics" /> */}
      </Router>
    );
  }
}

export default Main;
