# ReduxStarter

We are Trying to build bug tracking system 
Actions that can be done 
1) We can add a bug
2) We can delete a bug
3) We can resolve a bug, changing boolean property to true 

To build redux we need to follow 4 steps 
1) Design the store
2) define  the actions
3) create the reducers
4) set up the store


Redux is not included in react, we need to seperately install redux library "npm i redux"
here the latest version is  4.0.5

Design the store
----------------
structure of store
[
    {
    id:'',
    desc:'',
    resolved:''
    },
    {
    id:'',
    desc:'',
    resolved:''
    }
]

Define actions
--------------
1) We can add a bug
2) We can delete a bug
3) We can resolve a bug, changing boolean property to true 

actions are plain js objects, but redux expects one of the property be 
"type" , type can be any of the serilizable type, i.e we can store on the disk
we can use strings, numbers, but numbers are not descriptive.
{type:'bugAdded',description:''}

Redux is inspired by flux, In flux the action object is slightly different
{
 type:"ITEM_ADDED", 
  payload:{  //This is from flux
  itemDescription:{
   itemId:'bla ba'
   itemName:'blah blah'
  }
 }
}

But redux doesnt restrict to use of flux, but using this makes your consistent
payload contains minimum info of the action.

Create Reducers
---------------
see reducers.js

Create store
----------
see store.js

What does the store object have 
    see assets/store.jpg
    store:{
        dispatch: function,
        getState:function,
        subscribe:function,
        Symbol(observable): function,
        replaceReducer:function,
    }

    If you see there is no direct way to access state .

dispatch actions
----------------
see index.js

subscribe to store
------------------
We need to subscribe to store when we have to notify UI when there is change in the state .
this has to be performed before  dispatch. One subscribe is sufficent which will notify whenever there is channge.

store.subscribe return refernce to unsubscribe method. When your component unmounts we need to use unsubscribe().

see index.js for example.