import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4001';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

export default axios;
