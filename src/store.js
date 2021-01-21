import {createStore} from 'redux'
import reducer from './reducer'

//Only reference of reducer should be passed
const store = createStore(reducer)

export default store