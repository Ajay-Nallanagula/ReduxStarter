import * as actions from "./actionsTypes";

export const addBug = (description) => ({
  type: actions.BUG_ADDED,
  payload: { description },
});

export const deleteBug = (id) => ({
  type: actions.BUG_DELETED,
  payload: { id },
});

export const resolveBug =(id)=> ({
    type:actions.BUG_RESOLVED,
    payload:{id}
})