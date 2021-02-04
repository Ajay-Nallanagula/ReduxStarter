const funcApiMiddleware = store=>next=>action =>{
if(typeof(action) === 'function'){
    const {getState,dispatch} = store
    console.log('funcApiMiddleware --> function')
    return action(dispatch,getState,)
}
console.log('funcApiMiddleware --> object')
return next(action)
}

export default funcApiMiddleware