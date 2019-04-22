import { SET_SEARCH_FIELD } from "./types";

export default (searchField = text => ({
  type: SET_SEARCH_FIELD,
  payload: text
}));
