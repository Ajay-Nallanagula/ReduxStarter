import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import loggerMiddleware from '../middlewares/loggerMiddleware'

const middlewaresArry = [loggerMiddleware]
//Only reference of reducer should be passed
const store = createStore(
    reducer,
    applyMiddleware(...middlewaresArry),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store