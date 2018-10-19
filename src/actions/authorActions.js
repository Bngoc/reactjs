import * as types from './ActionsTypes';
import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorSuccess(authors) {
  return {type: types.LOAD_AUTHOR_SUCCESS, authors};
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorSuccess(authors));
    }).catch(error => {
      throw (error);
    });
  };
}
