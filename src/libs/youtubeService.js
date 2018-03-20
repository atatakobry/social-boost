import axios from 'axios';

const API_KEY = 'AIzaSyCwI-l2BRYxBxAF9LeEYwXsfugoFJ6QTdE';

export default {
  search(searchQuery) {
    return axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: searchQuery,
          part: 'snippet',
          type: 'video',
          key: API_KEY
        }
      })
      .then(response => response.data);
  }
};