//DNA =>SNA
//Middlewares are app-level , they exert the task at app level 
//Middlewares are currying methods
//You can treat them like func(store)(next)(action)
//Once the middleware accomplishes its task, it has to move on to NEXT middleware or the root reducer
//so we need to call next(action)
const logMiddleWareParam =(param)=> (store) => (next) => (action) => {
    console.log(param)
    return next(action);
  };
  
  export default logMiddleWareParam;
  