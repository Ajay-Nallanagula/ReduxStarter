import store from './store'
import {addBug,deleteBug,resolveBug} from './store/bugs'

//console.log({store})
//console.log("initial State" ,store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log('state has changed,',store.getState())
})

//dispatch should have an action
// action to add bug

//583533341
store.dispatch(addBug('Bug1'))
console.log("After dispatching AddBug" ,store.getState())
store.dispatch(addBug('Bug2'))
console.log("After dispatching AddBug" ,store.getState())
store.dispatch(addBug('Bug3'))
console.log("After dispatching AddBug" ,store.getState())
store.dispatch(deleteBug(1))
console.log("After dispatching delete bug" ,store.getState())
store.dispatch(resolveBug(2))
console.log("After dispatching resolve bug" ,store.getState())