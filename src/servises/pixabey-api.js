import axios from 'axios';

const BaseUrl = 'https://pixabay.com/api/';
const API_KEY = '23038109-8e0e25503253e4f392237619f';

export const imageAPI = (query, page = 1) => {
  return axios
    .get(
      `${BaseUrl}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=10`,
    )
    .then(response => response.data)
    .then(data => data.hits);
};

export const ui = () => {
  return axios
    .get(`${BaseUrl}/q='car&key=т${API_KEY}`)
    .then(response => response.data);
};
