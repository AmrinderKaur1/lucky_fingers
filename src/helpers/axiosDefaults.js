import axios from "axios";

const setCommonHeaders = () => {
  axios.defaults.baseURL = 'http://localhost:4000';
  axios.defaults.headers.common['Authorization'] = localStorage.jwtToken ?? '';
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}

export default setCommonHeaders;