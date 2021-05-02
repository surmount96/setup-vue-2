export default function auth ({ next, store }){
    // console.log(store.state.auth.token)
    if(!store.state.auth.token){
        return next({
            path: '/'
        })
    }

    return next()
}