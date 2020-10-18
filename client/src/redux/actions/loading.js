import { LOADING } from "./types";

// We can use => dispatch => because of thunk middleware
export const loading = (loading = false) => {
  const id = Math.random().toString();
  return({
    type: LOADING,
    payload: loading,
  });
};