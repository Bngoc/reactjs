import * as types from '../actions/ActionsTypes';
import initialSate from './initialSate';

const actionTypeEndInSuccess = (type) => {
  return type.substring(type.length - 8) == '_SUCCESS';
};

export default function ajaxStatusReducer(state = initialSate.ajaxCallsInProgress, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR ||
    actionTypeEndInSuccess(action.type)) {
    return state - 1;
  } else {
    return state;
  }
}
