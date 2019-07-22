import axios from 'axios';


export default {
  json: {
    getData: () => axios.get('https://jsonplaceholder.typicode.com/todos').then(res => res.data.slice(0, 1)),
  },
};
