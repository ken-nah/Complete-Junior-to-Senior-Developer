import { SET_SEARCH_FIELD } from "./types";

const initialState = {
  searchField: ""
};

export const searchRobots = (
  state = initialState,
  { type, payload } = {}
) => {
  switch (type) {
    case SET_SEARCH_FIELD:
      return {
        ...state,
        searchField: payload
      };
    default:
      return state;
  }
};
