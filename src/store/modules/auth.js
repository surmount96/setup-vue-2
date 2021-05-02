import { RepositoryFactory as Repo} from "../../repository/RepositoryFactory";
const PR = Repo.get('request'); //PR =  Public Request

const state = {
    user: JSON.parse(localStorage.getItem('BC_user')),
    token: JSON.parse(localStorage.getItem('BC_token'))
}

const getters = {
    getUser(state){
        return state.user = JSON.parse(localStorage.getItem('BC_user'));
    },
}

const mutations = {
    users(state,data){
        state.user = data.user;
        state.token = data.token;
    },
    logout(state) {
        state.token = null;
        state.user = {};
        localStorage.removeItem('BC_token');
        localStorage.removeItem('BC_user');
    }
}

const actions = {
    async signIn({commit},credentials) {
        const res = await PR.login(credentials);
        if(res.user.role === 'staff'){
            localStorage.setItem('BC_token',JSON.stringify(res.token));
            localStorage.setItem('BC_user',JSON.stringify(res.user));
            commit('users',res);
        }

        return res;

    },
    async logout({commit}){
        const res  = await commit('logout');
        return true;
    },
    async digitalizedBook({commit},credentials){
        const res = await PR.uploadBook(credentials);
        return res;
    },
    async updateBooks({commit},credentials){
      
        const res = await PR.updateBook(credentials);
        return res;
    },
    async deleteBooks({commit},id){
        const res = await PR.bookDelete(id);
        return res;
    },
    async fetchCategory(){
        const res = await PR.getCategory();
        return res;
    },
    async fetchBooks(){
        const res = await PR.getBooks();
        return res;
    },
    async fetchBooksByRank(){
        const res = await PR.getBooksByRank();
        return res;
    },
    async createNewCategory({commit},credentials){
        const res = await PR.addCategory(credentials);
        return res;
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}