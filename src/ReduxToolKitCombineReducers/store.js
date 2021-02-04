import {createStore} from 'redux'
//import reducer from './bugs'
import projectReducer from './projects'
import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import reducer from './rootReducer'
import loggerMiddleware from '../middlewares/loggerMiddleware'
import logMiddleWareParam from '../middlewares/logMiddleWareParam'
import funcApiMiddleware from '../middlewares/funcApiMiddleware'
//import thunkMiddleware from 'redux-thunk'

//Only reference of reducer should be passed
//const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//configureStore takes configuration object 
const store = configureStore({
    reducer,
    //middleware:[funcApiMiddleware,loggerMiddleware,logMiddleWareParam({name:'AJAY NALLANAGULA'})]
    middleware:[...getDefaultMiddleware(),loggerMiddleware,logMiddleWareParam({name:'AJAY NALLANAGULA'})]
   // reducer:projectReducer
})

export default store