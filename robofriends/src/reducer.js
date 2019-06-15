import {
  SET_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./types";

const initialStateSearch = {
  searchField: ""
};

/* searching robots reducer */

export const searchRobots = (
  state = initialStateSearch,
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

/* fetching robots reducer */

const initialStateRobots = {
  pending: false,
  robots: [],
  errors: {}
};

export const requestRobots = (
  state = initialStateRobots,
  { type, payload }
) => {
  switch (type) {
    case REQUEST_ROBOTS_PENDING:
      return {
        ...state,
        pending: true
      };
    case REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: payload
      };
    case REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        errors: payload
      };
    default:
      return state;
  }
};
