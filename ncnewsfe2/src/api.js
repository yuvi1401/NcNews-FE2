import axios from 'axios';

const BASE_URL = 'https://bencknews.herokuapp.com/api';
export const getArticlesData = () => {
  return axios.get(`${BASE_URL}/articles?limit=100000`).then(({ data }) => {
    // console.log(data);
    return data.articles;
  });
};
export const getArticleData = id => {
  return axios.get(`${BASE_URL}/articles/${id}`).then(({ data }) => {
    console.log(data.article);
    return data.article;
  });
  // export const getArticleBySort = value =>{
  //   return axios.get()
};
export const getSortedArticles = criteria => {
  return axios
    .get(`${BASE_URL}/articles?limit=100000&sort_by=${criteria}`)
    .then(({ data }) => {
      // console.log(data);
      return data.articles;
    });
};

export const changeVoteOnArticle = (articleId, voteNum) => {
  return axios.patch(`${BASE_URL}/articles/${articleId}`, {
    inc_votes: `${voteNum}`
  });
};
// export const getUserForLogin = username => {
//   return axios.get(`${BASE_URL}/api/users/${username}`);
// };
export const deleteArticle = articleId => {
  return axios.delete(`${BASE_URL}/articles/${articleId}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};
export const getUser = username => {
  return axios.get(`${BASE_URL}/users`).then(data => {
    // console.log(data.data.users);

    const newData = data.data.users.filter(
      user => user.username === `${username}`
    );
    //console.log(newData);
    if (!newData.length) return Promise.reject('No user found');
    return newData[0];
  });
};

export const getCommnetsForArticleId = articleId => {
  return axios
    .get(`${BASE_URL}/articles/${articleId}/comments?limit=10000`)
    .then(({ data }) => {
      // console.log(data.comments);
      // console.log(articleId);
      return data.comments;
    });
};
export const postComment = (article_id, newComment) => {
  return axios
    .post(`${BASE_URL}/articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      // console.log(data);

      return data.comment;
    });
};

export const deleteComment = (articleId, commentId) => {
  return axios
    .delete(`${BASE_URL}/articles/${articleId}/comments/${commentId}`)
    .then(({ data }) => {
      //console.log(data);
      return data;
    });
};
export const getTopics = () => {
  return axios.get(`${BASE_URL}/topics`).then(({ data }) => {
    return data.topics;
  });
};
export const getArticlesByTopics = topic => {
  return axios
    .get(`${BASE_URL}/topics/${topic}/articles?limit=100000`)
    .then(({ data }) => {
      // console.log(data);
      //if (!data.articles) return Promise.reject('No Articles found');
      return data.articles;
    });
};

export const changeVoteOnComment = (articleId, voteNum, commentId) => {
  return axios.patch(
    `${BASE_URL}/articles/${articleId}/comments/${commentId}`,
    {
      inc_votes: `${voteNum}`
    }
  );
};

export const postArticle = (topic, newArticle) => {
  return axios
    .post(`${BASE_URL}/topics/${topic}/articles`, newArticle)
    .then(({ data }) => {
      return data.article;
    });
};
export const postTopic = (slug, description) => {
  return axios
    .post(`${BASE_URL}/topics`, { slug, description })
    .then(({ data }) => {
      return data.topic;
    });
};
