//Action types
const BUG_ADDED = "bugAdded";
const BUG_DELETED = "bugDeleted";
const BUG_RESOLVED = "bugResolved";

//actions
export const addBug = (description) => ({
  type: BUG_ADDED,
  payload: { description },
});

export const deleteBug = (id) => ({
  type: BUG_DELETED,
  payload: { id },
});

export const resolveBug = (id) => ({
  type: BUG_RESOLVED,
  payload: { id },
});

//reducer , should be default export 
let lastId = 0;

//set intial state , when app loads state should not be undefined
export const reducer = (state = [],action={}) => {
    console.log({action})
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          //Payload should contain minimum information, we dont need id and resolved
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_DELETED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case BUG_RESOLVED:
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );
    default:
      return state;
  }
};

export default reducer;