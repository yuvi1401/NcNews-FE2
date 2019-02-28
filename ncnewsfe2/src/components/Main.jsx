import React from 'react';
import Articles from './Articles.jsx';
import Article from './Article.jsx';
import Home from './Home.jsx';
// import Topics from './Topics';
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
        {/* <Articles path="/topics/:topic" user={user} />
        <ArticlePage path="/articles/:article_id" user={user} />
        <Topics path="/topics" /> */}
        {/* <Users path="/users" isLinked={true} /> */}
        {/* <UserPage path="/users/:username" user={user} /> */}
      </Router>
    );
  }
}

export default Main;
