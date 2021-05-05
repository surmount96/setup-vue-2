import axios from "axios"
axios.defaults.withCredentials = true;
axios.interceptors.response.use(response => response.data)
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//Default setup for Authorization
const token = JSON.parse(localStorage.getItem('BC_token'));
axios.interceptors.request.use(function (config) {
    config.headers.Authorization =  `Bearer ${token}`;
    return config;
});
let url ='';
if(process.env.NODE_ENV === 'development'){
    url = 'https://bookclub.test/api/v1/manager/';
} else {
    url = 'https://bookclubwithlove.org/api/v1/manager/';
}


export default {
    
}