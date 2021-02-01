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


#region 27-01-2021
By default redux dev tools doesn't come with trace option , we will have to enable it by installing extension 
command : "npm install --save redux-devtools-extension"

Before redux-devtools-extension was installed we were using devtools by configuring our store like shown below
const store = createStore(
  reducer,
  //This is necessary to check if extension is installed 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

Now that we have devtools extension we get a HOF from extensions known as devToolsEnhancer
We can modify the code in store.js as follows 
import {devToolsEnhancer} from 'redux-devtools-extension'

//Only reference of reducer should be passed
const store = createStore(
  reducer,
  devToolsEnhancer({trace:true}) //returns storeenhancer function, which knows to talk to redux-dev-tools with trace enabled
);


How to generate source-maps :


DUCKS PATTERN : 
UI should be seperated from state management code.
consider following structure
--src
    --store
        --bugs //feature name
            --actions.js
            --actiontypes.js
            --reducers.js
        --projects //another feature
            --actions.js
            --actiontypes.js
            --reducers.js
        --auth     //another feature
            --actions.js
            --actiontypes.js
            --reducers.js
            .....

So after seperating, now if you want to modify the bugs/proj/auth state we will have to touch three different files, how about combining all the three files , this pattern of merging all three files is called Ducks pattern 

This pattern is called ducks pattern why ducks pattern because last 3 charachters of re-'DUX'

--src
    --store
        --bugs.js 
        --projects.js 
        --auth.js

#endregion 27-01-2021