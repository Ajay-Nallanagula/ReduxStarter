import {createStore} from 'redux'
import reducer from './reducer'

//Only reference of reducer should be passed
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store