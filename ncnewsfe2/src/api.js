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
};
