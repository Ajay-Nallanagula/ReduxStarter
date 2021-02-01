import * as actions from "./actionsTypes";

let lastId = 0;

//set intial state , when app loads state should not be undefined
const reducer = (state = [], action) => {
  
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          //Payload should contain minimum information, we dont need id and resolved
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_DELETED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );
    default:
      return state;
  }
};

export default reducer;
