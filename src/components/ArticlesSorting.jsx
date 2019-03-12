import React from 'react';

const ArticlesSorted = props => {
  const { handleChangeSort } = props;
  return (
    <span>
      <ul>
        <button
          value="comment_count"
          onClick={handleChangeSort}
          className="button"
        >
          Comment Count
        </button>
        <button
          value="created_at"
          onClick={handleChangeSort}
          className="button"
        >
          Date Created
        </button>
        <button value="votes" onClick={handleChangeSort} className="button">
          Votes
        </button>
      </ul>
    </span>
  );
};

export default ArticlesSorted;
