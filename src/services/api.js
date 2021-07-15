import axios from 'axios';

const api = axios.create({
    headers: {"Access-Control-Allow-Origin": "*"},
    baseURL: 'http://localhost:3333/'
});

//api.defaults.timeout = 5000;

export default api;