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
    csrf(){
        return axios.get(`${url}sanctum/csrf-cookie`);
    },
    login(data){
        return axios.post(`${url}login`,data)
    },
    getBooks(){
        return axios.get(`${url}fetch-book`);
    },
    getBooksByRank(){
        return axios.get(`${url}fetch-book-by-rank`);
    },
    getCategory(){
        return axios.get(`${url}category`);
    },
    addCategory(data){
        return axios.post(`${url}category`,data);
    },
    uploadBook(data){
        return axios.post(`${url}upload-book`,data);
    },
    updateBook(data){
        // console.log(id)
        return axios.post(`${url}update-book`,data);
    },
    bookDelete(id){
        return axios.delete(`${url}upload-book/${id.id}`);
    },
    borrowBook(data){
        return axios.post(`${url}borrow`,data);
    },
    getBorrowers(){
        return axios.get(`${url}borrow`);
    },
}