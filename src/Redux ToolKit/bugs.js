import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
/*
//What is createAction?
const bugAddedf = createAction('bugAdded')
console.log('bugAdded-createAction',bugAddedf) //This returns a function
console.log(bugAddedf()) //{type: "bugAdded", payload: undefined}
console.log(bugAddedf('blahblah')) // {type: "bugAdded", payload: "blahblah"}
console.log(bugAddedf({description:'blahblah'})) // { type: "bugAdded",payload: {description: "blahblah"} }
console.log(bugAddedf.type) //bugAdded
*/

//Action types
// const BUG_ADDED = "bugAdded";
// const BUG_DELETED = "bugDeleted";
// const BUG_RESOLVED = "bugResolved";

//actions
export const addBug = createAction("bugAdded");
export const deleteBug = createAction("bugDeleted");
export const resolveBug = createAction("bugResolved");
// export const addBug = (description) => ({
//   type: BUG_ADDED,
//   payload: { description },
// });

// export const deleteBug = (id) => ({
//   type: BUG_DELETED,
//   payload: { id },
// });

// export const resolveBug = (id) => ({
//   type: BUG_RESOLVED,
//   payload: { id },
// });

//reducer , should be default export
let lastId = 0;

//#region createReducer --> reduxToolKit
const reducer2 = createReducer([], {
  //the first param 'bug' is nothing but state itself
  [addBug.type]: (bugs, action) => {
    bugs.push({
      //Mutating code
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [resolveBug.type]: (bugs, action) => {
    //Mutating code
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
  [deleteBug.type]: (bugs, action) => {
    bugs.filter((bug) => bug.id !== action.payload.id);
  },
});
//#endregion createReducer --> reduxToolKit

//#region createSlice
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    //key:value pairs
    bugAdded: (bugs, action) => {
      bugs.push({
        //Mutating code
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      //Mutating code
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugDeleted: (bugs,action)=>{
      bugs.filter((bug) => bug.id !== action.payload.id);
    }
  },
});

console.log({slice})

//#endregion createSlice

//set intial state , when app loads state should not be undefined
export const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case addBug.type:
      return [
        ...state,
        {
          id: ++lastId,
          //Payload should contain minimum information, we dont need id and resolved
          description: action.payload.description,
          resolved: false,
        },
      ];
    case deleteBug.type:
      return state.filter((bug) => bug.id !== action.payload.id);
    case resolveBug.type:
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );
    default:
      return state;
  }
};

export const {bugAdded,bugResolved,bugDeleted} = slice.actions
export default slice.reducer;
