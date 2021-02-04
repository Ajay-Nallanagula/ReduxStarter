import { createSlice } from "@reduxjs/toolkit";
let lastId = 0;
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
    bugDeleted: (bugs, action) => {
      bugs.filter((bug) => bug.id !== action.payload.id);
    },
    bugAssigned:(bugs,action) =>{
      console.log('bugAssigned')
      const {id,assignee} = action.payload
      const bugIndex = bugs.findIndex(bug => bug.id === id)
      if(bugIndex >0){
        return Object.assign([],bugs,{[bugIndex]:{...bugs[bugIndex],assignedTo : assignee}})
      }
      return bugs
    }
  },
  // bugAssignee:(bugs,action)=>{
  //   console.log('bugAssignee')
  //   const {assignee} = action.payload
  //   return bugs.filter(bug => bug.assignedTo === assignee)
  // },
  // xy:(bugs,action) =>{
  //   return bugs.filter(b => b.assignedTo === action.payload.assignee)
  // }
});
//#endregion createSlice

export const {
  actions:{ 
  bugAdded, 
  bugResolved,
   bugDeleted,
   bugAssigned,
  
  }, 
  reducer : bugsReducer 
} = slice;

export default  bugsReducer;

//selector function : takes state => returns computed state 
export const getUnresolvedBugs = (state)=> state.entites.bugs.filter(bug => !bug.resolved)
