import axios from 'axios';

const api = axios.create({
    baseURL: 'https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e/0'
});

export default api;