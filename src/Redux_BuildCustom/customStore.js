import reducer from './reducer'



function createStore(reducer){
    let state;
    let listeners =[]

    const getState = ()=>{
        return state;
    }

    const subscribe = (listener)=>{
        listeners.push(listener)
    }

    const dispatch = (action)=>{
        //1. call reducer
        
         state = reducer(state,action)
         
         //2. Notify subscriber
         for(let i =0;i<listeners.length;i++){
             listeners[i]()
         }
    }

    //This is the store object.
    return{
        getState,
        dispatch,
        subscribe
    }
}

export default createStore(reducer)