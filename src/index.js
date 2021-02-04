//import store from './Redux_IntroWay/store'
//import {addBug,deleteBug,resolveBug} from './Redux_IntroWay/actions'
//import customStore from './Redux_BuildCustom/customStore'
//import store from './store'
//import {addBug,deleteBug,resolveBug} from './store/bugs'

//#region Redux Toolkit
//import store from './Redux ToolKit/store'
//import {addBug,deleteBug,resolveBug} from './Redux ToolKit/bugs'
//import {bugAdded as addBug,bugDeleted as deleteBug,bugResolved as resolveBug} from './Redux ToolKit/bugs'
//#endregion 

// #region combineReducer
import store from './ReduxToolKitCombineReducers/store'
import {
    bugAdded as addBug,
    bugDeleted as deleteBug,
    bugResolved as resolveBug,
    bugAssigned,
    getUnresolvedBugs
} from './ReduxToolKitCombineReducers/bugs'
import {projectAdded,projectDeleted} from './ReduxToolKitCombineReducers/projects'
import {usersAdded} from './ReduxToolKitCombineReducers/users'
//#endRegion combineReducer


//# project imports region

//import {projectAdded,projectDeleted} from './Redux ToolKit/projects'
//# end project imports region

//console.log({store})
//console.log("initial State" ,store.getState())



//#region  Redux library
//This function is to intimate the UI Layer
const unsubscribe = store.subscribe(()=>{
    console.log('state has changed,',store.getState())
})

//#region usersDispatch
//store.dispatch(usersAdded({id:1,name:'Ajay'}))
//store.dispatch({})
store.dispatch((dispatch,getState)=> {
  //CALL API, Assume we called api and got response as promise
 
 //RESOLVE PROMISE and dispatch an action respectively 
 //store.dispatch({type:'bugsRecieved',bugs:[1,2,3]})
 dispatch({type:'bugsRecieved',bugs:[1,2,3]})
 console.log(getState())
 // REJECT PROMISE and dispatch an action respectively
})
/*
store.dispatch(usersAdded({id:2,name:'Vasisht'}))
//endregion usersDispatch


//#region projects dispatch
store.dispatch(projectAdded({name:'Project1'}))
store.dispatch(projectAdded({name:'Project2'}))
store.dispatch(projectAdded({name:'Project3'}))
store.dispatch(projectDeleted({id:1}))
//endregion projects dispatch

//#region reduxToolKit way
console.log(store)
store.dispatch(addBug({description:'Bug1'}))
console.log("After dispatching AddBug" ,store.getState())
store.dispatch(addBug({description:'Bug2'}))
console.log("After dispatching AddBug" ,store.getState())
//unsubscribe()
store.dispatch(addBug({description:'Bug3'}))
console.log("After dispatching AddBug" ,store.getState())
store.dispatch(bugAssigned({id:2,assignee:1}))
console.log("After bug Assignment" ,store.getState())
store.dispatch(bugAssigned({id:3,assignee:2}))
console.log("After bug Assignment" ,store.getState())



// store.dispatch(bugByAssignee({assignee:'VASISHT'}))
// console.log("After bug bug By assignee" ,store.getState())


store.dispatch(deleteBug({id:1}))
console.log("After dispatching delete bug" ,store.getState())
store.dispatch(resolveBug({id:2}))
console.log("After dispatching resolve bug" ,store.getState())


const unResolvedBugs = getUnresolvedBugs(store.getState())
console.log({unResolvedBugs})
//#endregion reduxToolKit
*/

//dispatch should have an action
// action to add bug

//583533341
/*store.dispatch(addBug('Bug1'))
console.log("After dispatching AddBug" ,store.getState())
store.dispatch(addBug('Bug2'))
console.log("After dispatching AddBug" ,store.getState())
//unsubscribe()
store.dispatch(addBug('Bug3'))
console.log("After dispatching AddBug" ,store.getState())
store.dispatch(deleteBug(1))
console.log("After dispatching delete bug" ,store.getState())
store.dispatch(resolveBug(2))
console.log("After dispatching resolve bug" ,store.getState())*/
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
