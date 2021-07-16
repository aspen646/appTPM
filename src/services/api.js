import axios from 'axios';

const api = axios.create({
    headers: {"Access-Control-Allow-Origin": "*"},
    baseURL: 'http://192.168.56.1:3333'
});

api.defaults.timeout = 5000;

export default api;