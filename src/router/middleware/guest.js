export default function guest ({ next, store }){

    if(store.state.auth.token){
        return next({
            path:'/dashboard'
        });
    }

    return next()
}