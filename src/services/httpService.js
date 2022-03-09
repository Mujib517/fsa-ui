import axios from 'axios';

const host = 'https://fsa-jobs-api.herokuapp.com';
const axiosInstance = axios.create({ baseURL: host });


export default axiosInstance;