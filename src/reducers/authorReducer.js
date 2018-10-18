import * as types from '../actions/ActionsTypes';
import initialSate from './initialSate';

export default function authorReducer(state = initialSate.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHOR_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
