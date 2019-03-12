import React from 'react';
import './Articles.css';
import moment from 'moment';
import { Link } from '@reach/router';
const ArticlesMap = props => {
  const { articlesData } = props;
  return (
    <div className="articlesStyle">
      {articlesData.map(article => {
        return (
          <div key={article.article_id} className="articleStyle">
            <Link
              to={`${article.article_id}`}
              id="linkStyle"
              style={{ textDecoration: 'none', color: '#080BB4' }}
            >
              <h1>{article.title}</h1>

              <h3>
                Votes:{article.votes} {'  |  '} Topic: {article.topic} {' | '}{' '}
                Comment Counts: {article.comment_count}
              </h3>
              <h3>Added On: {moment(article.created_at).fromNow()}</h3>
              <h4>Author: {`${article.author}`}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default ArticlesMap;
