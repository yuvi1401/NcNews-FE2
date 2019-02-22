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

export const changeVoteOnArticle = (articleId, voteChangeNum) => {
  return axios.patch(`${BASE_URL}/articles/${articleId}`, {
    inc_votes: `${voteChangeNum}`
  });
};
