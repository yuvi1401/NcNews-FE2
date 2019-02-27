import axios from 'axios';

const BASE_URL = 'https://bencknews.herokuapp.com/api';
export const getArticlesData = () => {
  return axios.get(`${BASE_URL}/articles`).then(({ data }) => {
    // console.log(data);
    return data.articles;
  });
};
export const getArticleData = id => {
  return axios.get(`${BASE_URL}/articles/${id}`).then(({ data }) => {
    // console.log(data);
    return data.article;
  });
  // export const getArticleBySort = value =>{
  //   return axios.get()
};
export const getSortedArticles = criteria => {
  return axios
    .get(`${BASE_URL}/articles?sort_by=${criteria}`)
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

export const getUser = username => {
  return axios.get(`${BASE_URL}/users`).then(data => {
    // console.log(data.data.users);

    const newData = data.data.users.filter(
      user => user.username === `${username}`
    );
    console.log(newData);
    return newData[0];
  });
};

export const getCommnetsForArticleId = articleId => {
  return axios
    .get(`${BASE_URL}/articles/${articleId}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};
