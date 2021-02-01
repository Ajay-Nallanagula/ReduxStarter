import {createStore} from 'redux'
import reducer from './store/bugs'
import {devToolsEnhancer} from 'redux-devtools-extension'

//Only reference of reducer should be passed
const store = createStore(
  reducer,
  //This is necessary to check if extension is installed
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  devToolsEnhancer({ trace: true })
);

export default store