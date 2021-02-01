import store from './Redux_IntroWay/store'
import {addBug,deleteBug,resolveBug} from './Redux_IntroWay/actions'
//import customStore from './Redux_BuildCustom/customStore'

//console.log({store})
//console.log("initial State" ,store.getState())



//#region  Redux library
const unsubscribe = store.subscribe(()=>{
    console.log('state has changed,',store.getState())
})

//dispatch should have an action
store.dispatch(addBug('Bug1'))
console.log("After dispatching AddBug" ,store.getState())
store.dispatch(addBug('Bug2'))
console.log("After dispatching AddBug" ,store.getState())
//unsubscribe()
store.dispatch(addBug('Bug3'))
console.log("After dispatching AddBug" ,store.getState())
store.dispatch(deleteBug(1))
console.log("After dispatching delete bug" ,store.getState())
store.dispatch(resolveBug(2))
console.log("After dispatching resolve bug" ,store.getState())
//#endregion

//#region customStore
/*customStore.subscribe(()=>console.log('State Changed',customStore.getState()))
customStore.dispatch(addBug('Bug1'))
console.log("After dispatching AddBug" ,customStore.getState())
customStore.dispatch(addBug('Bug2'))
console.log("After dispatching AddBug" ,customStore.getState())
//unsubscribe()
customStore.dispatch(addBug('Bug3'))
console.log("After dispatching AddBug" ,customStore.getState())
customStore.dispatch(deleteBug(1))
console.log("After dispatching delete bug" ,customStore.getState())
customStore.dispatch(resolveBug(2))
console.log("After dispatching resolve bug" ,customStore.getState())*/
//#endregion customStore
