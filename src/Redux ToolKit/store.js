import {createStore} from 'redux'
import reducer from './bugs'
import projectReducer from './projects'
import {configureStore} from '@reduxjs/toolkit'

//Only reference of reducer should be passed
//const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//configureStore takes configuration object 
const store = configureStore({
    //reducer
    reducer:projectReducer
})

export default store